import { router } from "expo-router";
import React from "react";
import { View, Text, StyleSheet,Button, Alert } from "react-native";

export default function HomeScreen() {
  const login =()=>{
    router.push("/home")
  }
  return (
    <View style={styles.home}>
      <Text>首页</Text>
      <Button title="登录" onPress={login}></Button>
    </View>
  );
}
const styles = StyleSheet.create({
  home:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
});
