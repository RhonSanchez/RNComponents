import React, {useContext, useState} from 'react';
import {View, ScrollView, RefreshControl} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import {styles} from '../theme/appTheme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ThemeContext} from '../context/themeContext/ThemeContext';

export const PullToRefreshScreen = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState<string>();
  const {top} = useSafeAreaInsets();
  const {
    theme: {colors, dividerColor, dark},
  } = useContext(ThemeContext);

  const onRefresh = () => {
    setRefreshing(true);

    setTimeout(() => {
      setRefreshing(false);
      setData('hola mundo');
    }, 1500);
  };

  return (
    <ScrollView
      style={{marginTop: refreshing ? top : 0}}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          progressViewOffset={10}
          progressBackgroundColor={dividerColor}
          colors={[colors.text]}
          // style={{backgroundColor: colors.background}}
          // tintColor="white"
          title="Refreshing"
          titleColor={dark ? 'white' : 'black'}
        />
      }>
      <View style={styles.globalMargin}>
        <HeaderTitle title="PullToRefreshScreen" />
        {data && <HeaderTitle title={data} />}
      </View>
    </ScrollView>
  );
};
