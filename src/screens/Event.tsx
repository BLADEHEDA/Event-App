import { SafeAreaView, StyleSheet, Text, View,Image, TextInput,ScrollView } from 'react-native'
import React from 'react'
import EventComponent from '../component/EventComponent'
import BtnPlus from '../component/shared/BtnPlus'
import Navigation from '../component/shared/Navigation'


const Event = () => {
    const search = require('../Assets/search.png')

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
    <View>
      <View style={styles.main} >

      <View><Text style={styles.mainText}>Events</Text></View>
      <View>
          <Image source={search} style={styles.search} />
      </View>
      </View>
      {/* this is meant to be hidden  */}
      <View style={styles.show}> 
             <TextInput 
                style={styles.textInput}
                placeholder='Enter Text to search'
                placeholderTextColor="gray"
                autoCapitalize="none"
                ></TextInput>
         </View>

    <View style={styles.events}>    
    <EventComponent 
    name='bruno mars'
    email='yobro@gmail.com'
    />
       <EventComponent 
    name='bruno mars'
    email='yobro@gmail.com'
    />
      <EventComponent 
    name='bruno mars'
    email='yobro@gmail.com'
    />
      </View> 
    <View><BtnPlus/></View>
  </View>
  </ScrollView>
  </View>

  )
}

export default Event

const styles = StyleSheet.create({
  
    mainText:{
        color:'black',
        fontSize:25,
        fontWeight:'500'
    },
    main:{
        backgroundColor:'#E5E5E5',
        paddingHorizontal:10,
        paddingVertical:5,
        flexDirection:'row',
        justifyContent: 'space-between',
        marginBottom:20
    },
    container: {
      flex: 1,
      backgroundColor: 'white',
      marginTop:35,
    },
    scrollView: {
      paddingHorizontal: 15,
      marginBottom: 60, // Adjust the marginBottom to make space for the button and Navigation
    },
    navigationContainer: {
      position: 'absolute',
      left: 0,
      bottom: 0,
      right: 0,
      justifyContent: 'flex-end',
      alignItems: 'center',
      backgroundColor: 'white',
      zIndex: 999,
    },
    search:{
        height:20,
        width:20,
        marginTop:6,
    },
    textInput:{
        color:'black',
        borderColor:'black',
        borderWidth:1,
        marginBottom:10
    }
})