import { Image, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react'; // Import useState
import CheckBox from '@react-native-community/checkbox';
import { useAppSelector,useAppDispatch } from '../../store/Slices/hooks';
import { checkboxToggle } from '../../store/Slices/personSlice';

// const person = require('../Assets/person.jpg');

const Person = (props) => {
  const { name, email, person, onCheckboxToggle } = props;
  // const dispatch =useAppDispatch();
  // const toggleCheckBox =useAppSelector(state =>state.person.isSelected  )
  const [toggleCheckBox, setToggleCheckBox] = useState(false)
  const handleCheckboxToggle = (newValue) => {
    setToggleCheckBox(newValue);
    onCheckboxToggle(name, newValue,email); // Notify parent component about the toggle
  };

   
  return (
    <View style={styles.containerx}>
      <View style={styles.container}>
        <View style={styles.container1}> 
          <View style={styles.left}>
            <Image style={styles.image}  source={{ uri: props.person }} />
          </View>
          <View>
            <Text style={styles.text}>{props.name}</Text>
            <Text style={styles.text}>{props.email}</Text>
          </View>
        </View>

        <View style={styles.checkboxContainer}>
                  <CheckBox
            disabled={false}
            value={toggleCheckBox}
            // onValueChange={(newValue) => setToggleCheckBox(newValue)}
            onValueChange={handleCheckboxToggle}
            // onValueChange={(newValue) => dispatch(checkboxToggle(newValue))}
            tintColors={{ true: 'blue', false: 'black' }} 
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
    marginVertical: 10,
    justifyContent:'space-between',
  },
  container1: {
    color: 'black',
    flexDirection: 'row',
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
