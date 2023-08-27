import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native'
import React, {useState, useEffect} from 'react';
import Button from '../component/shared/Button'
import ImagePicker from 'react-native-image-crop-picker';
import { utils } from '@react-native-firebase/app';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import {
    BallIndicator} from 'react-native-indicators';


const CreateMember = ({navigation}) => {
    const imageUpload = require("../Assets/upload.png");
    const [selectedImage, setSelectedImage] = useState(null);
    const [name, setName] = useState('');  
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [errors, setErrors] = useState({});
    const [members,setMembers]= useState([])
    const [loading,setLoading] = useState(false)
 
// handle the upload of the image 
    const handleImagePicker = async () => {
        try {
            const image = await ImagePicker.openPicker({
                width: 400,
                height: 400,
                cropping: false,
                mediaType: 'photo',
            });

            setSelectedImage(image);
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
        // validate the image and ensure an imaghe is choosen
            if(!selectedImage){
                newErrors.selectedImage='Choose an Image'
            }
console.log(selectedImage);

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
                    try {
                        if (selectedImage) {  
                            setLoading(true)

                const timestamp = Math.floor(Date.now() / 1000);
                const filename = `${timestamp}_${selectedImage.filename}`;

                const reference = storage().ref(`Avatar/${filename}`);
                await reference.putFile(selectedImage.path);
                const url = await reference.getDownloadURL();

                             // define a meeber object 
                            const newMember ={
                            id: Math.floor(Math.random() * 1000),
                            name, 
                            email,
                            phone,
                            selectedImage :url,
                        };
                        // uploaded the members to the firestore 
                        firestore()
                        .collection('Member')
                        .add(newMember)
                        .then(() => {
                            alert('member added')
                        });
                            setLoading(false)
                                         
                        const addmewMemebr = [...members,newMember]
                        setMembers(addmewMemebr);          
                        console.log(members);
                        navigation.navigate('Members')
                        }
                    } catch (error) {
                        console.error('Error uploading image:', error);
                        alert('yo bro it is not going  ')
                        setLoading(false)
                    }
        }

    };

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.container}>
                    <Text style={styles.head}>Create Members</Text>
                    <Text style={styles.text}>Create members to take part in your events</Text>
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
                    {/* <View>  </View> */}
                    {selectedImage && (
                        <View style={styles.imagePreviewContainer}>
                            <Image source={{ uri: selectedImage.path }} style={styles.imagePreview} />
                        </View>
                    )}      

                 { loading &&  <BallIndicator color='blue' />}

                    <View>
                        <Button
                            onPress={handleSubmit}
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
    );
}

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
});

export default CreateMember;
