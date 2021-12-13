/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { ScrollView, View } from 'react-native';
import CollapsibleTile from './app/components/collapsibleTile';
import { List } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from './app/components/header';
import Multicheckbox from './app/components/multicheckbox';
import MultiSliderBar from './app/components/muiltislider';

const App = () => {
  return (
    <SafeAreaView style={{ backgroundColor: '#1E7ED7' }}>
      <ScrollView>
        <Header />

        <List.Section>
          <CollapsibleTile>
            <View
              style={{
                flexDirection: 'row',
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <List.Item title="First item" style={{ flex: 1 }} />
              <List.Item title="Second item" style={{ flex: 1 }} />
            </View>
          </CollapsibleTile>
          <CollapsibleTile >
            <MultiSliderBar />
          </CollapsibleTile>
          <CollapsibleTile >
            <Multicheckbox />
          </CollapsibleTile>
          <CollapsibleTile />
          <CollapsibleTile />
          <CollapsibleTile />
          <CollapsibleTile />
          <CollapsibleTile />
          <CollapsibleTile />
          <CollapsibleTile />
          <CollapsibleTile>
            <View
              style={{
                flexDirection: 'row',
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <List.Item title="First item" style={{ flex: 1 }} />
              <List.Item title="Second item" style={{ flex: 1 }} />
            </View>
          </CollapsibleTile>
          <CollapsibleTile />
          <CollapsibleTile />
          <CollapsibleTile />
          <CollapsibleTile />
        </List.Section>
      </ScrollView>
    </SafeAreaView>

  );
};

export default App;
