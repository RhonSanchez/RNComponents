import React, {useContext, useState} from 'react';
import {Button, Modal, Text, View} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import {ThemeContext} from '../context/themeContext/ThemeContext';
import {styles} from '../theme/appTheme';

export const ModalScreen = () => {
  const [isVisible, setIsVisible] = useState(false);
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="ModalScreen" />
      <Button title="Abrir modal" onPress={() => setIsVisible(!isVisible)} />

      <Modal animationType="fade" visible={isVisible}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.3)',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: colors.background,
              width: 200,
              height: 200,
              justifyContent: 'center',
              alignItems: 'center',
              shadowOffset: {
                width: 0,
                height: 10,
              },
              shadowOpacity: 0.25,
              elevation: 10,
              borderRadius: 5,
            }}>
            <Text
              style={{fontSize: 20, fontWeight: 'bold', color: colors.text}}>
              Modal
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '300',
                marginBottom: 20,
                color: colors.text,
              }}>
              Cuerpo de modal
            </Text>
            <Button title="Cerrar" onPress={() => setIsVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};
