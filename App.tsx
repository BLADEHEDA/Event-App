import { ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import Logo from './src/component/shared/Logo';
import Login from './src/screens/Login';
import Home from './src/screens/Home';
import Navigation from './src/component/shared/Navigation';
import CreateEvemt from './src/screens/CreateEvemt';
import Event from './src/screens/Event';
import Button from './src/component/shared/Button';
import Member from './src/screens/Member';
import EventDetails from './src/screens/EventDetails';
import CreateMember from './src/screens/CreateMember';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Stack = createNativeStackNavigator();

// define the screens which would have the Tabs displayed on it 
export function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
       name="Home" 
       component={Home}
       options={{ headerShown: false }}
       />
               <Stack.Screen 
       name="Event" 
       component={Event}
       options={{ headerShown: false }}
       /> 
          <Stack.Screen 
       name="CreateMember" 
       component={CreateMember}
       options={{ headerShown: false }}
       />
            <Stack.Screen 
       name="createEvent" 
        component={CreateEvemt}
       options={{ headerShown: false }}
       /> 
        <Stack.Screen 
       name="Member" 
       component={Member}
       options={{ headerShown: false }}
       />

        <Stack.Screen 
       name="EventDetails" 
       component={EventDetails}
       options={{ headerShown: false }}
       /> 
       </Stack.Navigator>
  );
}

const App = () => {
  return (
  
    <NavigationContainer style={styles.container}>
   <Stack.Navigator>
   {/* <Stack.Screen 
       name="EventDetails" 
       component={EventDetails}
       options={{ headerShown: false }}
       />  */}
{/*     
      <Stack.Screen 
       name="Login" 
       component={Login}
       options={{ 
        headerShown: false, 
      }}
       />  */}
           <Stack.Screen 
       name="Navigation" 
       component={Navigation}
       options={{ 
        headerShown: false, 
      }}
       />  
  </Stack.Navigator>
  </NavigationContainer>


  
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