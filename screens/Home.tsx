import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Button from '../src/component/shared/Button'
import Logo from '../src/component/shared/Logo'

const Home = () => {
  return (   
    <View style={styles.container}>
           <View style={styles.logo} >  
        <Logo/>
        </View>
        <Text style={styles.text} >
        synchronize your events without stress
        </Text>
        <View style={styles.imagecontainer}>
            <Image source={require('../src/Assets/illustration.jpg') } style={styles.image} />
        </View>

      <Button
    text="New Event"
    style={
    { marginTop:7 }  
    }
    />
        <Button
    text="Add Members"
    style={
    { marginTop:10 }  
    }
    />
  
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
        marginTop:50,
        paddingHorizontal:15,
        backgroundColor:'white'
    },
    logo:{
        marginBottom:20,
    },
    text:{
        textAlign:'center',
        color:'black',
        fontSize:24,
        marginHorizontal:70,
        marginBottom:10
    },
    image: {
        width: 300,
        height: 250,
      },
      imagecontainer:{
        flexDirection:'row',
        justifyContent:'center'
      }
})