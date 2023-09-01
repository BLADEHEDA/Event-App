import { StyleSheet, Text, View, Image, ImageSourcePropType, TouchableOpacity } from 'react-native';
import React from 'react';

interface MemberComponentProps {
  name: string;
  email: string;
}

const MemberComponent: React.FC<MemberComponentProps> = (props) => {
  const person: ImageSourcePropType = require('../../Assets/person.jpg');
  const deleteIcon: ImagesourcePropType = require('../../Assets/delete.png')  
  const pencilIcon: ImagesourcePropType = require('../../Assets/pencil.png')

  return (
    <View style={styles.main}>
      <View style={styles.cont1}>    
      <View>
        <Image style={styles.image} source={{ uri: props.person }} />
      </View>
      <View style={styles.texts}>
      <Text style={styles.text}>{props.id}</Text>  
        <Text style={styles.text}>{props.name}</Text>
        <Text style={styles.text}>{props.email}</Text>
      </View>
      </View>
      <View style={styles.cont2}>
        <TouchableOpacity onPress={props.onEdit}  > 
        <Image style={styles.image2} source={pencilIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={props.onPress}  > 
        <Image style={styles.image1} source={deleteIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MemberComponent;

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#1E319D',
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 8,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent:'space-between',
    paddingRight:10
  },
  text: {
    color: 'white',
    fontSize: 15,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  texts: {
    marginLeft: 5,
    marginTop: 2,
  },
  image1:{
    marginTop: 7,
    tintColor: 'white',
    marginLeft:10,
  },
  image2:{
    tintColor: 'white',
    width: 20,
    height: 18,
    marginTop:10,


  },
  cont1:{
    flexDirection: 'row',
    justifyContent:'space-between',
  },
  cont2:{
    flexDirection: 'row',
    // justifyContent:'space-between',
  },
  
});
