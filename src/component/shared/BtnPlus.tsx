import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

const BtnPlus: React.FC = ({onPress}) => {

  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity onPress={onPress}  style={styles.btnplus}>
          <Text style={styles.btnText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BtnPlus;

const styles = StyleSheet.create({
  btnplus: {
    backgroundColor: '#bec4c2',
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontSize: 35,
    fontWeight: '700',
    color: 'black',
    marginBottom:5
  },
  container: {
    position:'absolute',
    bottom:25,
    right:5,
  },
});
