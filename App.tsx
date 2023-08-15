import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View>
      <Text style={styles.text} >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, totam.
      </Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  text: {
    color:'black',
  }
})