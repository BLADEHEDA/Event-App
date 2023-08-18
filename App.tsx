import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { Provider } from 'react-redux';
import store from "./store/store";
import Logo from './src/component/shared/Logo';
import Login from './screens/Login';
import Button from './src/component/shared/Button';
import Home from './screens/Home';
import Navigation from './src/component/shared/Navigation';
import CreateEvemt from './screens/CreateEvemt';
import CreateMember from './screens/CreateMember';
import Event from './src/screens/Event';
import Member from './src/screens/Member';


// import React from 'react'

const App = () => {
  return (
    // <Provider store={store}> 
    // <ScrollView>  
    <View style={styles.container} >
      {/* <Login/> */}
      {/* <Home/> */}
      {/* <Navigation/> */}
      {/* <CreateEvemt/> */}
      {/* <Event/> */}
      <Member/>
      {/* <CreateMember/> */}
    </View>
    // </ScrollView>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    backgroundColor:'white',
    height:'100%',
    color:'black',
  }

})