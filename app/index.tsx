import React from "react";
import{View,Text,SafeAreaView,Button,StyleSheet } from 'react-native';



function app(){
  return(
    <SafeAreaView style={styles.container}>
 <View style={styles.card_container}>
  <View><Text>Eddard Stark</Text>
<Text>Winter is coming...</Text>
</View>

 </View>

 
    </SafeAreaView>
  )
}


const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#e0e0e0',

  },
  card_container:{
backgroundColor:'white',
  }

})
export default app;