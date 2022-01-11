import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

//SVG imports
import SearchSVG from './SearchSVG';

//colors imports
import colors from '../Assets/Colors';

const SearchBarComponent = props => {
  const {value} = props;
  return (
    <View style={styles.container}>
      <View style={styles.searchSVG}>
        <SearchSVG />
      </View>
      <View>
        <TextInput
          placeholder="Type something to start searching"
          style={styles.TextInput}
          value={value}
        />
      </View>
    </View>
  );
};

export default SearchBarComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flexDirection: 'row',
    width: 300,
    height: 40,
    alignItems: 'center',
    borderRadius: 20,
  },
  TextInput: {
    width: 250,
    marginLeft: 5,
    height: 40,
  },
  searchSVG: {
    marginLeft: 20,
  },
});
