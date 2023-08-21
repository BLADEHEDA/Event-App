import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, TextInput } from 'react-native';
import EventComponent from '../component/EventComponent';
import BtnPlus from '../component/shared/BtnPlus';
import MemeberComponent from '../component/shared/MemeberComponent';
import Navigation from '../component/shared/Navigation';

const Member = () => {
  const search = require('../Assets/search.png');

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeAreaContainer}>
        <View style={styles.main}>
          <View>
            <Text style={styles.mainText}>Members</Text>
          </View>
          <View>
            <Image source={search} style={styles.search} />
          </View>
        </View>
        <View style={styles.show}>
          <TextInput
            style={styles.textInput}
            placeholder="Enter Text to search"
            placeholderTextColor="gray"
            autoCapitalize="none"
          />
        </View>
        <View style={styles.events}>
          <MemeberComponent />
        </View>
        <View>
          <BtnPlus />
        </View>
      </SafeAreaView>

      <View style={styles.navigationContainer}>
        <Navigation />
      </View>
    </View>
  );
};

export default Member;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  safeAreaContainer: {
    flex: 1,
    marginTop: 25,
    paddingHorizontal: 15,
  },
  mainText: {
    color: 'black',
    fontSize: 25,
    fontWeight: '500',
  },
  main: {
    backgroundColor: '#E5E5E5',
    paddingHorizontal: 10,
    paddingVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  search: {
    height: 20,
    width: 20,
    marginTop: 6,
  },
  textInput: {
    color: 'black',
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 10,
  },
  navigationContainer: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'white',
    zIndex: 999,
  },
});
