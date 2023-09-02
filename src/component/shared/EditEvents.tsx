import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Button from './Button';
import DatePicker from 'react-native-date-picker'
import moment from 'moment'; // Import the moment library
import firestore from '@react-native-firebase/firestore';
import {BallIndicator} from 'react-native-indicators';
import Person from '../Person';



const EditEvents = ({navigation} ) => {   
  const [startDate, setStartDate] = useState(new Date()) 
  const [open, setOpen] = useState(false)
  const [show,setShow]= useState(false)
  const [show1,setShow1]= useState(false)
  const [endDate, setendDate] = useState(new Date())
  const [open1, setOpen1] = useState(false)

  // format the date to be readable 
  const [formattedStartDate, setFormattedStartDate] = useState('')
  const [formattedEndDate, setFormattedEndDate] = useState('')
  
  // define the states for the from 
  const [title,setTitle]= useState('')
  const [description, setDescription] = useState('');
  const [showPerson , setShowPerson]= useState(false)
  const [errors,setErrors]=useState({})
  const [formstartDate, setFormstartDate]= useState('')
  const [formendDate, setFormendDate]= useState('')
  const [participant, setParticipant] = useState([]);
  const [count, setCount] = useState(0);
  const [loading,setLoading] = useState(false)
  const [loading1,setLoading1] = useState(false)
  const [eventList, setEventList] = useState([]);
  const [checkedParticipants, setCheckedParticipants] = useState([]);

  // hide and show the modal 
  const showpersorn =async()=>{
// display the participants 
    try {
      setLoading(true)
      const memberCollection = await firestore().collection('Member').get();
      const participantData = memberCollection.docs.map((doc) => doc.data());
      
      setParticipant(participantData); 
      setLoading(false)
      
    } catch (error) {
      console.log(error);
      setLoading(false)
    }
    setLoading(false)
    setShowPerson(true)
  }

  // track changes of the checkbox
  const handlePersonCheckboxToggle = (name, value, email) => {
    const updatedCheckedParticipants = [...checkedParticipants];
    // Update the state or perform any other action based on the checkbox toggle
    console.log(` ${name} email ${email} toggled: ${value}`);
    if (value === true) {
      setCount(count + 1);
      // Add the participant to the array 
      updatedCheckedParticipants.push({ name, email });
    } else {
      setCount(count - 1);
          // Remove participant from the array
    const index = updatedCheckedParticipants.findIndex(participant => participant.email === email);
    if (index !== -1) {
      updatedCheckedParticipants.splice(index, 1);
    }
    }
    setCheckedParticipants(updatedCheckedParticipants);
    
  };
 
  // hide and show the mddals and time field 
  const openStartDatepicker =()=>{
    setOpen(true);    
    setShow(true)
  }
  const openEndDatepicker =()=>{
    setOpen1(true); 
    setShow1(true)
  }

const handleSubmit = async () => {
  const newErrors = {};
  if (!title) {
    newErrors.title = 'Enter a Title';
  }
  if (!description) {
    newErrors.description = 'Enter a Description';
  }
  if (count< 1) {
    newErrors.participant = 'Event must have a participant';
    console.log(checkedParticipants.length);
    
  }
  // validate date 
  if(startDate>=endDate){
    newErrors.startDate ='Enter valid date'
  }
// console.log('count', count);
console.log(Object.keys(newErrors).length);

  if (Object.keys(newErrors).length > 0) {
    setErrors(newErrors);
    return;
  }
  const id = Math.floor(Math.random() * 1000).toString();

  const newEvent = {
    id:id,
    title,
    Number_of_participants: count,
    description,
    startDate,
    endDate,
    participant: checkedParticipants,
  };

  try {
    setLoading1(true)
    // Use a Promise and a timeout to handle potential errors
    const uploadPromise = firestore().collection('Event').doc(id).set(newEvent)
    const timeoutPromise = new Promise((resolve, reject) => {
      setTimeout(() => reject('Upload timed out'), 10000); // Timeout after 10 seconds
    });

    await Promise.race([uploadPromise, timeoutPromise]);
    
    console.log('Event added successfully');
    setErrors({});
    alert('Event created');
    navigation.navigate('Event');
  
    setLoading1(false)
  } catch (error) {
    console.error('Error adding event:', error);
    alert('Error adding event');
    setLoading1(false)
  }

  setEventList([...eventList, newEvent]);
};

  return (
        
    <ScrollView style={styles.container}>   
      <Text style={styles.head}>Create an Event</Text>  
    {/* form  */}
    <View>
    <View style={styles.textinput}>
            <Text style={styles.text1}>Title</Text>
            <TextInput 
            style={styles.input}
            value={title}
            onChangeText={setTitle}
            ></TextInput>
            {errors.title && <Text style={styles.error}>{errors.title} </Text> }
        </View>
        <View style={styles.textinput}>
            <Text style={styles.text1}>Description :</Text>
        <TextInput
        style={styles.textArea}
        multiline
        numberOfLines={4} // Adjust the number of visible lines
        placeholder="Enter your text here..."
        value={description}
        onChangeText={setDescription}
      ></TextInput>
      {errors.description && <Text style={styles.error}>{errors.description}</Text> }
        </View>
        <View>
      {show ? <Text style={styles.datevalue}>{formattedStartDate}</Text> : null}
      {show1 ?<Text style={styles.datevalue}>{formattedEndDate} </Text> : null}
      {errors.startDate && <Text style={styles.error}>{errors.startDate} </Text> }
    
      </View>
        {/* picker implementtion */}
        <View  style={styles.datePicker}>
          <View style={styles.date}>
              <Button
        text="Start Date"
        onPress={openStartDatepicker}
        style={
        { marginTop:7,
        }  
        }     
        />
          </View>
          <View style={styles.date}>
          <Button
        text="End Date"
        onPress={openEndDatepicker}
        style={
        { marginTop:7,
            marginBottom:20,
        }  
        }
        />
          </View>
        </View>
        {/* start date date picker  */}
            <DatePicker
        modal
        open={open}
        date={startDate}
        onConfirm={(date,time) => {   
          setStartDate(date)
          setFormattedStartDate(moment(date).format('dddd, D MMMM YYYY [at] HH:mm'));
          setOpen(false)
        }}
        onCancel={() => {
          setOpen(false)
        }}
      />
    {/* End date date picker   */}
    <DatePicker
        modal
        open={open1}
        date={endDate}
        onConfirm={(date,time) => {
          setOpen1(false)
          setendDate(date)
          setFormattedEndDate(moment(date).format('dddd, D MMMM YYYY [at] HH:mm'));
        }}
        onCancel={() => {
          setOpen(false)
        }}
      />   

        <View>
            <Button
            onPress={showpersorn }
             text="Add participants"
             style={
             { marginTop:7,
                 marginBottom:10
             }  
             }
            />
                   { loading &&         
                <View style={styles.loader} >  
                <BallIndicator color='blue' />
                </View>
                   }
        </View>
    {/* to hide and show the participants  */}
<View> 
{showPerson && ( 
<View style={styles.show} >
{participant.map((participants,index)=>(
  <Person
  key={index}
  name={participants.name}
  email={participants.email}
  person={participants.selectedImage}
  onCheckboxToggle={handlePersonCheckboxToggle}
  />
) ) }
</View>
)
}
{errors.participant && <Text style={styles.error}>{errors.participant} </Text> }
</View>


{ loading1 &&         
                <View style={styles.loader1} >  
                <BallIndicator color='blue' />
                </View>
                   }
        <Button
        onPress={ handleSubmit}
    text="Create Event"
    style={
    { marginTop:7,
        marginBottom:20,
    }  
    }
    />
    </View>
    </ScrollView>
  )
}

export default EditEvents

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:15,
        backgroundColor:'white'
    },
    head:{
        color:'black',
        fontWeight:'700',
        fontSize:22,
        textAlign:'center',
        marginTop:50,
        marginBottom:20
    },
    text1:{
        color:'black',
        fontWeight:'400',
        fontSize:20,
    },
input:{
    color:'black',
    borderColor:'#6B6767',
    borderWidth:1,
  //  marginBottom:15,
   fontSize:18,
   paddingVertical:7,
   paddingLeft:5,
   borderRadius:5
},
textArea: {
    borderRadius:5,
    borderWidth: 1,
    color:'black',
    borderColor: '#6B6767',
    padding: 8,
    fontSize:18,
    textAlignVertical: 'top', // Align text to the top of the input
  },
  show:{
    borderRadius:5,
    borderWidth: 1,
    borderColor:'black',
    borderColor: '#6B6767',
    paddingHorizontal:5,
    color:'black',
  },
  datePicker:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
  date:{
    width:'49%'
  },
  datevalue:{
    borderRadius:5,
    borderWidth: 1,
    borderColor:'black',
    borderColor: '#6B6767',
    color:'black',
    marginBottom:7,
    paddingVertical:5,
    fontSize:16,
    paddingHorizontal:5
  },
  error: {
    color: 'red',
    fontSize: 13,
    marginTop: 2,
},
textinput:{
  marginBottom: 15,
},
loader1:{
  marginTop: 7,
}
    
})