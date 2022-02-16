import { View, Text, Image } from 'react-native';
import React from 'react';

const Header = () => {
    return (
        <View
            style={{
                flexDirection: 'row',
                backgroundColor: '#054F72',
            }}>
            <View style={{ flex: 4, alignItems: 'flex-end', justifyContent: 'center', }}>
                <Text style={{ color: 'white', fontSize: 12, fontWeight: 'bold', fontStyle: 'italic' }} >scegli le tue</Text>

            </View>
            <View style={{ flex: 7, alignItems: 'flex-start', }}>
                <Image
                    source={require('../../assets/images/logo.jpg')}
                    resizeMode="contain"
                    style={{ flex: 1, width: 150, height: 350, padding: 30, marginVertical: 10 }}
                />
            </View>
        </View>
    );
};
export default Header;
