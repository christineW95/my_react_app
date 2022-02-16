import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Home from '../index';
import About from '../screens/About';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from './header';
import { SafeAreaView } from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();

const HomeStackNavigator = () => {
    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: '#054F72'
        }}>
            <Stack.Navigator
                screenOptions={{
                    header: () => <Header />,
                    headerRight: () => (
                        <MaterialCommunityIcons name="menu" size={30} color="white" />
                    ),
                }}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="About" component={About} />
            </Stack.Navigator>
        </SafeAreaView>

    );
};

export default HomeStackNavigator;
