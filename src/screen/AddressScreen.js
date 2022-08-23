import { React, useState, useEffect } from "react";
import { Text, View, SafeAreaView, StyleSheet, FlatList } from "react-native";
import { COLORS } from "../constants/theme";
import { DrawerActions } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";

import AppStatusBar from "../components/AppStatusBar/AppStatusBar";
import Header from "../components/Header/Header";
import AddButton from "../components/AddButton/AddButton";
import AddressCardMain from "../components/AddressCardMain/AddressCardMain";

const AddressScreen = ({ navigation }) => {
  const address = useSelector((state) => state.address);
  
  const [refresh, setRefresh] = useState(false);

  function add() {
    navigation.navigate("AddAddressScreen");
  }

  const LowerHeader = () => {
    return (
      <>
        <AddButton onPress={add} />
      </>
    );
  };

  const renderData = (item) => {
    return (
      <AddressCardMain
        item={item}
        // onPressNavigate={() => goToProductsScreen(item)}
        // onPressDelete={() => deleteCategory(item)}
      />
    );
  };

  const Footer = () => {
    return <></>;
  };

  return (
    <SafeAreaView style={styles.container}>
      <AppStatusBar translucent={true} backgroundColor={COLORS.orange} />
      <Header
        title={"ADDRESS"}
        name1={"sort-variant"}
        onPress1={() => navigation.dispatch(DrawerActions.openDrawer())}
      />
      <View style={styles.content}>
        <FlatList
          data={address}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => {
            return renderData(item);
          }}
          // keyExtractor={(item) => `${item.categoryID}`}
          scrollEnabled={true}
          ListHeaderComponent={<LowerHeader />}
          ListFooterComponent={<Footer />}
          extraData={address}
          // refreshing={refresh}
          // onRefresh={handleRefresh}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  content: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: COLORS.white,
  }
});

export default AddressScreen;
