import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  SafeAreaView,
  FlatList,
  TextInput,
  Button,
  ActivityIndicator,
  Alert,
} from "react-native";
import { Card } from "react-native-paper";
import * as ImagePicker from "expo-image-picker";
import Icon from "react-native-vector-icons/MaterialIcons";

import AppStatusBar from "../../components/AppStatusBar/AppStatusBar";
import Header from "../../components/Header/Header";
import SearchHeader from "../../components/Header/SearchHeader";
// import CategoryCard from "../../components/CategoryCard/CategoryCard";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import { COLORS, WIDTH, HEIGHT } from "../../constants/theme";

import axios from "../../../axios.automate";
import SearchBar from "../../components/SearchBar/SearchBar";
import EditCategory from "./EditCategory";

const CategoryUpdate = ({ navigation }) => {
  const [photo, setPhoto] = React.useState(null);

  const [name, setName] = React.useState("");
  const [desc, setDesc] = React.useState("");

  const [category, setCategory] = React.useState(null);
  const [message, setMessage] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const LowerHeader = () => {
    return (
      <>
        {/* <SearchHeader /> */}
        <SearchBar />
        {/* <Text style={styles.categoryText}>Categories</Text> */}

        <View>
          <TouchableOpacity
            activeOpacity={0.1}
            onPress={() => navigation.navigate("newCategoryUpload")}
          >
            <Card elevation={27} style={styles.addCard}>
              <Icon
                name={"add"}
                size={70}
                color={"black"}
                // onPress={navigation.navigate("ImageUpload")}
              />
            </Card>
          </TouchableOpacity>
        </View>
        {/* <Button
          title="Add Category"
          onPress={() => Alert.alert("Simple Button pressed")}
        /> */}
      </>
    );
  };

  const Footer = () => {
    return <></>;
  };

  // const AddCategory = () => {
  //   return (
  //     <>
  //       <View style={styles.container}>
  //         <TextInput
  //           placeholder={"Category Name*"}
  //           value={name}
  //           onChangeText={(text) => setName(text)}
  //         />
  //         <TextInput
  //           placeholder={"Category Description*"}
  //           value={desc}
  //           onChangeText={(text) => setDesc(text)}
  //         />
  //         <View>
  //           <TouchableOpacity
  //             onPress={openImageLibrary}
  //             style={styles.uploadBtnContainer}
  //           >
  //             {photo ? (
  //               <Image
  //                 source={{ uri: photo }}
  //                 style={{ width: "100%", height: "100%" }}
  //               />
  //             ) : (
  //               <Text style={styles.uploadBtn}>Upload Category Image</Text>
  //             )}
  //           </TouchableOpacity>

  //           <Text style={styles.skip}>Skip</Text>
  //           {photo && name ? (
  //             <Text
  //               onPress={uploadPhoto}
  //               style={[
  //                 styles.skip,
  //                 { backgroundColor: "green", color: "white", borderRadius: 8 },
  //               ]}
  //             >
  //               Upload Category
  //             </Text>
  //           ) : null}
  //         </View>
  //       </View>
  //     </>
  //   );
  // };

  // function goToEditScreen() {
  //   navigation.navigate("EditCategory");
  // }

  const renderData = (item) => {
    return (
      <EditCategory
        item={item}
        onPressNavigate={() => {
          navigation.navigate("AdminStackScreen", { screen: "ImageUpload" });
        }}
      />
    );
  };

  React.useEffect(() => {
    setLoading(true);
    axios
      .get("getCategory", { params: {} })
      .then((res) => {
        setLoading(false);
        console.log(res);
        if (res.data.success) {
          setCategory(res.data.categoryItems);
        }
      })
      .catch((err) => {
        setLoading(false);
        setError("Connection Failed !!");
        console.log(err);
      });
  }, []);

  const uploadPhoto = async () => {
    console.log(photo);
    const formData = new FormData();
    formData.append("image", {
      name: new Date() + "_image",
      uri: photo,
      type: "image/jpg",
    });

    formData.append("name", name);
    formData.append("desc", desc);

    // console.log(formData)

    try {
      const res = await axios.post("/adminCategoryUpdate", formData, {
        headers: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data",
          // authorization: `JWT ${token}`,
        },
      });

      console.log(res.data);

      if (res.data.success) {
        // props.navigation.dispatch(StackActions.replace("UserProfile"));
        console.log("Success");
        console.log(res.data.message);
        setMessage(res.data.message);
      }
    } catch (error) {
      console.log(error);
      setMessage(error.message);
    }
  };

  const openImageLibrary = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== "granted") {
      alert("Sorry, we need camera roll permissions to make this work!");
    }

    if (status === "granted") {
      const response = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
      });

      if (!response.cancelled) {
        setPhoto(response.uri);
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <AppStatusBar translucent={true} backgroundColor={COLORS.orange} />
      <Header
        title={"Add/Edit Category"}
        // onPressMenu={logout}
        // onPressCart={() => navigation.navigate("CartScreen")}
      />
      <View style={styles.content}>
        {loading ? (
          error ? (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                flex: 1,
              }}
            >
              <Text style={{ color: "red", fontSize: 18, fontWeight: "bold" }}>
                {error}
              </Text>
            </View>
          ) : (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                flex: 1,
              }}
            >
              <ActivityIndicator size={80} color={COLORS.orange} />
            </View>
          )
        ) : (
          <>
            <FlatList
              numColumns={2}
              data={category}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => {
                return renderData(item);
              }}
              keyExtractor={(item) => `${item.categoryID}`}
              scrollEnabled={true}
              ListHeaderComponent={<LowerHeader />}
              ListFooterComponent={<Footer />}
            />
          </>
        )}
      </View>
    </SafeAreaView>
    // <View style={styles.container}>
    //   <TextInput
    //     placeholder={"Category Name*"}
    //     value={name}
    //     onChangeText={(text) => setName(text)}
    //   />
    //   <TextInput
    //     placeholder={"Category Description*"}
    //     value={desc}
    //     onChangeText={(text) => setDesc(text)}
    //   />
    //   <View>
    //     <TouchableOpacity
    //       onPress={openImageLibrary}
    //       style={styles.uploadBtnContainer}
    //     >
    //       {photo ? (
    //         <Image
    //           source={{ uri: photo }}
    //           style={{ width: "100%", height: "100%" }}
    //         />
    //       ) : (
    //         <Text style={styles.uploadBtn}>Upload Category Image</Text>
    //       )}
    //     </TouchableOpacity>

    //     <Text style={styles.skip}>Skip</Text>
    //     {photo && name ? (
    //       <Text
    //         onPress={uploadPhoto}
    //         style={[
    //           styles.skip,
    //           { backgroundColor: "green", color: "white", borderRadius: 8 },
    //         ]}
    //       >
    //         Upload Category
    //       </Text>
    //     ) : null}
    //   </View>
    // </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    width: WIDTH.screenWidth,
    // backgroundColor: COLORS.orange,
  },
  addCard: {
    alignItems: "center",
    justifyContent: "center",
    // width: WIDTH.screenWidth,
    marginHorizontal: "5%",
    marginTop: "2%",
  },
  categoryText: {
    fontSize: 25,
    fontWeight: "bold",
    marginTop: "8%",
    paddingHorizontal: "5%",
    paddingVertical: "5%",
    color: COLORS.dark,
    // backgroundColor: "white",
  },
  content: {
    flex: 1,
    flexDirection: "column",
    // backgroundColor: COLORS.white,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  uploadBtnContainer: {
    height: 125,
    width: 125,
    borderRadius: 125 / 2,
    justifyContent: "center",
    alignItems: "center",
    borderStyle: "dashed",
    borderWidth: 1,
    overflow: "hidden",
  },
  uploadBtn: {
    textAlign: "center",
    fontSize: 16,
    opacity: 0.3,
    fontWeight: "bold",
  },
  skip: {
    textAlign: "center",
    padding: 10,
    fontSize: 16,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 2,
    opacity: 0.5,
  },
});

export default CategoryUpdate;
