import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";
import {useDispatch, useSelector} from 'react-redux'
import { RootState } from '../store/store';
import { changeRole } from '../store/actions/settingsActions';
const SettingsScreen = () => {
 const totalLikes = useSelector((state: RootState) =>state.dataReducer.totalLikes)
 const userRole = useSelector((state: RootState) => state.settings.userRole)

 const dispatch = useDispatch() 

  return (
    <View style={styles.container}>
      <Text style={styles.title}>SettingsScreen</Text>
      <Text style={styles.title}>Total Likes:  {totalLikes}</Text>
      <Text style={styles.title}>User Role:  {userRole}</Text>

      <Button title='Change Role' onPress={() => dispatch(changeRole('USER'))}/>
    </View>
  )
}

export default SettingsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title:{
    fontSize:25
  }
});
