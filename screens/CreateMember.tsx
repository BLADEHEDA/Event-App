import { StyleSheet, Text, View,ScrollView,TextInput } from 'react-native'
import React from 'react'
import Button from '../src/component/shared/Button'
import Person from '../src/component/Person'

const CreateMember = () => {
  return (
    <ScrollView>   
    <View style={styles.container}>
      <Text style={styles.head}>Create Members</Text>  
      <Text style={styles.text}>create memebrs to take part in your 
events         
    </Text>  
    {/* form  */}
    <View>
        <View>
            <Text style={styles.text1}>Name : </Text>
            <TextInput style={styles.input}></TextInput>
        </View>
        <View>
            <Text style={styles.text1}>Email :</Text>
            <TextInput style={styles.input}></TextInput>
        </View>
        <View>
            <Text style={styles.text1}>Phone :</Text>
            <TextInput style={styles.input}></TextInput>
        </View>
    {/* place for images  */}
        <View> 
            <Text style={styles.text1}>Avatar</Text>
            <TextInput style={styles.input}></TextInput>
        </View>
        <View>
  <Button
    text="Add participants"
    style={
    { marginTop:7,
        marginBottom:10
    }  
    }
    />
    {/* to hide and show the participants  */}
<View style={styles.show} >
    <Person
    name='blade'
    />
        <Person
    name='blade'
    />
</View>

      <Button
    text="Create Event"
    style={
    { marginTop:7,
        marginBottom:20
    }  
    }
    />
        </View>
    </View>
    </View>
    </ScrollView>
  )
}

export default CreateMember

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
  show:{
    borderRadius:5,
    borderWidth: 1,
    borderColor:'black',
    // height:100,
    color:'black',
  }
    
})