import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Button from '../src/component/shared/Button'

const CreateEvemt = () => {
  return (
    <ScrollView style={styles.container}>   
      <Text style={styles.head}>Create an Event</Text>  
      <Text style={styles.text}>create events and get your participants joined on time 
    </Text>  
    {/* form  */}
    <View>
        <View>
            <Text style={styles.text1}>Title</Text>
            <TextInput style={styles.input}></TextInput>
        </View>
        <View>
            <Text style={styles.text1}>Description :</Text>
        <TextInput
        style={styles.textArea}
        multiline
        numberOfLines={4} // Adjust the number of visible lines
        placeholder="Enter your text here..."
      />
        </View>
        <View>
            <Text style={styles.text1}>Start Date</Text>
            <TextInput style={styles.input}></TextInput>
        </View>
        <View> 
            <Text style={styles.text1}>Event Date</Text>
            <TextInput style={styles.input}></TextInput>
        </View>
        <View> 
            <Text style={styles.text1}>Start Time</Text>
            <TextInput style={styles.input}></TextInput>
        </View>
        <View> 
            <Text style={styles.text1}>End Time</Text>
            <TextInput style={styles.input}></TextInput>
        </View>
        <View>
  <Button
    text="Add participants"
    style={
    { marginTop:7,
        marginBottom:20
    }  
    }
    />
        </View>
    </View>
    </ScrollView>
  )
}

export default CreateEvemt

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:15
    },
    head:{
        color:'black',
        fontWeight:'700',
        fontSize:22,
        textAlign:'center',
        marginTop:50,
        marginBottom:20
    },
    text1:{
        color:'black',
        fontWeight:'400',
        fontSize:20,
    },
    text:{
        color:'black',
        fontWeight:'400',
        fontSize:20,
        textAlign:'center',
        paddingHorizontal:60,
        marginBottom:20
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
},
textArea: {
    marginBottom:15,
    borderRadius:5,
    borderWidth: 1,
    color:'black',
    borderColor: 'black',
    padding: 8,
    fontSize:18,
    textAlignVertical: 'top', // Align text to the top of the input
  },
    
})