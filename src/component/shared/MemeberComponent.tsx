import { StyleSheet, Text, View, Image, ImageSourcePropType } from 'react-native';
import React from 'react';

interface MemberComponentProps {
  name: string;
  email: string;
}

const MemberComponent: React.FC<MemberComponentProps> = (props) => {
  const person: ImageSourcePropType = require('../../Assets/person.jpg');

  return (
    <View style={styles.main}>
      <View>
        <Image style={styles.image} source={person} />
      </View>
      <View style={styles.texts}>
        <Text style={styles.text}>{props.name} yo</Text>
        <Text style={styles.text}>{props.email} yep bro</Text>
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
});
