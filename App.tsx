import { StyleSheet, Text, View } from 'react-native'
import { Provider } from 'react-redux';
import store from "./store/store";
import Logo from './src/component/shared/Logo';
import Login from './src/screens/Login';
import Button from './src/component/shared/Button';
import Home from './src/screens/Home';
// import React from 'react'

const App = () => {
  return (
    // <Provider store={store}> 
    <View style={styles.container} >
      {/* <Login/> */}
      <Home/>
    </View>
    // </Provider>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    backgroundColor:'white',
    height:'100%',
color:'black'
  }

})