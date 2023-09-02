import { SafeAreaView, StyleSheet, Text, View,Image, TextInput,ScrollView,TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import EventComponent from '../component/EventComponent'
import BtnPlus from '../component/shared/BtnPlus'
import firestore from '@react-native-firebase/firestore';
import {BallIndicator} from 'react-native-indicators';
import EditEvents from '../component/shared/EditEvents';

const Event = ({navigation}) => {
    const search = require('../Assets/search.png')
    const [event,setEvent]=useState([])
    const [loading,setLoading] = useState(false)
    const [searchInput , setSearchInput]= useState('')
    const [showtextField, setShowtextField ] =  useState(false)
    const [show, setShow] = useState(false)
    const [editEvent,setEditEvent]=useState([])
  const handlenavigate =()=>{
    navigation.navigate('createEvent')
  }
  // fetch the evnts from the store 
  const handleFetch = async()=> {
    setLoading(true)
  try{
    const eventCollection= await firestore().collection('Event').get();
    const eventData= eventCollection.docs.map((doc) => doc.data());
    // console.log(eventData)
    setEvent(eventData)
    setLoading(false)
  }catch(error){
    console.log(error); 
    setLoading(false)
  }
}
//  delete an event from firestore
const handleDelete= async(id)=>{
  try{ 
    // delete locally
const updatedEvents= event.filter((event)=> event.id != id )
setEvent(updatedEvents)
// delte from firestore 
await firestore().collection('Event').doc(id.toString()).delete();
console.log('Event deleted!');
} catch(error){
  console.log('Error deleting event:', error);
}
}
 useEffect(()=>{
  handleFetch()
 },[])

// fetch data from the store 
    const handleSearch = (text) => {
      setSearchInput(text);
    
      if (text === '') {
        // If the search input is empty, reset the list to the complete events data
        handleFetch();
      } else {
        // Filter events based on the entered text
        const searchedList = event.filter((event) =>
          event.title.toLowerCase().includes(text.toLowerCase()) ||
          event.startDate.toDate().toLocaleString().toLowerCase().includes(text.toLowerCase()) ||
          event.endDate.toDate().toLocaleString().toLowerCase().includes(text.toLowerCase()) ||
          event.description.toLowerCase().includes(text.toLowerCase())
        );
        setEvent(searchedList);
      }
    };
    
// Edit mebers 
const handleEdit=(id)=>{
  setShow(true)
  const EventToEdit = event.find((event) => event.id === id);
  setEditEvent(EventToEdit)
  
}
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
    <View>
      <View style={styles.main} >

      <View><Text style={styles.mainText}>Events</Text></View>
        <TouchableOpacity 
          onPress={()=>{setShowtextField(!showtextField)} }
          >
          <Image source={search} style={styles.search} />
      </TouchableOpacity>
      </View>
      {/* this is meant to be hidden  */}
            { showtextField &&     
            <View style={styles.show}>
          <TextInput
            style={styles.textInput}
            placeholder="Enter Text to search"
            placeholderTextColor="gray"
            autoCapitalize="none"
            value={searchInput}
            onChangeText={handleSearch}
          />
        </View>}
         { loading &&         
                <View style={styles.loader} >  
                <BallIndicator color='blue' />
                </View>
                   }
    <View style={styles.events}>  

    {/* render the Api data  */}
    {event.map((event,index) =>(
        <EventComponent 
        key={index}
        title={event.title}
        startDate={event.startDate.toDate().toLocaleString()}
        endDate={event.endDate.toDate().toLocaleString()}
        description={event.description}
        participant={event.participant}
        Number_of_participants={event.Number_of_participants}
        id={event.id}
        onPress={() => {
          navigation.navigate('EventDetails', { event }); // Navigate with event data
        }}
        onDelete={ ()=>handleDelete(event.id)  }
        onEdit={()=>{handleEdit(event.id)}}
        />
    ))
    }
      </View> 
  </View>
{ show &&
 <EditEvents
 editedEventData={editEvent}
 />
 }
  </ScrollView>
  <View>
      <BtnPlus
      onPress={handlenavigate}
      />
    </View>
  </View>

  )
}

export default Event

const styles = StyleSheet.create({
  
    mainText:{
        color:'black',
        fontSize:25,
        fontWeight:'500'
    },
    main:{
        backgroundColor:'#E5E5E5',
        paddingHorizontal:10,
        paddingVertical:5,
        flexDirection:'row',
        justifyContent: 'space-between',
        marginBottom:20
    },
    container: {
      flex: 1,
      backgroundColor: 'white',
      marginTop:35,
    },
    scrollView: {
      paddingHorizontal: 15,
      marginBottom: 60, // Adjust the marginBottom to make space for the button and Navigation
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
    search:{
        height:20,
        width:20,
        marginTop:6,
    },
    textInput:{
        color:'black',
        borderColor:'black',
        borderWidth:1,
        marginBottom:10
    },
    events:{
      marginBottom:10
    }
})