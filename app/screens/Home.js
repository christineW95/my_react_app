/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
    FlatList,
    Keyboard,
    SafeAreaView,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';

import {
    Colors,
} from 'react-native/Libraries/NewAppScreen';
import { TodoItem } from '../components/TodoItem';
import TextInputTask from '../components/TextInputTask';
import * as UserAPIs from '../services/UserAPIs'
import * as TaskAPIs from '../services/TaskAPIs'
import * as Config from '../services/config'

const Home = () => {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };
    const [tasks, setTasks] = useState([]);
    const addTask = (task) => {
        // TaskAPIs.getAllTasks(Config.config.base_url + Config.config.add_task)

        if (task == null) return;
        setTasks([...tasks, task]);
        Keyboard.dismiss();
        // UserAPIs.createUser(Config.config.base_url + Config.config.user_register, {
        //     "name": "Muhammad Nur Ali",
        //     "email": "muh.ddddddddddddddddte@gmail.com",
        //     "password": "12345678",
        //     "age": 20
        // })
        // TaskAPIs.editTask(Config.config.base_url + Config.config.add_task + '/61cb45d556ddc90017809d68', {
        //     "completed": true
        // })
        // TaskAPIs.deleteTask(Config.config.base_url + Config.config.add_task + '/61cb45d556ddc90017809d68')
    }

    const deleteTask = (deleteIndex) => {
        setTasks(tasks.filter((value, index) => index != deleteIndex));
    }
    return (
        <SafeAreaView style={isDarkMode ? styles.container : {}}>
            <View style={styles.container}>
                <Text style={styles.heading}>TODO LIST</Text>
                <FlatList
                    keyExtractor={({ item, index }) => index}
                    renderItem={({ item, index }) => {
                        return (
                            <View key={index} style={styles.taskContainer}>
                                <TodoItem index={index + 1} task={item} deleteTask={() => deleteTask(index)} />
                            </View>
                        )

                    }}
                    data={tasks}
                    ListFooterComponent={<TextInputTask onChangeText={addTask} renderRightAccessory={true} />}
                />
            </View>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1E1A3C',
    },
    heading: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '600',
        marginTop: 30,
        marginBottom: 10,
        marginLeft: 20,
    },
    scrollView: {
        marginBottom: 70,
    },
    taskContainer: {
        marginTop: 20,
    }
});

export default Home;
