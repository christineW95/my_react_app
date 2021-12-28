import React, { useState } from 'react';
import {
    KeyboardAvoidingView,
    StyleSheet,
    View,
    TextInput,
    TouchableOpacity,
    Text,
    Platform,
} from 'react-native';

export default TextInputTask = props => {
    const [task, setTask] = useState();

    const handleAddTask = value => {
        props.addTask(value);
        setTask(null);
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}>
            <TextInput
                style={styles.inputField}
                value={task}
                onChangeText={text => setTask(text)}
                placeholder={'Write a task'}
                placeholderTextColor={'#fff'}
            />
            <TouchableOpacity onPress={() => handleAddTask(task)}>
                <View style={styles.button}>
                    <Text>arrow-up</Text>
                    {/* <MaterialIcons name="keyboard-arrow-up" size={24} color="black" /> */}
                </View>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        borderColor: '#fff',
        backgroundColor: '#3E3364',
        borderWidth: 1,
        marginHorizontal: 20,
        margin: 20,
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
    },
    inputField: {
        color: '#fff',
        padding: 20, flex: 1,
    },
    button: {
        height: 30,
        width: 30,
        borderRadius: 5,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
});
