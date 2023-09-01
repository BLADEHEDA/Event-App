import React, { useEffect,useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import EventComponent from '../component/EventComponent';
import BtnPlus from '../component/shared/BtnPlus';
import MemeberComponent from '../component/shared/MemeberComponent';
import Navigation from '../component/shared/Navigation';
import firestore from '@react-native-firebase/firestore';
import {BallIndicator} from 'react-native-indicators';
import EditMember from '../component/shared/EditMember';


const Member = ({ navigation,route}) => {

  const search = require('../Assets/search.png');
  const memberId = route.params?.memberId; // Use the correct parameter name

// fetch data from the store 
  const [members, setMembers] = useState([]); 
  const [loading,setLoading] = useState(false)
  const [searchInput , setSearchInput]= useState('')
  const [showtextField, setShowtextField ] =  useState(false)
  const [edited,setEdited ] = useState([])
  const [hiddenForm, setHiddemForm ] = useState(false)

  // fetch data from the firestore 
  const handleFetch = async () => {   
    try {
      setLoading(true)
      const memberCollection = await firestore().collection('Member').get();
      const memberData = memberCollection.docs.map((doc) => ({
        id: doc.id, // Set the document ID
        ...doc.data(), // Include other data
      }));
      // console.log(memberData);
      setMembers(memberData); 
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.log(error);
    }
  };
  
  useEffect( ()=>{
    handleFetch()
  },[])


  // delete the data
    const handleDelete = async (id) => {
      try {
        // delte the data locally 
        const updatedMembers = members.filter((member) => member.id !== id);
        setMembers(updatedMembers);
    
        // Delete member from Firestore using the document ID
        await firestore().collection('Member').doc(id.toString()).delete();
        console.log('Member deleted!');
      } catch (error) {
        console.log('Error deleting member:', error);
      }
    };

    // filter the data from the seacrh input   
    const handleSearch = (text) => {
      setSearchInput(text);
    
      if (text === '') {
        // If the search input is empty,it refetches the original list 
        handleFetch();
      } else {
        // Filter members based on the entered text
        const searchedList = members.filter((member) =>
          member.name.toLowerCase().includes(text.toLowerCase()) ||
          member.email.toLowerCase().includes(text.toLowerCase())
        );
        setMembers(searchedList);
      }
    };
    
    // edit the data 
    const handleEdit=(id)=>{
      setHiddemForm(true)
    // Find the member object with the matching ID
  const memberToEdit = members.find((member) => member.id === id);
  console.log(memberToEdit);
  setEdited(memberToEdit)
    } 
    useEffect( ()=>{
    },[edited,members])
 

  return (
    <View style={styles.container}>
      <ScrollView style={styles.safeAreaContainer}>
        <View style={styles.main}>
          <View>
            <Text style={styles.mainText}>Members</Text>
          </View>
          <TouchableOpacity 
          onPress={()=>{setShowtextField(!showtextField)} }
          >
            <Image source={search} style={styles.search} />
          </TouchableOpacity>
        </View>

   { showtextField &&     <View style={styles.show}>
          <TextInput
            style={styles.textInput}
            placeholder="Enter Text to search"
            placeholderTextColor="gray"
            autoCapitalize="none"
            value={searchInput}
            onChangeText={handleSearch}
          />
        </View>}

          {/* render the data  */}
          <View style={styles.events}>
          {members.map((member, index) => (
            <MemeberComponent
              key={index}
              id={member.id}
              name={member.name} 
              email={member.email}
              person={member.selectedImage}
              onPress={()=>handleDelete(member.id)}
              onEdit={()=>{handleEdit(member.id)} }
            />
          ))}
        </View>
        { loading && <BallIndicator color='blue' />}

    {hiddenForm &&  
    <EditMember 
    editedData={edited}
    onClose={()=>setHiddemForm(false) }
    />}
    
      </ScrollView>
      <View>
          <BtnPlus 
          onPress={()=>{ navigation.navigate('CreateMember') } }
          />
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
