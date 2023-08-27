import { StyleSheet, Text, TextInput, View, TouchableOpacity,Image } from 'react-native';
import React, { useState } from 'react';
import Logo from '../component/shared/Logo';
import Button from '../component/shared/Button';
import auth from '@react-native-firebase/auth';
import EyeHideIcon from '../Assets/hide.png'; 
import EyeShowIcon from '../Assets/view.png';
import {BallIndicator} from 'react-native-indicators';


const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false); 
    const [errors, setErrors] = useState({});
    const [loading,setLoading] = useState(false)

    const handleSubmit = () => {
        const newErrors = {};

        // Validate Email
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailRegex.test(email)) {
            newErrors.email = 'Invalid email';
        }
        // Validate password
        if (password.length < 5) {
            newErrors.password = 'Password must be at least 5 characters';
        }

        // Update the errors state
        setErrors(newErrors);

        // If there are errors, don't proceed
        if (Object.keys(newErrors).length > 0) {
            return;
        }

        // Authenticate the user
        setLoading(true)
        auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => {
                // Clear any previous errors
                setErrors({});
                alert('You have logged in successfully');
                // Route when successful
                navigation.navigate('Navigation');
                console.log('User account created & signed in!');
                setLoading(false)
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    console.log('That email address is already in use!');
                    alert('That email address is already in use!');
                }

                if (error.code === 'auth/invalid-email') {
                    console.log('That email address is invalid!');
                    alert('That email address is invalid!');
                }

                console.error(error);
                setLoading(false)
            });

        // Clear email and password
        setEmail('');
        setPassword('');
    };

    return (
        <View style={styles.container}>
            <View style={styles.logo}>
                <Logo />
            </View>
            <View>
                <Text style={styles.text1}>Login to your Account</Text>
                <View style={[styles.form, errors.email && styles.inputError]}>
                    <Text style={styles.text2}>Email :</Text>
                    <TextInput
                        style={[styles.input, errors.email && styles.inputError]}
                        placeholder='Enter Email'
                        placeholderTextColor='gray'
                        keyboardType='email-address'
                        autoCapitalize='none'
                        value={email}
                        onChangeText={setEmail}
                    />
                    {errors.email && <Text style={styles.error}>{errors.email}</Text>}
                </View>
                <View style={[styles.form, errors.password && styles.inputError]}>
                    <Text style={styles.text2}>Password :</Text>
                    <View style={styles.passwordInputContainer}>
                        <TextInput
                            style={[styles.input1, styles.passwordInput]}
                            placeholder='Enter password'
                            placeholderTextColor='gray'
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry={!showPassword}
                        />

                        <TouchableOpacity
                        style={styles.showHideButton}
                        onPress={() => setShowPassword(!showPassword)}>
                        <Image
                            source={showPassword ? EyeHideIcon : EyeShowIcon}
                            style={styles.showHideIcon}
                        />
                    </TouchableOpacity>

                    </View>
                    {errors.password && <Text style={styles.error}>{errors.password}</Text>}
                </View>

         
                { loading &&         
                <View style={styles.loader} >  
                <BallIndicator color='blue' />
                </View>
                   }
                <Button onPress={handleSubmit} text='Sign in' style={{ marginTop: 7 }} />
            </View>
        </View>
    );
};

export default Login;

const styles = StyleSheet.create({
    container: {
        paddingTop: 70,
        paddingHorizontal: 15,
        backgroundColor: 'white',
    },
    logo: {
        marginBottom: 70,
    },
    text1: {
        color: 'black',
        fontWeight: '600',
        fontSize: 22,
        textAlign: 'center',
        marginBottom: 70,
    },
    text2: {
        color: 'black',
        fontWeight: '400',
        fontSize: 20,
    },
    form: {
        marginBottom: 15,
    },
    input: {
        color: 'black',
        borderColor: 'black',
        borderWidth: 1,
        fontSize: 18,
        paddingVertical: 7,
        paddingLeft: 5,
        borderRadius: 5,
    },
    input1:{
        color: 'black',
        borderColor: 'black',
        fontSize: 18,
        paddingVertical: 7,
        paddingLeft: 5,

    },
    passwordInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',

        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
    },
    passwordInput: {
        flex: 1,
        fontSize: 18,
        color: 'black',
    },
    showHideButton: {
        padding: 5,
    },
    showHideButtonText: {
        color: 'blue',
    },
    error: {
        color: 'red',
        fontSize: 13,
        marginTop: 2,
    },
    inputError: {
        borderColor: 'red',
    },
    showHideIcon: {
        width: 24, // Adjust the width and height as needed
        height: 24,
    },
    loader:{
        marginVertical:20
    }
    
});
