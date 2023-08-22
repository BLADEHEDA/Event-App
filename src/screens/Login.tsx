import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Logo from '../component/shared/Logo'
import Button from '../component/shared/Button'


const Login = ({navigation}) => {

    const handleLogin =()=>{
        navigation.navigate('Navigation')
        // navigation.navigate('Profile', {name: 'Jane'})
      }
  return (
    <View style={styles.container} >
     <View style={styles.logo} >  
        <Logo/>
    </View>
         {/* form for input fiedls */}
         <View>
            <Text style={styles.text1}>Login  to your Account</Text>
            {/* Email input */}
            <View style={styles.form}>
                <Text style={styles.text2}>Email :</Text>
                <TextInput 
                style={styles.input}
                placeholder='Enter Email'
                placeholderTextColor="gray"
                keyboardType="email-address" 
                autoCapitalize="none"
                ></TextInput>
            </View>
                {/* password input */}
                <View style={styles.form}>
                <Text style={styles.text2}>Password :</Text>
                <TextInput 
                style={styles.input}
                placeholder='Enter password'
                placeholderTextColor="gray"
                ></TextInput>
            </View>
{/*                
    <Button
   
    /> */}
    <Button
    onPress={handleLogin}
     text="Sign in"
     style={
     { marginTop:7 }  
     }
    />
        </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container:{
    paddingTop:70,
    paddingHorizontal:15,
    backgroundColor:"white"
},
logo:{
    marginBottom:70
},
text1:{
    color:'black',
    fontWeight:'600',
    fontSize:22,
    textAlign:'center',
    marginBottom:70
},
text2:{
    color:'black',
    fontWeight:'400',
    fontSize:20,
},
input:{
    color:'black',
    borderColor:'black',
    borderWidth:1,
   marginBottom:15,
   fontSize:18,
   paddingVertical:7,
   paddingLeft:5,
   borderRadius:5
}
})