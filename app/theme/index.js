import React, { createContext } from 'react';
import {
    Text,
} from 'react-native';
import lightTheme from './light';
import darkTheme from './dark';
export const Context = createContext({});

class ThemeProvider extends React.Component {
    state = {
        theme: lightTheme,
        updateTheme: theme => {
            this.setState({ theme });
        },
    };

    render() {
        const { theme } = this.state;
        return (
            <Context.Provider value={this.state} theme={theme}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export default ThemeProvider;
