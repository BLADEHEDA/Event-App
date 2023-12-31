import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native'
import React, {useState, useEffect} from 'react';
// import Button from '../component/shared/Button'
import ImagePicker from 'react-native-image-crop-picker';
import { utils } from '@react-native-firebase/app';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import {BallIndicator} from 'react-native-indicators';
import Button from './Button';


const EditMember = ({editedData, onClose}) => {
    const imageUpload = require("../../Assets/upload.png");
    const [selectedImage, setSelectedImage] = useState();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [errors, setErrors] = useState({});
    const [members,setMembers]= useState([])
    const [loading,setLoading] = useState(false)
    const [toggleimage, setToggleImage]= useState(true)

    
    useEffect(() => {
        // Update the state with the new values from editedData when it changes
        setSelectedImage(editedData.selectedImage);
        setName(editedData.name);
        setEmail(editedData.email);
        setPhone(editedData.phone);
        setSelectedImage(editedData.selectedImage)
      }, [editedData]);

// handle the local upload of the image 
    
    const handleImagePicker = async () => {
        try {
            const image = await ImagePicker.openPicker({
                width: 400,
                height: 400,
                cropping: false,
                mediaType: 'photo',
            });
    
            console.log('Selected image:', image);
    
            if (image) {
                setToggleImage(false);
                setSelectedImage(image);
            }
        } catch (error) {
            console.log("Image picker error:", error);
        }
    };
    

const handleSubmit = async () => {
    const newErrors = {};

    // Validate Name
    if (!name.trim()) {
        newErrors.name = 'Enter name';
    }

    // Validate Email
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(email)) {
        newErrors.email = 'Invalid email';
    }

    // Validate Phone
    const phoneRegex = /^\d+$/; // Numeric input validation
    if (!phoneRegex.test(phone)) {
        newErrors.phone = 'Enter a valid phone number';
    }

    setErrors(newErrors);

    // Determine the image URL to upload
    let imageUrlToUpload = editedData.selectedImage;
    // check if the image was choosen locally , if notupload the previous one 
    if (selectedImage.path) {

        try {
            setLoading(true);
            // upload the image to cloud storage 
            const timestamp = Math.floor(Date.now() / 1000);
            const filename = `${timestamp}_${selectedImage.filename}`;

            const reference = storage().ref(`Avatar/${filename}`);
            await reference.putFile(selectedImage.path);
            imageUrlToUpload = await reference.getDownloadURL();
            setLoading(false);
        } catch (error) {
            console.error('Error uploading image', error);
            setLoading(false);
            return;
        }
    }

    // Define the member object
    const newMember = {
        id: editedData.id,
        name,
        email,
        phone,
        selectedImage: imageUrlToUpload,
    };

    // Update the data in Firestore
    try {
        await firestore().collection('Member').doc(editedData.id.toString()).set(newMember);
        alert('uploaded successfully ');
        onClose(); // Close the modal
    } catch (error) {
        console.error('Error updating member in Firestore', error);
        alert('Error updating member in Firestore');
    }
};

  return (
    <View style={styles.container}>
    <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
            <View>
                <View style={styles.textinput}>
                    <Text style={styles.text1}>Name :</Text>
                    <TextInput
                        style={[styles.input, errors.name && styles.inputError]}
                        value={name}
                        onChangeText={setName}
                    />
                    {errors.name && <Text style={styles.error}>{errors.name}</Text>}
                </View>
                <View style={styles.textinput}>
                    <Text style={styles.text1}>Email :</Text>
                    <TextInput
                        style={[styles.input, errors.email && styles.inputError]}
                        value={email}
                        onChangeText={setEmail}
                    />
                    {errors.email && <Text style={styles.error}>{errors.email}</Text>}
                </View>
                <View style={styles.textinput}>
                    <Text style={styles.text1}>Phone :</Text>
                    <TextInput
                        style={[styles.input, errors.phone && styles.inputError]}
                        keyboardType='numeric'
                        value={phone}
                        onChangeText={setPhone}
                    />
                    {errors.phone && <Text style={styles.error}>{errors.phone}</Text>}
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
            {errors.selectedImage && <Text style={styles.error}>{errors.selectedImage}</Text>}
            {/* preview the the image */}
            {toggleimage ? 
            (<View style={styles.imagePreviewContainer}>
            <Image source={{ uri: selectedImage }} style={styles.imagePreview} />
            </View>):
        
                <View style={styles.imagePreviewContainer}>
                    <Image source={{ uri: selectedImage.path || selectedImage }} style={styles.imagePreview} />
                </View>
          
           }     

         { loading &&  <BallIndicator color='blue' />}

            <View>
                <Button
                    onPress={handleSubmit}
                    text="Edit participants"
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

export default EditMember

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    scrollView: {
        paddingHorizontal: 15,
        marginBottom: 60,
    },
    head: {
        color: 'black',
        fontWeight: '700',
        fontSize: 22,
        textAlign: 'center',
        marginTop: 50,
        marginBottom: 20
    },
    text1: {
        color: 'black',
        fontWeight: '400',
        fontSize: 20,
    },
    text: {
        color: 'black',
        fontWeight: '400',
        fontSize: 20,
        textAlign: 'center',
        paddingHorizontal: 60,
        marginBottom: 20
    },
    input: {
        color: 'black',
        borderColor: 'black',
        borderWidth: 1,
        fontSize: 18,
        paddingVertical: 7,
        paddingLeft: 5,
        borderRadius: 5
    },
    error: {
        color: 'red',
        fontSize: 13,
        marginTop: 2,
    },
    // inputError: {
    //     borderColor: 'red',
    // },
    clickImage: {
        width: 50,
        height: 35,
        marginVertical: 5,
    },
    flexcont: {
        flexDirection: 'row',
    },
    flexcont1: {
        marginTop: 10,
        marginRight: 10
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
    // 
    textinput:{
        marginBottom: 15,
    },
    loaderContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20, // Adjust this margin as needed
      },
})