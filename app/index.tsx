import React from "react";
import{View,Text,SafeAreaView,StyleSheet,TouchableOpacity } from 'react-native';
import Card from '../components/card/Card';

function app(){
  return(
    <SafeAreaView style={styles.container}>
<Card title="Eddard Stark" text="Winter is coming..."></Card>
<Card title="Arif IŞIK" text="Uzaylılar tarafından kaçırıldım.Evet tarafından"></Card>
<Card title="Serbest" text="İlhami abi sen söyle, ben başka ilde miyim?"></Card>

    </SafeAreaView>
  )
}


const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#e0e0e0',
  },
  
})
export default app;