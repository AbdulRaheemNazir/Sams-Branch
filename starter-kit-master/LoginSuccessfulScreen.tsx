import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Modal, Button } from 'react-native';
import ARScreen from './ARScreen'; // Import ARScreen component

const LoginSuccessfulScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image source={require('./assets/test3.png')} style={styles.profileImage} />
        <Text style={styles.userName}>John McNamara</Text>
        <Text style={styles.userHandle}>@johnmcnamara245</Text>
        <TouchableOpacity style={styles.connectButton} onPress={() => setModalVisible(true)}>
          <Text style={styles.connectButtonText}>View AR</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.lineBreaker} />
      <TouchableOpacity onPress={() => console.log("About clicked")}>
        <View style={styles.aboutContainer}>
          <View style={styles.aboutHeadingContainer}>
            <Text style={styles.aboutHeading}>About</Text>
          </View>
          <Text style={styles.aboutText}>
            I'm John McNamara, a client of IBM Team A. I love the application they've created
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log("Experience clicked")}>
        <View style={styles.aboutContainer}>
          <View style={styles.aboutHeadingContainer}>
            <Text style={styles.aboutHeading}>Experience</Text>
          </View>
          <Text style={styles.aboutText}>
            IBM Master Inventor, Professor, Visiting Research Fellow, Speaker and IBM UK University Programs Lead
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log("Other clicked")}>
        <View style={styles.aboutContainer}>
          <View style={styles.aboutHeadingContainer}>
            <Text style={styles.aboutHeading}>Other</Text>
          </View>
          <Text style={styles.aboutText}>
            John's work constructing a 'Thought Works' in collaboration with universities across the UK, has allowed him to use this experience to address both business and societal challenges utilising cutting edge AI.
          </Text>
        </View>
      </TouchableOpacity>

      {/* Modal for AR Screen */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalContainer}>
          <ARScreen />
          <Button title="Close AR" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  profileContainer: {
    alignItems: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#ccc', // Placeholder color
    marginBottom: 10,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  userHandle: {
    fontSize: 16,
    color: 'grey',
  },
  connectButton: {
    backgroundColor: '#f7f7f7',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 90,
    marginTop: 10,
  },
  connectButtonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  lineBreaker: {
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    marginVertical: 20,
    alignSelf: 'stretch',
  },
  aboutContainer: {
    paddingHorizontal: 10,
    marginVertical : 12,
  },
  aboutHeadingContainer: {
    backgroundColor: '#f7f7f7',
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  aboutHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'darkgrey',
  },
  aboutText: {
    fontSize: 16,
    color: 'grey',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'transparent', // Make the background transparent
  },
});

export default LoginSuccessfulScreen;
