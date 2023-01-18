import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {FlatListMenuItem} from '../components/FlatListMenuItem';
import {HeaderTitle} from '../components/HeaderTitle';
import {menuItems} from '../data/menuItems';
import {styles} from '../theme/appTheme';

export const HomeScreen = () => {
  const itemSepartor = () => {
    return (
      <View style={{borderBottomWidth: 5, opacity: 0.4, marginVertical: 5}} />
    );
  };

  return (
    <View style={{flex: 1, ...styles.globalMargin}}>
      <FlatList
        data={menuItems}
        renderItem={({item}) => <FlatListMenuItem menuItem={item} />}
        keyExtractor={item => item.name}
        ListHeaderComponent={<HeaderTitle title="Opciones de menú" />}
        ItemSeparatorComponent={itemSepartor}
      />
    </View>
  );
};
