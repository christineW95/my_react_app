import React from 'react';
import { Button, SafeAreaView, Text } from 'react-native';
import ThemeProvider, { Context } from './theme/index';
import lightTheme from './theme/light';
import darkTheme from './theme/dark';


const Home = () => {
    return (
        <SafeAreaView>
            <Context.Consumer>
                {({ theme, updateTheme }) => (
                    <>
                        <Text style={theme.theme}>Hello</Text>

                        <Button
                            title="Update Theme"
                            onPress={() => {
                                updateTheme(theme.dark ? lightTheme : darkTheme);
                            }}
                        />
                    </>
                )}
            </Context.Consumer>
        </SafeAreaView>
    );
};
export default Home;
