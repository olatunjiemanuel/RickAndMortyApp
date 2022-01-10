import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

//SVG imports
import SearchSVG from './SearchSVG';

//colors imports
import colors from '../Assets/Colors';

const SearchBarComponent = () => {
  return (
    <View style={styles.container}>
      <View>
        <SearchSVG />
      </View>
      <View>
        <TextInput style={styles.TextInput} />
      </View>
    </View>
  );
};

export default SearchBarComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flexDirection: 'row',
    width: 250,
    height: 40,
    alignItems: 'center',
    borderRadius: 20,
    justifyContent: 'center',
  },
  TextInput: {
    width: 200,
    marginLeft: 5,
    height: 40,
  },
});
