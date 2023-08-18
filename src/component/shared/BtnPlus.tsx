import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const BtnPlus = () => {
    const imagesrc= require('../../Assets/plus.png')
  return (
    <View>      
      <View style={styles.container}>
        <TouchableOpacity style={styles.btnplus} > 
        <Text style={styles.btnText}>+</Text> 
       
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default BtnPlus

const styles = StyleSheet.create({
    btnplus:{
        backgroundColor:'#E5E5E5',
        width: 50,
         height: 50,
        borderRadius: 50,
        justifyContent: 'center', 
        alignItems: 'center', 
        // borderColor:'black',
        // borderWidth:1,
    },
    btnText:{
        fontSize:30,
        fontWeight:'700',
        color:'black'
    },
    container:{
        flexDirection:'row',
        justifyContent:'flex-end'
    }

})