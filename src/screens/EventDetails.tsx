import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import BtnPlus from '../component/shared/BtnPlus';
import MemberComponent from '../component/shared/MemeberComponent';
import Navigation from '../component/shared/Navigation';

const MemberComponents=(props)=>{
  return(
    <View style={styles.main}>
    <View style={styles.text}>
      <Text style={styles.text}>{props.name} yo</Text>
      <Text style={styles.text}>{props.email}</Text>
    </View>
  </View>
  )

}

const EventDetails = ({ route,navigation }) => {
  const image = require('../Assets/backarrow.png');
  const persons = require('../Assets/multiple.png');
  const { title, startDate, endDate,description,participant,Number_of_participants,id } = route.params.event;
  
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeAreaContainer}>
        <TouchableOpacity
        onPress={()=>{navigation.navigate('Event')  } }
        >
          <Image source={image} style={styles.image} />
        </TouchableOpacity>
        <View style={styles.Eventdetails} >
        <Text style={styles.texts}>- {id}</Text>
      <Text style={styles.texts}>- {title}</Text>
      <Text style={styles.texts}>- End Date:{startDate.toDate().toLocaleString()}</Text>
    <Text style={styles.texts}>- Start Date:{endDate.toDate().toLocaleString()} </Text>
    <Text style={styles.texts}>- {description} </Text>
    </View>
    <View style={styles.textcontainer}>
        <View >
            <Image source={persons} style={styles.image1} /></View>
        <View><Text style={styles.texts1}>participants</Text></View>
        <View style={styles.texts2}><BtnPlus/></View>
    </View>
        <View>
          { participant.map((participant,index)=>(
           <MemberComponents
           key={index}
           name={participant.name} 
           email={participant.email}
         />
          ))
          }
        </View>
      </SafeAreaView>
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
// subjected to changes 
main: {
  backgroundColor: '#1E319D',
  paddingHorizontal: 10,
  paddingVertical: 7,
  borderRadius: 8,
  marginBottom: 10,
  flexDirection: 'row',
},
text: {
  color: 'white',
  fontSize: 15,
},

  
});
