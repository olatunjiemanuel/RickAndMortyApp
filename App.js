/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  View,
  ActivityIndicator,
  TextInput,
} from 'react-native';

import axios from 'axios';
import ListItem from './components/ListItem';
import AsyncStorage from '@react-native-async-storage/async-storage';

//colors imports
import colors from './Assets/Colors';

// component imports
import BottomNavBar from './components/BottomNavBar';
import SearchSVG from './components/SearchSVG';
//import SearchBarComponent from './components/SearchBarComponent';

const App = () => {
  const [data, setData] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [disabled, setDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [name, setName] = useState('');
  const [storedData, setStoredData] = useState([]);

  const onPressNext = () => {
    pageNumber <= 41 ? setPageNumber(pageNumber + 1) : setPageNumber(1);
    console.log(pageNumber);
  };
  const onPressPrev = () => {
    pageNumber > 1 ? setPageNumber(pageNumber - 1) : null;
    console.log(pageNumber);
  };

  const DataStorage = async () => {
    const tempData = await fetchAPI();
    AsyncStorage.setItem('temp', JSON.stringify(tempData.results));
    //console.log(tempData);
    return tempData;
  };

  const getData = () => {
    AsyncStorage.getItem('temp').then(data => {
      setStoredData(data);
      console.log(storedData);
      return storedData;
    });
  };

  const fetchAPI = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${name}`,
        //'https://rickandmortyapi.com/api/character/?page=1',
      );
      const Characterdata = response.data;
      setIsLoading(false);
      return Characterdata;
    } catch (error) {
      console.error(error.message);
      //Alert.alert(error.message);
    }
  };

  const onChangeText = value => {
    //setName(value);
    setSearchText(value);
    console.log(searchText);
    // newData = data.filter(function (text) {
    //   return searchText.includes('rick');
    // });
    // console.log(newData);
  };

  const onEndEditing = () => {
    setName(searchText);
  };

  useEffect(() => {
    const workAPI = async () => {
      const rickData = await fetchAPI();
      setData(rickData.results);
    };
    workAPI();

    DataStorage();
    getData();

    const buttonDisable = () => {
      pageNumber == 1 ? setDisabled(true) : setDisabled(false);
    };
    buttonDisable();
  }, [pageNumber, name]);

  const renderLoader = () => {
    return (
      <View style={styles.renderLoader}>
        <ActivityIndicator size="large" color={colors.black} />
      </View>
    );
  };

  return isLoading ? (
    renderLoader()
  ) : (
    <SafeAreaView style={styles.container}>
      <View style={styles.SearchBarComponent}>
        <View style={styles.Searchcontainer}>
          <View style={styles.searchSVG}>
            <SearchSVG />
          </View>
          <View>
            <TextInput
              placeholder="Type something to start searching"
              style={styles.TextInput}
              value={searchText}
              onChangeText={onChangeText}
              onEndEditing={onEndEditing}
              autoCapitalize="none"
            />
          </View>
        </View>
      </View>
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
              origin={item.origin.name}
              episodes={item.episode.length}
              url={item.url}
              created={item.created}
              type={item.type}
            />
          )}
        />
      </View>

      <View style={styles.BottomNavBarContainer}>
        <BottomNavBar
          pageNumber={pageNumber}
          onPressBack={onPressPrev}
          onPressNext={onPressNext}
          disabled={disabled}
        />
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
  BottomNavBarContainer: {
    marginTop: 780,
    position: 'absolute',
    marginLeft: 155,
  },
  ActivityIndicator: {
    position: 'absolute',
    marginTop: 300,
    marginLeft: 180,
  },
  SearchBarComponent: {
    marginBottom: 10,
    marginLeft: 50,
  },
  renderLoader: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.gray,
  },
  Searchcontainer: {
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
