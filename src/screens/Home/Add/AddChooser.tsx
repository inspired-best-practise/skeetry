import { observer } from 'mobx-react';
import React from 'react';
import { View, Text, StatusBar, TouchableHighlight, ScrollView } from 'react-native';
import { ModalControl } from '_app/components';
import { s } from './styles';

const tagsMock = [
  { id: '1', title: '🥾 Hiking' },
  { id: '2', title: '🛶 Kayaking' },
  { id: '3', title: '🎈 Ballooning' },
  { id: '4', title: '⛰️ Mountains' },
  { id: '15', title: '🧗🏼‍♂️ Rock climbing' },
  { id: '5', title: '🌋 Volcano' },
  { id: '6', title: '🏄🏻‍♂️ Surfing' },
  { id: '7', title: '🧗🏼‍♂️ Food' },
  { id: '8', title: '🌊 Sea' },
  { id: '9', title: '🥾 Hiking' },
  { id: '10', title: '🛶 Kayaking' },
  { id: '11', title: '🏜️ Desert' },
  { id: '12', title: '⛵ Sail' },
  { id: '13', title: '🌳 Nature' },
  { id: '14', title: '🏄🏻‍♂️ Surfing' },
  { id: '16', title: '🌊 Sea' },
];

const AddChooser = () => {
  return (
    <View style={s.container}>
      <StatusBar barStyle="light-content" animated translucent backgroundColor="rgba(255,255,255,100)" />
      <ModalControl />

      <View style={s.containerWrap}>
        {/* Tags component */}
        <ScrollView contentContainerStyle={s.contentContainer} horizontal showsHorizontalScrollIndicator={false}>
          {tagsMock.map(t => (
            <TouchableHighlight key={t.id} style={s.tag} underlayColor="#DDDDDD" onPress={() => {}}>
              <Text>{t.title}</Text>
            </TouchableHighlight>
          ))}
        </ScrollView>
        {/* Tags component end */}
      </View>
    </View>
  );
};

export const AddChooserScreen = observer(AddChooser);
