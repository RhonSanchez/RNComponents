import React, {useContext} from 'react';
import {Animated, Button, StyleSheet, View} from 'react-native';
import {ThemeContext} from '../context/themeContext/ThemeContext';
import {useAnimation} from '../hooks/useAnimation';

export const Animation101Screen = () => {
  const {opacity, position, fadeIn, fadeOut, startMovingPosition} =
    useAnimation();
  const {
    theme: {colors},
  } = useContext(ThemeContext);

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          ...styles.purpleBox,
          backgroundColor: colors.primary,
          marginBottom: 20,
          opacity,
          transform: [{translateY: position}],
        }}
      />
      <Button
        color={colors.primary}
        title="FadeIn"
        onPress={() => {
          fadeIn();
          startMovingPosition(-100, 300);
        }}
      />
      <Button color={colors.primary} title="FadeOut" onPress={fadeOut} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  purpleBox: {
    width: 150,
    height: 150,
  },
});
