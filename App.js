import React, {useState, useEffect} from 'react';
import {FlatList, SafeAreaView, StyleSheet, View, Text} from 'react-native';

import axios from 'axios';
import ListItem from './components/ListItem';

//colors imports
import colors from './Assets/Colors';

// component imports
import NavButton from './components/NavButton';

const fetchAPI = async () => {
  let pageNumber = 20;
  try {
    const response = await axios.get(
      `https://rickandmortyapi.com/api/character/?page=${pageNumber}`,
      //'https://rickandmortyapi.com/api/character/?page=1',
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
      <View style={styles.flatListWrapper}>
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
      </View>
      <View style={styles.navButtonsWrapper}>
        <View style={styles.prevButton}>
          <NavButton buttonText="Previous" bgColor={colors.darkRed} />
        </View>
        <View style={styles.nextButton}>
          <NavButton buttonText="Next" bgColor={colors.green} />
        </View>
      </View>
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
    backgroundColor: colors.gray,
  },
  flatListWrapper: {
    alignItems: 'center',
    backgroundColor: colors.gray,
  },
  statusIndicator: {
    width: 20,
    height: 20,
  },
  navButtonsWrapper: {
    marginTop: 600,
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginHorizontal: 10,
  },
  prevButton: {},
  nextButton: {
    marginLeft: 180,
  },
});
