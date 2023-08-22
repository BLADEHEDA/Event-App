import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Button from '../component/shared/Button'
import Login from './Login'
import Logo from '../component/shared/Logo'

const Home = ({navigation}) => {
  // navigate to the createEvent page 
  const handleEvent=()=>{
    navigation.navigate('createEvent')
  }
  // Navigate to the createMemebrs page 
  const handleMembrs=()=>{
    navigation.navigate('CreateMember')
  }
  return (   
    <View style={styles.container}>
           <View style={styles.logo} >
        {/* <Logo/> */}
        <Logo/>
        </View>
        <Text style={styles.text} >
        synchronize your events without stress
        </Text>
        <View style={styles.imagecontainer}>
            <Image source={require('../Assets/illustration.jpg') } style={styles.image} />
        </View>
    <Button
      onPress={handleEvent}
      text="New Event"
      style={
        { marginTop:10 }  
        }
    />
        <Button
        onPress={handleMembrs}
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
        paddingTop:50,
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