import React, { useEffect,useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, TextInput } from 'react-native';
import EventComponent from '../component/EventComponent';
import BtnPlus from '../component/shared/BtnPlus';
import MemeberComponent from '../component/shared/MemeberComponent';
import Navigation from '../component/shared/Navigation';
import firestore from '@react-native-firebase/firestore';

const Member = ({ navigation }) => {
  const search = require('../Assets/search.png');
// subjected to changes 
// fetch data from the store 
  const [members, setMembers] = useState([]); // State to store fetched members

  const handleFetch = async () => {
    try {
      const memberCollection = await firestore().collection('Member').get();
      const memberData = memberCollection.docs.map((doc) => doc.data());
      console.log(memberData);
      
      setMembers(memberData); // Set fetched members to state
      console.log(members);
      
    } catch (error) {
      console.log(error);
    }
  };

  useEffect( ()=>{
    handleFetch()
  },[])


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
          {/* render the data  */}
          <View style={styles.events}>
          {/* Render the data using MemberComponent */}
          {members.map((member, index) => (
            <MemeberComponent
              key={index}
              name={member.name} 
              email={member.email}
              person={member.selectedImage}
            />
          ))}
        </View>
        <View>
          <BtnPlus />
        </View>
      </SafeAreaView>
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

});
