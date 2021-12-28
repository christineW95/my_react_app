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
import * as Config from '../services/config'

const Home = () => {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };
    const [tasks, setTasks] = useState([]);
    const addTask = (task) => {
        if (task == null) return;
        setTasks([...tasks, task]);
        Keyboard.dismiss();
        // UserAPIs.createUser(Config.config.base_url + Config.config.user_register, {
        //     "name": "Muhammad Nur Ali",
        //     "email": "muh.tedddst@gmail.com",
        //     "password": "12345678",
        //     "age": 20
        // })
    }

    const deleteTask = (deleteIndex) => {
        setTasks(tasks.filter((value, index) => index != deleteIndex));
    }
    return (
        <SafeAreaView style={isDarkMode ? styles.container : {}}>
            <View style={styles.container}>
                <Text style={styles.heading}>TODO LIST</Text>
                <FlatList
                    keyExtractor={item => item.id}
                    renderItem={({ item, index }) => {
                        return (
                            <View key={index} style={styles.taskContainer}>
                                <TodoItem index={index + 1} task={item} deleteTask={() => deleteTask(index)} />
                            </View>
                        )

                    }}
                    data={tasks}
                    ListFooterComponent={<TextInputTask addTask={addTask} />}
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
