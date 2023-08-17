import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const person = require('../Assets/person.jpg');

const Person = () => {
  return (
    <View style={styles.container} >
      <View style={styles.left} >
        <Image style={styles.image} source={person} />
      </View>
      <View>
        <Text style={styles.text}>blade</Text>
        <Text  style={styles.text}>blablabla"gmail.com</Text>
      </View>
   
    </View>
  )
}

export default Person

const styles = StyleSheet.create({
  container:{
    color:'black',
    flexDirection:'row',
    marginVertical:5
  },
  image:{
    width:50,
    height:35,
  },
  text:{
    color:'black'
  },
  left:{
    marginRight:5,
    marginTop:5,
  }
})