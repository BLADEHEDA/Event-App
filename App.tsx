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
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer style={styles.container}>
     <Stack.Navigator>
        {/* <Stack.Screen 
        name="Home" 
        component={Home}
        options={{ headerShown: false }}
        />
           <Stack.Screen 
        name="createEvent" 
        component={CreateEvemt}
        options={{ headerShown: false }}
        /> */}
               <Stack.Screen 
        name="Event" 
        component={Event}
        options={{ headerShown: false }}
        />
           {/* <Stack.Screen 
        name="CreateMember" 
        component={CreateMember}
        options={{ headerShown: false }}
        /> */}
         {/* <Stack.Screen 
        name="Member" 
        component={Member}
        options={{ headerShown: false }}
        /> */}
             {/* <Stack.Screen 
        name="Login" 
        component={Login}
        options={{ headerShown: false }}
        /> */}

                 {/* <Stack.Screen 
        name="EventDetails" 
        component={EventDetails}
        options={{ headerShown: false }}
        /> */}
        
        </Stack.Navigator>
    {/* <Navigation/> */}
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