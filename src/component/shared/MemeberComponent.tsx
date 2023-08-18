import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const MemeberComponent = (props) => {
    const person = require('../../Assets/person.jpg');
  return (
    <View style={styles.main}>
    <View>
    <Image style={styles.image} source={person} />
    </View>
    <View style={styles.texts}>
        <Text style={styles.text}>{props.name} yo</Text>
        <Text style={styles.text} >{props.email} yep bro</Text>
    </View>
    </View>
  )
}

export default MemeberComponent

const styles = StyleSheet.create({
    main:{
        backgroundColor:'#1E319D',
        paddingHorizontal:10,
        paddingVertical:7,
        borderRadius:8,
        marginBottom:10,
        flexDirection:'row',

    },
    text:{
        color:'white',
        fontSize:15
    },
    image: {
        width: 50,
        height: 50,
        borderRadius:50
      },
      texts:{
        marginLeft:5,
            marginTop: 2,
      }
})