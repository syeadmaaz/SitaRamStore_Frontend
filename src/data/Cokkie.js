import AsyncStorage from "@react-native-async-storage/async-storage";

const storeData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem("@userData", jsonValue);
  } catch (e) {
    console.log(e)
  }
};

const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("@userData");
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
};

export function setCookie(userName, userType) {
//   console.log(userName, userType);
  storeData({
    userName: userName,
    userType: userType,
  });
}
export async function getCookie() {
    const response = await getData();
    return response;
}

export async function clearCookie() {
  await AsyncStorage.clear();
}
