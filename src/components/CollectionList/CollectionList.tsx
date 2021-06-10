import React from 'react';
import { View, Text } from 'react-native';
import { observer } from 'mobx-react';
import { Collection } from '_app/components';
import { s } from './styles';

export const CList = ({ title, data }): JSX.Element => {
  console.log('data', data);
  return (
    <View>
      <Text style={s.collectionListTitle}>{title}</Text>
      {data.map((item: any) => (
        <Collection key={item.id} item={item} />
      ))}
    </View>
  );
};

export const CollectionList = observer(CList);
