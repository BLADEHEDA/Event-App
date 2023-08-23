import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React from 'react'

const Button = (props) => {
  return (
    <View>
       <TouchableOpacity  
       onPress={props.onPress}
       style={[styles.button,props.style]}>   
      <Text style={styles.buttonText}>{props.text}</Text>
    </TouchableOpacity>
    </View>
  )
}

export default Button

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#1E319D',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 5,
      },
      buttonText:{
        color:'white',
        fontSize:18,
        fontWeight:'500',
        textAlign:'center'
      }
})