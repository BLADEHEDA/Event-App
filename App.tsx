import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { Provider } from 'react-redux';
import Logo from './src/component/shared/Logo';
import Login from './src/screens/Login';
import Home from './src/screens/Home';
import Navigation from './src/component/shared/Navigation';
import CreateEvemt from './src/screens/CreateEvemt';
import Event from './src/screens/Event';
import Button from './src/component/shared/Button';
// import CreateMember from './screens/CreateMember';
import Member from './src/screens/Member';
import EventDetails from './src/screens/EventDetails';
import CreateMember from './src/screens/CreateMember';


const App = () => {
  return (
   
    <View>
         {/* <Provider store={store}>  */}
          {/* <ScrollView>   */}
     <View style={styles.container} >
      {/* <Login/> */}
      {/* <Home/> */}
    {/* <Navigation/>  */}
     {/* <CreateEvemt/>  */}
       {/* <Event/>  */}
     {/* <Member/>  */}
   {/* <EventDetails/> */}
     {/* <CreateMember/> */}
  </View>
   {/* </ScrollView> */}
    </View>
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