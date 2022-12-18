import { StyleSheet } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Button, Appbar, Text } from "react-native-paper";

const Menu = () => {
  const navigation = useNavigation();
  return (
    <Appbar style={styles.navColor}>
      <Appbar.Action
        icon="account"
        mode="default"
        onPress={() => navigation.navigate("Account")}
      />

      <Appbar.Action
        icon="google-classroom"
        mode="default"
        onPress={() => navigation.navigate("Classroom")}
      />

      <Appbar.Action
        icon="gamepad"
        mode="default"
        onPress={() => navigation.navigate("GameInfo")}
      />

      <Appbar.Action
        icon="gamepad-variant"
        mode="default"
        onPress={() => navigation.navigate("Games")}
      />

      <Appbar.Action
        icon="store"
        mode="default"
        onPress={() => navigation.navigate("Market")}
      />

      <Appbar.Action
        icon="message"
        mode="default"
        onPress={() => navigation.navigate("Messages")}
      />

      <Appbar.Action
        icon="cellphone"
        mode="default"
        onPress={() => navigation.navigate("MyStuff")}
      />

      <Appbar.Action
        icon="nature-people"
        mode="default"
        onPress={() => navigation.navigate("People")}
      />

      <Appbar.Action
        icon="human"
        mode="default"
        onPress={() => navigation.navigate("Profiles")}
      />
    </Appbar>
  );
};

const styles = StyleSheet.create({
  navColor: {
    marginLeft: -13,
  },
});

export default Menu;
