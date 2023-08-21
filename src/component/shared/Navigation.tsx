import { Image, StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../screens/Home';
import Member from '../../screens/Member';
import Event from '../../screens/Event';

// define the creen with Tabs 
const Tab = createBottomTabNavigator();

const Navigation = () => {
  const image1 = require('../../Assets/person1.png')
  const image2 = require('../../Assets/home.png')
  const image3 = require('../../Assets/event1.png')
  return (
      <Tab.Navigator
      tabBarOptions={
      {  showLabel:false,      
      }
      }
      >
        <Tab.Screen 
        name="Member" 
        component={Member}
        options={{
          header: () => null, 
          tabBarIcon:({focused}) =>(
            <>
            <Image source={image1} style={styles.navimage}
             />
            </>
          )
        }}
         />
        <Tab.Screen 
              name="Home" 
              component={Home}
            options={{
              tabBarIcon:({focused}) =>(
                <>
                <Image source={image2} style={styles.navimage1}
                 />
                </>
              )
            }}
        />

        <Tab.Screen 
        name=" Event" 
        component={Event}
        options={{
          tabBarIcon:({focused}) =>(
            <>
            <Image source={image3} style={styles.navimage}
             />
            </>
          )
        }}
        />
      </Tab.Navigator>
  )
}

export default Navigation

const styles = StyleSheet.create({
  navimage:{
    height:25,
    width:25,
  },
  navimage1:{
    height:40,
    width:40,
  },

})