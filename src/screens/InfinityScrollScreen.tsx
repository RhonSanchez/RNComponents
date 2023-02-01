import React, {useContext, useState} from 'react';
import {ActivityIndicator, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {HeaderTitle} from '../components/HeaderTitle';
import {FadeInImage} from '../components/FadeInImage';
import {ThemeContext} from '../context/themeContext/ThemeContext';

export const InfinityScrollScreen = () => {
  const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5]);
  const {
    theme: {colors},
  } = useContext(ThemeContext);

  const loadMore = () => {
    const newArray: number[] = [];
    for (let i = 0; i < 5; i++) {
      newArray[i] = numbers.length + i;
    }
    setTimeout(() => {
      setNumbers([...numbers, ...newArray]);
    }, 1500);
  };

  const renderItem = (item: number) => {
    return (
      <FadeInImage
        uri={`https://picsum.photos/id/${item}/500/400`}
        style={{width: '100%', height: 400}}
      />
    );
  };

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={numbers}
        keyExtractor={item => item.toString()}
        renderItem={({item}) => renderItem(item)}
        ListHeaderComponent={() => (
          <View style={{marginHorizontal: 20}}>
            <HeaderTitle title="InfinityScrollScreen" />
          </View>
        )}
        ListFooterComponent={() => (
          <View
            style={{
              height: 150,
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
            }}>
            <ActivityIndicator size={25} color={colors.primary} />
          </View>
        )}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
      />
    </View>
  );
};
