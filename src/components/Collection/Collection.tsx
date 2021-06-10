import { observer } from 'mobx-react';
import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { navigation } from '_app/services/navigations';
import { s } from './styles';

const CollectionItem = ({ item }: CollectionProps) => {
  const { title } = item;

  return (
    <Pressable
      key={item.id}
      onPress={() => {
        navigation.navigate('AddChooser');
      }}
    >
      <View style={s.item}>
        <Text style={s.title}>{title}</Text>
      </View>
    </Pressable>
  );
};

export const Collection = observer(CollectionItem);
