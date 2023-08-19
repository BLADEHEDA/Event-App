import { Image, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react'; // Import useState
import CheckBox from '@react-native-community/checkbox';

const person = require('../Assets/person.jpg');

const Person = () => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false)
  // alert(toggleCheckBox)

  return (
    <View style={styles.containerx}>
      <View style={styles.container}>
        <View style={styles.container1}> 
          <View style={styles.left}>
            <Image style={styles.image} source={person} />
          </View>
          <View>
            <Text style={styles.text}>blade</Text>
            <Text style={styles.text}>blablabla@gmail.com</Text>
          </View>
        </View>

{/* third */}
        <View style={styles.checkboxContainer}>
                  <CheckBox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={(newValue) => setToggleCheckBox(newValue)}
            tintColors={{ true: 'blue', false: 'black' }} // Set the tint colors
          />
              </View>
      </View>
    </View>
  );
}

export default Person;

const styles = StyleSheet.create({
  container: {
    color: 'black',
    flexDirection: 'row',
    marginVertical: 5,
    justifyContent:'space-between'
  },
  container1: {
    color: 'black',
    flexDirection: 'row',
    // marginVertical: 5,
  },
  image: {
    width: 50,
    height: 35,
  },
  text: {
    color: 'black',
  },
  left: {
    marginRight: 5,
    marginTop: 5,
  },
  checkboxContainer: {
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});
