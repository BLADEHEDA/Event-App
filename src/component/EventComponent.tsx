import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';

interface EventComponentProps {
  name: string;
  email: string;
}


const EventComponent: React.FC<EventComponentProps> = (props) => {
  const deleteIcon: ImagesourcePropType = require('../Assets/delete.png');


  return (
    <View  style={styles.main}>
      <View style={styles.left}>
        <TouchableOpacity onPress={props.onPress} >
          <Text style={styles.text}>{props.title}</Text>
          <Text style={styles.text}>StartDate: {props.startDate}</Text>
          <Text style={styles.text}>EndDate: {props.endDate}</Text>
          <Text style={styles.text}>Number of participants: {props.Number_of_participants}</Text> 
        </TouchableOpacity>
    </View>
    <View style={styles.right}>
      <TouchableOpacity onPress={props.onDelete}>  
      <Image style={styles.image} source={deleteIcon}/>
      </TouchableOpacity>
    </View>
    </View>
  );
};

export default EventComponent;

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#1E319D',
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 8,
    marginBottom: 10,
    flexDirection:'row',
    justifyContent:'space-between'
  },
  text: {
    color: 'white',
    fontSize: 15,
  },
  image:{
    tintColor:'white',
  }
  
});
