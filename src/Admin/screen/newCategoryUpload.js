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
import { Button } from "react-native-paper";
import { COLORS, WIDTH } from "../../constants/theme";
import Header from "../../components/Header/Header";

const App = () => {
  const [photo, setPhoto] = React.useState(null);
  const [name, setName] = React.useState("");
  const [desc, setDesc] = React.useState("");
  const [category, setCategory] = React.useState(null);
  const [message, setMessage] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const UploadCategory = () => {
    if (name && photo) {
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
    <View style={styles.container}>
      <Header title={"ADD CATEGORY"} />

      <View style={styles.styling}>
        <View style={styles.align}>
          <TextInput
            style={styles.deco}
            placeholder={"Name*"}
            placeholderTextColor={"grey"}
            keyboardType="default"
            autoCapitalize={"none"}
            value={name}
            onChangeText={(text) => setName(text)}
          />
        </View>
        <View style={styles.align}>
          <TextInput
            style={styles.deco}
            placeholder={"Description"}
            value={desc}
            onChangeText={(text) => setDesc(text)}
          />
        </View>
      </View>
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
            <Text style={styles.uploadBtn}>Upload Image*</Text>
          )}
        </TouchableOpacity>

        {/* <Text style={styles.skip}>Skip</Text> */}

        {/* {photo && name ? (
          <Text
            onPress={uploadPhoto}
            style={[
              styles.skip,
              { backgroundColor: "green", color: "white", borderRadius: 8 },
            ]}
          >
            Upload Category
          </Text>
        ) : null} */}
      </View>
      <View style={styles.alignbtn}>
        <UploadCategory />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  styling: {
    width: WIDTH.screenWidth,
    padding: 5,
  },
  align: {
    padding: 5,
  },
  deco: {
    width: "100%",
    borderWidth: 1.5,
    fontWeight: "bold",
    borderColor: "orange",
    height: 52,
    borderRadius: 10,
    padding: 15,
    marginTop: 20,
    color: "black",
  },
  container: {
    // flex: 1,
    marginTop: "6%",
    // justifyContent: "center",
    // alignItems: "center",
  },
  uploadBtnContainer: {
    height: 125,
    width: 125,
    borderRadius: 125 / 6,
    justifyContent: "center",
    // alignItems: "center",
    borderStyle: "dashed",
    borderWidth: 1.5,
    overflow: "hidden",
    borderColor: "orange",
  },
  uploadBtn: {
    textAlign: "center",
    fontSize: 16,
    opacity: 0.3,
    fontWeight: "bold",
  },
  alignbtn: {
    padding: "5%",
  },
  alignImage: {
    // justifyContent: 'center',
    alignItems: "center",
    marginTop: "4%",
  },
  //   skip: {
  //     textAlign: "center",
  //     padding: 10,
  //     fontSize: 16,
  //     fontWeight: "bold",
  //     textTransform: "uppercase",
  //     letterSpacing: 2,
  //     opacity: 0.5,
  //   },
});

export default App;
