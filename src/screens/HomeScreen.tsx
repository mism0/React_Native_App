import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseTotalLikes,
  increaseLikeByAmount,
  increaseTotalLikes,
} from "../store/actions/dataActions";
import { dataReducer } from "../store/reducers/dataReducer";
import { RootState } from "../store/store";
const HomeScreen = () => {
  // const navigation = useNavigation();

  const totalLikes = useSelector((state: RootState) => state.dataReducer.totalLikes);
  const userName = useSelector((state: RootState) => state.dataReducer.userName);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>HomeScreen</Text>
      <Text style={styles.title}>Total Likes: {totalLikes}</Text>
      <Text style={styles.title}>User Name: {userName}</Text>
      <View style={styles.buttonView}>
        {/* <Button title="+" onPress={() => dispatch(increaseTotalLikes())} /> */}
        {/* <Button title="-" onPress={() => dispatch(decreaseTotalLikes())} /> */}
        <TouchableOpacity onPress={() => dispatch(increaseTotalLikes())}>
          <Text style={styles.button1}>
            +
          </Text>
        </TouchableOpacity>
        <TouchableOpacity  onPress={() => dispatch(decreaseTotalLikes())}>
          <Text style={styles.button1}>
            -
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => dispatch(increaseLikeByAmount(20))}>
        <Text>
          Increase Likes By Amount
        </Text>
      </TouchableOpacity>
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
    fontSize:30,
    padding: 5,
    margin:8,
    fontWeight:"600",
    outlineWidth:1,
  },
});
