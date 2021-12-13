import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Appbar } from 'react-native-paper';

const Header = () => {
    return (
        <Appbar style={{ flex: 1, backgroundColor: '#1E7ED7' }}>
            <TouchableOpacity>
                <MaterialCommunityIcons
                    style={{ justifyContent: 'flex-start' }}
                    name="close"
                    size={22}
                    color="white"
                />
            </TouchableOpacity>
            <Text
                style={{ color: 'white', fontSize: 22, flex: 1, marginHorizontal: 10 }}>
                Filter Results
            </Text>
        </Appbar>
    );
};
export default Header;
