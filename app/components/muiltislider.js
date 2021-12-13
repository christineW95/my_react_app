/* eslint-disable prettier/prettier */
import React from "react"
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import { View, Text } from "react-native";

export const MultiSliderBar = (props) => {
    const { min, max } = props;
    return (
        <View style={{ alignItems: 'center' }}>
            <MultiSlider
                values={[20, 30]}
                min={min}
                max={max}
                isMarkersSeparated={true}
                customLabel={() => <Text>Hello</Text>} />
        </View>

    )
}
export default MultiSliderBar;
