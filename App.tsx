import { StyleSheet, Text, View } from 'react-native'
import { Provider } from 'react-redux';
import store from "./store/store";
import Logo from './src/component/shared/Logo';
// import React from 'react'

const App = () => {
  return (
    // <Provider store={store}> 
    <View style={styles.container} >
      <Logo/>
    </View>
    // </Provider>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    backgroundColor:'white',
    height:'100%'
  }
})