import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react';
import Button from '../component/shared/Button'
import ImagePicker from 'react-native-image-crop-picker';

const CreateMember = () => {
    const imageUpload = require("../Assets/upload.png");
    const [selectedImage, setSelectedImage] = useState(null);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [errors, setErrors] = useState({});

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

    const handleSubmit = () => {
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

        if (Object.keys(newErrors).length === 0) {
            console.log('Name:', name);
            console.log('Email:', email);
            console.log('Phone:', phone);
        }
    };

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.container}>
                    <Text style={styles.head}>Create Members</Text>
                    <Text style={styles.text}>Create members to take part in your events</Text>
                    <View>
                        <View style={styles.textinpu1}>
                            <Text style={styles.text1}>Name :</Text>
                            <TextInput
                                style={[styles.input, errors.name && styles.inputError]}
                                value={name}
                                onChangeText={setName}
                            />
                            {errors.name && <Text style={styles.error}>{errors.name}</Text>}
                        </View>
                        <View>
                            <Text style={styles.text1}>Email :</Text>
                            <TextInput
                                style={[styles.input, errors.email && styles.inputError]}
                                value={email}
                                onChangeText={setEmail}
                            />
                            {errors.email && <Text style={styles.error}>{errors.email}</Text>}
                        </View>
                        <View>
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
                    {selectedImage && (
                        <View style={styles.imagePreviewContainer}>
                            <Image source={{ uri: selectedImage.path }} style={styles.imagePreview} />
                        </View>
                    )}
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
    inputError: {
        borderColor: 'red',
    },
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
    }
});

export default CreateMember;
