import { observer } from 'mobx-react';
import React from 'react';
import { View, Text, StatusBar, TouchableHighlight } from 'react-native';
import { ModalControl } from '_app/components';
import { s } from './styles';

const tagsMock = [
  { id: '1', title: '🥾 Hiking' },
  { id: '2', title: '🛶 Kayaking' },
  { id: '3', title: '🎈 Ballooning' },
  { id: '4', title: '⛰️ Mountains' },
  { id: '5', title: '🌳 Nature' },
  { id: '6', title: '🏄🏻‍♂️ Surfing' },
  { id: '7', title: '🧗🏼‍♂️ Rock climbing' },
  { id: '8', title: '🌊 Sea' },
];

const AddChooser = () => {
  return (
    <View style={s.container}>
      <StatusBar barStyle="light-content" animated translucent backgroundColor="rgba(255,255,255,100)" />
      <ModalControl />
      <View style={s.containerList}>
        {tagsMock.map(t => (
          <TouchableHighlight key={t.id} style={s.tag} underlayColor="#DDDDDD" onPress={() => {}}>
            <Text>{t.title}</Text>
          </TouchableHighlight>
        ))}
      </View>
    </View>
  );
};

export const AddChooserScreen = observer(AddChooser);
