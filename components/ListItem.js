import React, {useState} from 'react';
import {
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  View,
  Modal,
  SafeAreaView,
} from 'react-native';

//colors import
import colors from '../Assets/Colors';

const ListItem = props => {
  const {
    image,
    name,
    specie,
    gender,
    status,
    origin,
    episodes,
    url,
    created,
    type,
  } = props;

  const [modalOpen, setModalOpen] = useState(false);

  const onPressHandler = () => {
    setModalOpen(true);
  };

  const statusColor = [styles.statusIndicator];

  status == 'Dead' ? statusColor.push(styles.dead) : null;
  status == 'unknown' ? statusColor.push(styles.unknown) : null;
  // if (status == 'Dead') {
  //   statusColor.push(styles.dead);
  // } else if (status == 'unknown') {
  //   statusColor.push(styles.unknown);
  // }

  return (
    <TouchableOpacity onPress={onPressHandler} style={styles.listContainer}>
      <View style={styles.statusContainer}>
        <View style={statusColor} />
        <Text style={styles.text}>{status}</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={image} />
      </View>
      <View style={styles.profileTextContainer}>
        <Text style={styles.text}>{name}</Text>
        <Text style={styles.text}>{gender}</Text>
        <Text style={styles.text}>{specie}</Text>
        <Text style={styles.text}>episodes: {episodes}</Text>
      </View>

      <Modal visible={modalOpen} animationType="slide">
        <SafeAreaView style={styles.modalContainer}>
          <TouchableOpacity
            onPress={() => {
              setModalOpen(false);
            }}
            style={styles.closeModalButton}>
            <Text style={styles.modalText}>Go Back</Text>
          </TouchableOpacity>
          <View>
            <Image style={styles.modalImage} source={image} />
          </View>
          <View style={styles.modalProfileTextWrapper}>
            <View style={styles.summaryContainer}>
              <Text style={styles.modalText}>Status</Text>
              <View style={styles.modalstatusContainer}>
                <View style={statusColor} />
                <Text style={styles.modalText}>{status}</Text>
              </View>
            </View>
            <View style={styles.summaryContainer}>
              <Text style={styles.modalText}>Name</Text>
              <Text style={styles.modalText}>{name}</Text>
            </View>
            <View style={styles.summaryContainer}>
              <Text style={styles.modalText}>Gender</Text>
              <Text style={styles.modalText}>{gender}</Text>
            </View>
            <View style={styles.summaryContainer}>
              <Text style={styles.modalText}>Specie</Text>
              <Text style={styles.modalText}>{specie}</Text>
            </View>
            <View style={styles.summaryContainer}>
              <Text style={styles.modalText}>Origin</Text>
              <Text style={styles.modalText}>{origin}</Text>
            </View>
            <View style={styles.summaryContainer}>
              <Text style={styles.modalText}>Link</Text>
              <Text style={styles.modalText}>{url}</Text>
            </View>
            <View style={styles.summaryContainer}>
              <Text style={styles.modalText}>Created</Text>
              <Text style={styles.modalText}>{created}</Text>
            </View>
            <View style={styles.summaryContainer}>
              <Text style={styles.modalText}>Episodes</Text>
              <Text style={styles.text}>{episodes}</Text>
            </View>
            <View style={styles.summaryContainer}>
              <Text style={styles.modalText}>Type</Text>
              <Text style={styles.text}>{type}</Text>
            </View>
          </View>
        </SafeAreaView>
      </Modal>
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
    alignItems: 'center',
    marginHorizontal: 10,
    width: 150,
    height: 250,
    borderRadius: 20,
    backgroundColor: colors.black,
    marginBottom: 20,
  },
  text: {
    textAlign: 'center',
    color: colors.white,
  },
  profileTextContainer: {
    marginTop: 10,
  },
  statusIndicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.alive,
    marginRight: 5,
  },
  dead: {
    backgroundColor: colors.dead,
  },
  unknown: {
    backgroundColor: colors.unknown,
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 70,
    marginTop: 10,
  },
  imageContainer: {
    marginTop: 5,
  },
  closeModalButton: {
    backgroundColor: colors.gray,
    width: 80,
    height: 30,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 300,
  },
  modalContainer: {
    backgroundColor: colors.black,
  },
  modalText: {
    color: colors.white,
  },
  modalImage: {
    width: 200,
    height: 200,
    borderRadius: 50,
    alignSelf: 'center',
    marginTop: 10,
  },
  modalstatusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  modalProfileTextWrapper: {
    marginTop: 20,
    marginHorizontal: 10,
    marginBottom: 100,
  },
  summaryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: colors.gray,
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
});
