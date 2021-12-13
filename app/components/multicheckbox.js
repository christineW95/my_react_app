/* eslint-disable prettier/prettier */
import React from "react"
import { View, Text, FlatList } from "react-native";
import { Checkbox } from "native-base";
import { Center, NativeBaseProvider } from "native-base";


export const Multicheckbox = (props) => {
    // const { data } = props;
    const [groupValue, setGroupValue] = React.useState([
        "Photography",
        "Gardening",
    ])
    return (
        <View>

            <Checkbox.Group
                colorScheme="info"
                value={groupValue}
                onChange={(values) => {
                    setGroupValue(values || [])
                }}
            >
                <Checkbox value="one" color='white' colorScheme="info" my={2}>
                    UX Research
                </Checkbox>
                <Checkbox value="two">Software Development</Checkbox>
            </Checkbox.Group>
        </View >

    )
}
export default () => {
    return (
        <NativeBaseProvider>
            <Center flex={1} px="3">
                <Multicheckbox />
            </Center>
        </NativeBaseProvider>
    )
}




