import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

interface EventComponentProps {
  name: string;
  email: string;
}

const EventComponent: React.FC<EventComponentProps> = (props) => {
  return (
    <View style={styles.main}>
      <Text style={styles.text}>{props.title}</Text>
      <Text style={styles.text}>{props.startDate}</Text>
      <Text style={styles.text}>{props.endDate}</Text>
    </View>
  );
};

export default EventComponent;

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#1E319D',
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 8,
    marginBottom: 10,
  },
  text: {
    color: 'white',
    fontSize: 15,
  },
});
