import { SafeAreaView, StyleSheet, Text, View,Image, TextInput } from 'react-native'
import React from 'react'
import EventComponent from '../component/EventComponent'
import BtnPlus from '../component/shared/BtnPlus'


const Event = () => {
    const search = require('../Assets/search.png')

  return (
    <SafeAreaView style={styles.container}>  
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
  </SafeAreaView>
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
    container:{
        marginTop:25,
        paddingHorizontal:15
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