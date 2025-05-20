import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
const DetailsScreen = () => {
  const totalLikes = useSelector((state: RootState) => state.dataReducer.totalLikes);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>DetailsScreen</Text>
      <Text style={styles.title}>Total Likes: {totalLikes}</Text>
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 25,
  },
});
