import React, {useContext} from 'react';
import {SectionList, Text, View} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import {styles} from '../theme/appTheme';
import {ItemSepartor} from '../components/ItemSeparator';
import {ThemeContext} from '../context/themeContext/ThemeContext';

interface Casas {
  casa: string;
  data: string[];
}

const casas: Casas[] = [
  {
    casa: 'DC Comics',
    data: [
      'Batman',
      'Superman',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
    ],
  },
  {
    casa: 'Marvel Comics',
    data: [
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
      'Spiderman',
      'Antman',
      'Spiderman',
      'Antman',
      'Antman',
      'Spiderman',
      'Antman',
      'Spiderman',
      'Antman',
    ],
  },
  {
    casa: 'Anime',
    data: [
      'Kenshin',
      'Goku',
      'Saitama',
      'Goku',
      'Saitama',
      'Goku',
      'Saitama',
      'Goku',
      'Saitama',
      'Saitama',
      'Goku',
      'Saitama',
      'Goku',
      'Saitama',
      'Goku',
      'Saitama',
    ],
  },
];

export const SectionListScreen = () => {
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  return (
    <View style={{...styles.globalMargin, flex: 1}}>
      <SectionList
        sections={casas}
        renderItem={({item}) => (
          <Text style={{color: colors.text}}>{item}</Text>
        )}
        keyExtractor={(item, index) => item + index}
        ListHeaderComponent={() => <HeaderTitle title="Section List" />}
        ListFooterComponent={() => (
          <View style={{marginBottom: 70}}>
            <HeaderTitle title={'Total de casas: ' + casas.length} />
          </View>
        )}
        stickySectionHeadersEnabled
        renderSectionHeader={({section}) => (
          <View style={{backgroundColor: colors.background}}>
            <HeaderTitle title={section.casa} />
          </View>
        )}
        renderSectionFooter={({section}) => (
          <HeaderTitle title={'Total: ' + section.data.length} />
        )}
        ItemSeparatorComponent={() => <ItemSepartor />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
