import React from "react";
import { View, StyleSheet, TouchableOpacity, Text, Image, TextInput } from "react-native";
import * as ImagePicker from "expo-image-picker";

import axios from "../../axios.automate";

const App = () => {
  const [photo, setPhoto] = React.useState(null);

  const [name,setName] = React.useState(null)
  const [desc,setDesc] = React.useState(null)

  const [message,setMessage] = React.useState(null)

  const uploadPhoto = async () => {
    console.log(photo)
    const formData = new FormData();
    formData.append("image", {
      name: new Date() + "_image",
      uri: photo,
      type: "image/jpg",
    });

    formData.append("name", name);
    formData.append("desc",desc)

    // console.log(formData)

    try {
      const res = await axios.post("/adminCategoryUpdate", formData, {
        headers: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data",
          // authorization: `JWT ${token}`,
        },
      });

      console.log(res.data)

      if (res.data.success) {
        // props.navigation.dispatch(StackActions.replace("UserProfile"));
        console.log("Success")
        console.log(res.data.message)
        setMessage(res.data.message)
      }
    } catch (error) {
      console.log(error)
      setMessage(error.message)
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
      <TextInput
        placeholder={"Name*"}
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        placeholder={"Description*"}
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
            <Text style={styles.uploadBtn}>Upload Image</Text>
          )}
        </TouchableOpacity>
        <Text style={styles.skip}>Skip</Text>
        {photo ? (
          <Text
            onPress={uploadPhoto}
            style={[
              styles.skip,
              { backgroundColor: "green", color: "white", borderRadius: 8 },
            ]}
          >
            Upload
          </Text>
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default App;
