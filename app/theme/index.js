import { Text, useColorScheme } from 'react-native';

const Label = ({ ...props }) => {
    const theme = useColorScheme();
    return (
        <Text
            style={[theme === 'dark' ? style.dark : style.light]}
            numberOfLines={2}>
            {props.label}
        </Text>
    );
};
export default Label;
