/* eslint-disable prettier/prettier */
import * as React from 'react';
import { List } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const CollapsibleTile = (props) => {
    const [expanded, setExpanded] = React.useState(true);

    const handlePress = () => setExpanded(!expanded);

    return (
        <List.Accordion
            style={{ backgroundColor: '#1E7ED7' }}
            title="Controlled Accordion"
            titleStyle={{ color: 'white' }}
            right={props => !expanded ? <MaterialCommunityIcons name="chevron-down" color='white' size={22} /> : <MaterialCommunityIcons name="chevron-up" color='white' size={22} />}
            expanded={expanded}
            onPress={handlePress}>
            {props.children}
        </List.Accordion>
    );
};
export default CollapsibleTile;
