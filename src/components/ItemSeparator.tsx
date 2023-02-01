import React, {useContext} from 'react';
import {View} from 'react-native';
import {ThemeContext} from '../context/themeContext/ThemeContext';

export const ItemSepartor = () => {
  const {
    theme: {dividerColor},
  } = useContext(ThemeContext);
  return (
    <View
      style={{
        borderBottomWidth: 2,
        marginVertical: 2,
        borderBottomColor: dividerColor,
      }}
    />
  );
};
