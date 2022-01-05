import React from 'react';
import {StyleSheet, Image, TouchableOpacity, Text} from 'react-native';

const ListItem = props => {
  const {image, name, specie, gender} = props;
  return (
    <TouchableOpacity style={styles.listContainer}>
      <Image style={styles.image} source={image} />
      <Text style={styles.text}>{name}</Text>
      <Text style={styles.text}>{gender}</Text>
      <Text style={styles.text}>{specie}</Text>
    </TouchableOpacity>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  listContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    width: 140,
    height: 200,
    backgroundColor: 'gray',
    marginBottom: 20,
  },
  text: {
    textAlign: 'center',
  },
});
