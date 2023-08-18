import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BtnPlus from '../component/shared/BtnPlus'
import MemberComponent from '../component/shared/MemeberComponent'

const EventDetails = () => {
    const image = require('../Assets/backarrow.png')
    const persons = require('../Assets/multiple.png')
  return (
    <SafeAreaView  style={styles.container} > 
    <View>
        <Image source={image} style={styles.image} />
    </View>
    <View style={styles.Eventdetails} >
    <Text style={styles.texts}>- Event title</Text>
    <Text style={styles.texts}>- Start date</Text>
    <Text style={styles.texts}>- End Date</Text>
    <Text style={styles.texts}>- Start time</Text>
    <Text style={styles.texts}>- Event description</Text>
    </View>
    <View style={styles.textcontainer}>
        <View >
            <Image source={persons} style={styles.image1} /></View>
        <View><Text style={styles.texts1}>participants</Text></View>
        <View style={styles.texts2}><BtnPlus/></View>
    </View>
    <View>
        <MemberComponent/>
        <MemberComponent/>
    </View>

    </SafeAreaView>   
  )
}

export default EventDetails

const styles = StyleSheet.create({
    container:{
        marginTop:30,
        paddingHorizontal:15,
    },
    image:{
        height:30,
        width:30,
        marginBottom:30,
    },
    image1:{
        height:45,
        width:45,
        marginBottom:30,
    },
    Eventdetails:{
        padding:10,
        backgroundColor:'#E5E5E5',
        borderRadius:5,
        marginBottom:40,
    },
    texts:{
        color:'black', 
        fontSize:15,
        fontWeight:'600'
    },
    texts1:{
        color:'black', 
        fontSize:25,
        fontWeight:'600'   
    },
    texts2:{
    marginTop:-3

    },
    textcontainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        // borderWidth:1,
        // borderColor:'black',
        marginBottom:5,
    }
})