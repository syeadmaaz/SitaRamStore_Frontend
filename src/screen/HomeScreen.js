import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View >
        <Text>This is my HomeScreen</Text>
        {/* <StatusBar style="auto" /> */}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HomeScreen;
