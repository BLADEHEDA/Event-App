import { StyleSheet, Text, View } from 'react-native'
import { Provider } from 'react-redux';
import store from "./store/store";
// import React from 'react'

const App = () => {
  return (
    <Provider store={store}> 
    <View>
      <Text style={styles.text} >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, totam.
      </Text>
    </View>
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({
  text: {
    color:'black',
  }
})