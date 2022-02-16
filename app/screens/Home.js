import React from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
const Home = () => {
    const data = [
        {
            id: 1,
            name: 'Starbucks',
        },
    ];
    return <FlatList data={data} renderItem={({ item }) => <Text>{item.name}</Text>} />;
};

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
});

export default Home;
