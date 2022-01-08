import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import colors from '../Assets/Colors';

const NavButton = props => {
  const {buttonText, bgColor, onPress, disabled} = props;
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[styles.navButtons, {backgroundColor: bgColor}]}>
      <Text style={styles.buttonText}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

export default NavButton;

const styles = StyleSheet.create({
  navButtons: {
    backgroundColor: 'white',
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
  buttonText: {
    color: colors.white,
  },
});
