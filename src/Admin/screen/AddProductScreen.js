import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  TextInput,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import SelectDropdown from "react-native-select-dropdown";
import axios from "../../../axios.automate";
import { COLORS, WIDTH } from "../../constants/theme";

import Header from "../../components/Header/Header";
import AppStatusBar from "../../components/AppStatusBar/AppStatusBar";

const AddProductScreen = () => {
  const [photo, setPhoto] = React.useState(null);
  const [name, setName] = React.useState("");
  const [desc, setDesc] = React.useState("");
  const [categoryID, setCategoryID] = React.useState(null);
  const [category, setCategory] = React.useState(null);
  const [message, setMessage] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [price, setPrice] = React.useState("");
  const [mrp, setMrp] = React.useState("");

  const UploadProduct = () => {
    if (name && desc && mrp && price && categoryID && photo) {
      return (
        <View style={{ backgroundColor: COLORS.orange, borderRadius: 10 }}>
          <TouchableOpacity>
            <Text
              style={{ color: "white", textAlign: "center", fontSize: 30 }}
              onPress={uploadPhoto}
            >
              Upload
            </Text>
          </TouchableOpacity>
        </View>
      );
    } else {
      return (
        <View style={{ backgroundColor: "silver", borderRadius: 10 }}>
          <TouchableOpacity disabled={true}>
            <Text style={{ color: "black", textAlign: "center", fontSize: 30 }}>
              Upload
            </Text>
          </TouchableOpacity>
        </View>
      );
    }
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
    formData.append("categoryID", categoryID);
    formData.append("mrp", mrp);
    formData.append("price", price);

    // console.log(formData)

    try {
      const res = await axios.post("/adminProductUpdate", formData, {
        headers: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data",
          // authorization: `JWT ${token}`,
        },
      });

      // console.log(res.data);

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
    <View style={styles.container}>
      <AppStatusBar translucent={true} backgroundColor={COLORS.orange} />
      <Header title={"ADD PRODUCT"} />
      <View style={styles.content}>
        <View style={styles.alignText}>
          <TextInput
            style={styles.deco}
            placeholder={"NAME*"}
            placeholderTextColor={"grey"}
            keyboardType="default"
            autoCapitalize={"none"}
            value={name}
            onChangeText={(text) => setName(text)}
          />
          <TextInput
            style={styles.deco}
            placeholder={"DESCRIPTION*"}
            placeholderTextColor={"grey"}
            keyboardType="default"
            autoCapitalize={"none"}
            value={desc}
            onChangeText={(text) => setDesc(text)}
          />
          <TextInput
            style={styles.deco}
            placeholder={"MRP*"}
            placeholderTextColor={"grey"}
            keyboardType="default"
            autoCapitalize={"none"}
            value={mrp}
            onChangeText={(text) => setMrp(text)}
          />
          <TextInput
            style={styles.deco}
            placeholder={"PRICE*"}
            placeholderTextColor={"grey"}
            keyboardType="default"
            autoCapitalize={"none"}
            value={price}
            onChangeText={(text) => setPrice(text)}
          />
        </View>
        <SelectDropdown
          style={styles.deco}
          keyboardType="default"
          autoCapitalize={"none"}
          data={category}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
            setCategoryID(selectedItem.categoryID);
          }}
          buttonTextAfterSelection={(selectedItem) => {
            return selectedItem.categoryName;
          }}
          rowTextForSelection={(item) => {
            return item.categoryName;
          }}
        />
        <View style={styles.alignImage}>
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
              <Text style={styles.uploadBtn}>Upload Image</Text>
            )}
          </TouchableOpacity>
        </View>
        <View style={styles.alignbtn}>
          <UploadProduct />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    width: WIDTH.screenWidth,
  },
  content: {
    flex: 1,
    flexDirection: "column",
    paddingHorizontal: "6%",
    backgroundColor: COLORS.white,
  },
  deco: {
    width: "100%",
    borderWidth: 1.5,
    fontWeight: "bold",
    borderColor: COLORS.orange,
    height: 52,
    borderRadius: 10,
    padding: 15,
    marginTop: 20,
    color: "black",
  },
  alignText: {
    // padding: 5,
  },

  uploadBtnContainer: {
    height: 125,
    width: 125,
    borderRadius: 125 / 6,
    justifyContent: "center",
    alignItems: "center",
    borderStyle: "dashed",
    borderWidth: 1.5,
    overflow: "hidden",
    borderColor: COLORS.orange,
  },
  uploadBtn: {
    textAlign: "center",
    fontSize: 16,
    opacity: 0.3,
    fontWeight: "bold",
  },
  alignImage: {
    // justifyContent: 'center',
    alignItems: "center",
    marginTop: "4%",
  },
  alignbtn: {
    padding: "5%",
  },
});

export default AddProductScreen;
