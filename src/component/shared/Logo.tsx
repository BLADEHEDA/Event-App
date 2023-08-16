import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Logo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text} >even<Text style={styles.text1}>T</Text></Text>
    </View>
  )
}

export default Logo

const styles = StyleSheet.create({
text:{
    color:'black',
    fontSize:40,
    fontWeight:'600',
    // flexDirection:'row',
    // justifyContent: 'center',
    // borderColor:'black',
    // borderWidth:5,
    marginTop:5,
    textAlign:'center'
},
text1:{
    color:'#FD5B3C',
}


})