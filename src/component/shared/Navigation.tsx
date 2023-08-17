import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faMugSaucer } from '@fortawesome/free-solid-svg-icons/faMugSaucer'
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import Icon from 'react-native-vector-icons/FontAwesome';

const Navigation = () => {
  return (
    <View>
      <Text style={styles.text}>Navigations</Text>
        <Text>
        {/* <FontAwesomeIcon icon={faCoffee} size={48} color="black" /> */}
        <Icon name="rocket" size={30} color="#900" />
      </Text>
    </View>
  )
}

export default Navigation

const styles = StyleSheet.create({
  text:{
    color:'black',
    textAlign:'center'
  }
})