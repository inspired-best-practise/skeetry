import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';

import { colors, tTitle } from '_app/constants';
import { navigation } from '_app/services/navigations';
import { normalize } from '_app/utils/dimensions';

import { Card } from '../Card';
import { s } from './styles';

export const HorizontalCardList = ({ title, data, size, handleEndReached, loading, type }) => {
  const renderItem = ({ item }) => {
    return (
      <View key={item.node.id} style={{ marginVertical: normalize(20), marginRight: 20 }}>
        <Card item={item.node} size={size} />
      </View>
    );
  };

  return (
    <View>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() =>
          navigation.navigate('ItemsByCategory', {
            item: {
              name: title,
            },
            data: data,
          })
        }
      >
        <View style={s.main}>
          <Text style={tTitle}>{title}</Text>
          <Icon name="chevron-right" size={22} color={colors.black} />
        </View>
      </TouchableOpacity>
      <FlatList
        contentContainerStyle={{
          marginHorizontal: 20,
        }}
        data={data}
        // TODO: check initialNumToRender
        initialNumToRender={3}
        onEndReachedThreshold={0.5}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        onEndReached={() => {
          return handleEndReached();
        }}
        keyExtractor={item => item.node.id}
      />
    </View>
  );
};
