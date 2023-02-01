import React, {useContext} from 'react';
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  TextInput,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {HeaderTitle} from '../components/HeaderTitle';
import {styles} from '../theme/appTheme';
import {useForm} from '../hooks/useForm';
import {CustomSwitch} from '../components/CustomSwitch';
import {ThemeContext} from '../context/themeContext/ThemeContext';

interface Params {
  name: string;
  email: string;
  phone: string;
  isSubscribed: boolean;
}

export const TextInputScreen = () => {
  const {form, onChange, isSubscribed} = useForm<Params>({
    name: '',
    email: '',
    phone: '',
    isSubscribed: false,
  });
  const {
    theme: {colors, dividerColor},
  } = useContext(ThemeContext);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.globalMargin}>
            <HeaderTitle title="TextInputs" />
            <TextInput
              style={{
                ...stylesScreen.inputStyle,
                color: colors.text,
                borderColor: colors.text,
              }}
              placeholder="Ingrese su nombre"
              placeholderTextColor={dividerColor}
              autoCorrect={false}
              autoCapitalize="words"
              onChangeText={value => onChange(value, 'name')}
            />
            <TextInput
              style={{
                ...stylesScreen.inputStyle,
                color: colors.text,
                borderColor: colors.text,
              }}
              placeholder="Ingrese su email"
              placeholderTextColor={dividerColor}
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={value => onChange(value, 'email')}
              keyboardType="email-address"
              keyboardAppearance="dark"
            />
            <View style={stylesScreen.switchRow}>
              <Text style={{...stylesScreen.switchText, color: colors.text}}>
                Suscribirse:
              </Text>
              <CustomSwitch
                isOn={isSubscribed}
                onChange={value => onChange(value, 'isSubscribed')}
              />
            </View>
            <HeaderTitle title={JSON.stringify(form, null, 3)} />
            <HeaderTitle title={JSON.stringify(form, null, 3)} />
            <TextInput
              style={{
                ...stylesScreen.inputStyle,
                color: colors.text,
                borderColor: colors.text,
              }}
              placeholder="Ingrese su teléfono"
              placeholderTextColor={dividerColor}
              onChangeText={value => onChange(value, 'phone')}
              keyboardType="phone-pad"
            />
            <View style={{height: 100}} />
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const stylesScreen = StyleSheet.create({
  inputStyle: {
    borderWidth: 1,
    height: 50,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
  switchText: {
    fontSize: 25,
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
});
