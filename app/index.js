import { Button } from 'react-native';
import ThemeProvider, { Context } from './theme/index';
import lightTheme from './theme/light';
import darkTheme from './theme/dark';
const Home = () => {
    return (
        <Context.Consumer>
            {({ theme, updateTheme }) => (
                <Button
                    title="Update Theme"
                    onPress={() => updateTheme(theme.dark ? lightTheme : darkTheme)}
                />
            )}
        </Context.Consumer>
    );
};
export default Home;
