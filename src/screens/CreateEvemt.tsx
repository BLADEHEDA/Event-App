import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Button from '../component/shared/Button'
import Person from '../component/Person'
import DatePicker from 'react-native-date-picker'
import moment from 'moment'; // Import the moment library
import Navigation from '../component/shared/Navigation'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import firestore from '@react-native-firebase/firestore';

const Tab = createBottomTabNavigator();

const CreateEvemt = () => {   
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
  // const []= useState('')
  const [eventList, setEventList] = useState([]);
  const [checkedParticipants, setCheckedParticipants] = useState([]);
  // hide and show the modal 
  const showpersorn =async()=>{
// display the participants 
    try {
      const memberCollection = await firestore().collection('Member').get();
      const participantData = memberCollection.docs.map((doc) => doc.data());
      
      setParticipant(participantData); 
      // console.log(participant);
      
    } catch (error) {
      console.log(error);
    }
    setShowPerson(true)
  }

  // track changes of the checkbox
  const handlePersonCheckboxToggle = (name, value, email) => {
    const updatedCheckedParticipants = [...checkedParticipants];
    // Update the state or perform any other action based on the checkbox toggle
    // console.log(`N ${name} email ${email} toggled: ${value}`);r
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

// vallidate the forms 

const handleSubmit= async ()=>{
const newErrors={}

  // validate the title irel a
  if(!title){
    newErrors.title ='Enter a Title'
  }

  // validate the description field 
  if(!description){
    newErrors.description ='Enter a Description'
  }
  // validate the startdate 
  if(!formstartDate){
    newErrors.formstartDate='Enter startdate'
  }
  if(!formendDate){
    newErrors.formendDate ='Enter enddate'
  }
  setErrors(newErrors);
// create participant object 
const newparticipant ={
  id: Math.floor(Math.random() * 1000),
  title,
  Number_of_participants: count,
  description,
  startDate,
  endDate,
  participant: checkedParticipants
}
          // uploaded the members to the firestore 
try{
          firestore()
          .collection('Event')
          .add(newparticipant)
          .then(() => {
              alert('Event added')
          });
      }
      catch(error){
        console.log(error);
        alert('error dude')
        
      }

setEventList([...eventList,newparticipant] )
console.log(eventList);
}
  return (
    
    <View>      
    <ScrollView style={styles.container}>   
      <Text style={styles.head}>Create an Event</Text>  
      <Text style={styles.text}>create events and get your participants joined on time 
    </Text>  
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

        {/* end of changes  */} 
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
        </View>
    {/* to hide and show the participants  */}

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
</View>)
}


        <Button
        onPress={ handleSubmit}
    text="Create Event"
    style={
    { marginTop:7,
    }  
    }
    />
    </View>
    </ScrollView>
    <Navigation/>
    </View>
  )
}

export default CreateEvemt

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:15,
        marginBottom:50
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
    text:{
        color:'black',
        fontWeight:'400',
        fontSize:20,
        textAlign:'center',
        paddingHorizontal:60,
        marginBottom:20
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
}

    
})