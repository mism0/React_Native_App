import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increaseTotalLikesByAmount, increaseTotalLikesByOne } from "../store/reducers/dataReducers";

const HomeScreen = () => {
  const totalLikes = useSelector((state) => state.dataReducer.totalLikes);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>HomeScreen</Text>
      <Text>Total Likes: {totalLikes}</Text>
      <Button title="+" onPress={() => dispatch(increaseTotalLikesByOne())} />
      <Button title="Increase By Amount" onPress={() => dispatch(increaseTotalLikesByAmount(15))} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 25,
  },
  buttonView: {
    justifyContent: "center",
    flexDirection: "row",
  },
  button1: {
    fontSize: 30,
    padding: 5,
    margin: 8,
    fontWeight: "600",
    outlineWidth: 1,
  },
});
