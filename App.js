import React, {useState, useEffect} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

import axios from 'axios';

const fetchAPI = async () => {
  try {
    const response = await axios.get(
      'https://rickandmortyapi.com/api/character/?page=1',
    );
    const Characterdata = response.data;
    return Characterdata;
  } catch (error) {
    console.error(error.message);
  }
};

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const workAPI = async () => {
      const rickData = await fetchAPI();
      setData(rickData.results);
    };
    workAPI();
  }, []);

  return (
    <View style={{marginTop: 30, marginHorizontal: 20}}>
      <Text>{data[0].id}</Text>
      <Image style={{width: 200, height: 200}} source={{uri: data[0].image}} />
      <Text>{data[0].species}</Text>
      <Text>{data[0].episode.length}</Text>
      <Text>{data[0].gender}</Text>
      <Text>{data[0].origin.name}</Text>
      <Text>{data[0].origin.url}</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
