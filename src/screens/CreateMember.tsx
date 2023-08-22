import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, Image, ActivityIndicator } from 'react-native'
import React, { useState, useCallback } from 'react';
import Button from '../component/shared/Button'
import ImagePicker from 'react-native-image-crop-picker';
import Navigation from '../component/shared/Navigation';

const CreateMember = () => {
    const imageUpload = require("../Assets/upload.png")
    const [selectedImage, setSelectedImage] = useState(null);
// handle the stae for the image preview 
    const handleImagePicker = async () => {
        try {
            const image = await ImagePicker.openPicker({
                width: 400,
                height: 400,
                cropping: false,
            });

            setSelectedImage(image);
        } catch (error) {
            console.log("Image picker error:", error);
        }
    };


    return (
        <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
            <View style={styles.container}>
                <Text style={styles.head}>Create Members</Text>
                <Text style={styles.text}>create members to take part in your events</Text>
                <View>
                    <View>
                        <Text style={styles.text1}>Name :</Text>
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
                </View>
                <View style={styles.flexcont}>
                    <View style={styles.flexcont1}>
                        <Text style={styles.text1}>Avatar</Text>
                    </View>
                    <View style={styles.flexcont2}>
                        <TouchableOpacity onPress={handleImagePicker}>
                            <Image source={imageUpload} style={styles.clickImage} />
                        </TouchableOpacity>
                    </View>
                </View>
                {/* Image preview  displays*/}
                {selectedImage && (
                    <View style={styles.imagePreviewContainer}>
                        <Image source={{ uri: selectedImage.path }} style={styles.imagePreview} />
                    </View>
                )}
                <View>
                    <Button
                        text="Add participants"
                        style={{
                            marginTop: 7,
                            marginBottom: 10
                        }}
                    />
                </View>
            </View>
        </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    scrollView: {
        paddingHorizontal: 15,
        marginBottom: 60, // Adjust the marginBottom to make space for the button and Navigation
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
  clickImage:{
    width: 50,
    height: 35,
    marginVertical:5,
  },

  flexcont:{
    flexDirection:'row',
  },
  flexcont1:{
    marginTop:10,
    marginRight:10
  },
    imagePreviewContainer: {
        marginVertical: 10,
    },
    imagePreview: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
        borderRadius: 10,
    },
});

export default CreateMember;