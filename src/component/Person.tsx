import { Image, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react'; // Import useState
import CheckBox from '@react-native-community/checkbox';

const person = require('../Assets/person.jpg');

const Person = () => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false)
  const [agree, setAgree] = useState(false); // Initialize checkbox state
// subjected to changes 
const [checked, setChecked] = React.useState(false);
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.left}>
          <Image style={styles.image} source={person} />
        </View>
        <View>
          <Text style={styles.text}>blade</Text>
          <Text style={styles.text}>blablabla@gmail.com</Text>
        </View>
      </View>

      <View style={styles.checkboxContainer}>
              {/* <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => {
               setChecked(!checked);
            }}
            color={'green'}
            uncheckColor={'red'}
         /> */}
          <CheckBox
    disabled={false}
    value={toggleCheckBox}
    onValueChange={(newValue) => setToggleCheckBox(newValue)}
  />
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
    justifyContent: 'center',
    alignItems: 'center',
  },
});
