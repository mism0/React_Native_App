import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>SettingsScreen</Text>
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
