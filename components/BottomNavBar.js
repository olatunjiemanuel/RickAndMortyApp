import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

//color imports
import colors from '../Assets/Colors';

//component imports
import BackButton from './BackButton';
import NextButton from './NextButton';

const BottomNavBar = props => {
  const {pageNumber, onPressBack, onPressNext, disabled} = props;
  return (
    <View style={styles.BottomNavBarContainer}>
      <TouchableOpacity onPress={onPressBack} disabled={disabled}>
        <BackButton />
      </TouchableOpacity>
      <View style={styles.pageNumberContainer}>
        <Text style={styles.text}>{pageNumber}</Text>
      </View>
      <TouchableOpacity onPress={onPressNext}>
        <NextButton />
      </TouchableOpacity>
    </View>
  );
};

export default BottomNavBar;

const styles = StyleSheet.create({
  BottomNavBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: colors.black,
  },
  pageNumberContainer: {
    height: 30,
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
    marginHorizontal: 5,
    borderRadius: 5,
  },
});
