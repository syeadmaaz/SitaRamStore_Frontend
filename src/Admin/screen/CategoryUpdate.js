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
import * as ImagePicker from "expo-image-picker";

import AppStatusBar from "../../components/AppStatusBar/AppStatusBar";
import Header from "../../components/Header/Header";
import SearchHeader from "../../components/Header/SearchHeader";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
8
import { COLORS, WIDTH, HEIGHT } from "../../constants/theme";

import axios from "../../../axios.automate";

const CategoryUpdate = () => {
  const [photo, setPhoto] = React.useState(null);

  const [name, setName] = React.useState("");
  const [desc, setDesc] = React.useState("");

  const [category, setCategory] = React.useState(null);
  const [message, setMessage] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const Separator = () => <View style={styles.separator} />;

  const LowerHeader = () => {
    return (
      <>
        <SearchHeader />
        <Text style={styles.categoryText}>Categories</Text>
      </>
    );
  };

  const Footer = () => {
    return <></>;
  };

  const AddCategory = () => {
    return (
      <>
        <View style={styles.container}>
          <TextInput
            placeholder={"Category Name*"}
            value={name}
            onChangeText={(text) => setName(text)}
          />
          <TextInput
            placeholder={"Category Description*"}
            value={desc}
            onChangeText={(text) => setDesc(text)}
          />
          <View>
            <TouchableOpacity
              onPress={openImageLibrary}
              style={styles.uploadBtnContainer}
            >
              {photo ? (
                <Image
                  source={{ uri: photo }}
                  style={{ width: "100%", height: "100%" }}
                />
              ) : (
                <Text style={styles.uploadBtn}>Upload Category Image</Text>
              )}
            </TouchableOpacity>

            <Text style={styles.skip}>Skip</Text>
            {photo && name ? (
              <Text
                onPress={uploadPhoto}
                style={[
                  styles.skip,
                  { backgroundColor: "green", color: "white", borderRadius: 8 },
                ]}
              >
                Upload Category
              </Text>
            ) : null}
          </View>
        </View>
      </>
    );
  };

  const renderData = (item) => {
    return (
      <CategoryCard item={item} onPress={() => goToProductsScreen(item)} />
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
        title={"HOME"}
        // onPressMenu={logout}
        onPressCart={() => navigation.navigate("CartScreen")}
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
            <Separator />
            <Button
              title="Add Category"
              onPress={() => Alert.alert("Simple Button pressed")}
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
    backgroundColor: COLORS.white,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
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
