import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import BtnPlus from '../component/shared/BtnPlus';
import MemberComponent from '../component/shared/MemeberComponent';
import Navigation from '../component/shared/Navigation';

const EventDetails = () => {
  const image = require('../Assets/backarrow.png');
  const persons = require('../Assets/multiple.png');
  
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeAreaContainer}>
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
          <MemberComponent />
          <MemberComponent />
        </View>
      </SafeAreaView>
      
      <View style={styles.navigationContainer}>
        <Navigation />
      </View>
    </View>
  );
};

export default EventDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  safeAreaContainer: {
    flex: 1,
    marginTop: 30,
    paddingHorizontal: 15,
  },
  image: {
    height: 30,
    width: 30,
    marginBottom: 30,
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
},

  navigationContainer: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,
    justifyContent: 'flex-end', // Align content at the bottom
    alignItems: 'center',
    backgroundColor: 'white',
    zIndex: 999,
  },
  
});
