import React, {useState, useEffect} from 'react';
import {FlatList, SafeAreaView, StyleSheet} from 'react-native';

import axios from 'axios';
import ListItem from './components/ListItem';

//colors imports
import colors from './Assets/Colors';

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

  const onPressHandler = () => {};

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        numColumns={2}
        renderItem={({item}) => (
          <ListItem
            image={{uri: item.image}}
            name={item.name}
            specie={item.species}
            gender={item.gender}
            status={item.status}
            onPress={onPressHandler}
            origin={item.origin.name}
            episodes={item.episode.length}
            url={item.url}
            created={item.created}
            type={item.type}
          />
        )}
      />
      {/* <Text>{data[0].id}</Text>
      <Image style={{width: 200, height: 200}} source={{uri: data[0].image}} />
      <Text>{data[0].species}</Text>
      <Text>{data[0].episode.length}</Text>
      <Text>{data[0].gender}</Text>
      <Text>{data[0].origin.name}</Text>
      <Text>{data[0].origin.url}</Text> */}
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.gray,
  },
  statusIndicator: {
    width: 20,
    height: 20,
  },
});
