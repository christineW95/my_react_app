/* eslint-disable prettier/prettier */
import React, { useState, createRef } from 'react';
import {
    StyleSheet,
    TextInput,
    View,
    Text,
    ScrollView,
    Image,
    Keyboard,
    TouchableOpacity,
    KeyboardAvoidingView,
} from 'react-native';
import TextInputTask from '../components/TextInputTask';

const Register = ({ navigation }) => {
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [username, setUsername] = useState('');
    const [userAge, setUserAge] = useState(undefined);
    const [isValid, setIsValid] = useState(true);

    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const validateEmail = (email) => {
        return emailRegex.test(email);
    };
    const validateAge = (age) => {
        return age > 0;
    };
    const onSubmit = () => {
        if (userEmail && userPassword && username && userAge) {
            setIsValid(true);
            navigation.navigate('Home');
        }
        else
            setIsValid(false);
    }

    return (
        <View style={styles.container}>
            <TextInputTask
                onChangeText={(text) => {
                    setUsername(text)
                }}
                placeholder="Enter Name"
            />
            <TextInputTask
                onChangeText={(UserEmail) => {
                    if (validateEmail(UserEmail)) {
                        setUserEmail(UserEmail)
                        setIsValid(true)
                    }
                    else
                        setIsValid(false)
                }}
                placeholder="Enter Email"
                keyboardType="email-address" />

            <TextInputTask
                onChangeText={(UserPassword) => setUserPassword(UserPassword)}
                placeholder="Enter Password"
                secureTextEntry={true}
            />
            <TextInputTask
                onChangeText={(age) => {
                    if (validateAge(age)) {
                        setUserAge(age)
                        setIsValid(true)
                    }
                    else
                        setIsValid(false)
                }}
                placeholder="Enter Age"
                keyboardType='numeric'
            />
            {
                !isValid ? <Text style={{ color: 'red', padding: 25 }}>
                    Make sure all fields are filled with the right format!
                </Text> : null
            }
            <TouchableOpacity style={{
                backgroundColor: 'white',
                margin: 37,
                borderRadius: 10,
                borderColor: '#1E1A3C',
                padding: 12
            }}
                onPress={
                    onSubmit

                }>
                <Text style={{
                    color: '#1E1A3C',
                    fontSize: 22,
                    fontWeight: '700',
                    textAlign: 'center'
                }}>
                    Sign up
                </Text>
            </TouchableOpacity>
        </View>
    );
};
export default Register;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#1E1A3C',
        alignContent: 'center',
    },
    SectionStyle: {
        flexDirection: 'row',
        height: 40,
        marginTop: 20,
        marginLeft: 35,
        marginRight: 35,
        margin: 10,
    },
    buttonStyle: {
        backgroundColor: '#7DE24E',
        borderWidth: 0,
        color: '#FFFFFF',
        borderColor: '#7DE24E',
        height: 40,
        alignItems: 'center',
        borderRadius: 30,
        marginLeft: 35,
        marginRight: 35,
        marginTop: 20,
        marginBottom: 25,
    },
    buttonTextStyle: {
        color: '#FFFFFF',
        paddingVertical: 10,
        fontSize: 16,
    },
    inputStyle: {
        flex: 1,
        color: 'white',
        padding: 25,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#dadae8',
    },
    registerTextStyle: {
        color: '#FFFFFF',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 14,
        alignSelf: 'center',
        padding: 10,
    },
    errorTextStyle: {
        color: 'red',
        textAlign: 'center',
        fontSize: 14,
    },
});
