import { Image, StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faMugSaucer } from '@fortawesome/free-solid-svg-icons/faMugSaucer'
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Navigation = () => {
  const image1 = require('../../Assets/person1.png')
  const image2 = require('../../Assets/home.png')
  const image3 = require('../../Assets/event1.png')
  const press = ()=>{
    alert('hello bro')
  }

  return (
    <View style={styles.container}>
      <View style={styles.text}></View>
      <View style={styles.navparent}>  
      <View style={styles.navmain}>
      <TouchableOpacity >
            <Image source={image1} style={styles.navimage} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={image2} style={styles.navimage1} />
          </TouchableOpacity>
          <TouchableOpacity >
            <Image source={image3} style={styles.navimage} />
          </TouchableOpacity>
       </View>
      </View>
    </View>
  )
}

export default Navigation

const styles = StyleSheet.create({
  text:{
    backgroundColor: 'black',
  height: 1,
  marginBottom:10
  },
  navmain:{
    flexDirection:'row',
    justifyContent:'space-between',
  },
  navparent:{
    // borderColor:'black',
    // borderWidth:1,
    width:'70%',
    alignSelf: 'center', // Center horizontally
    paddingTop:2,

  },
  navimage:{
    height:25,
    width:25,
  },
  navimage1:{
    height:40,
    width:40,
    marginTop:-8
  },
  container: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,
    justifyContent: 'flex-end', // Align content at the bottom
    alignItems: 'center',
    // marginTop: 100, // Adjust this margin as needed
    backgroundColor:'white',
    zIndex:999
  },
})