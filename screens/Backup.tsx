import React, { useState } from 'react';
import {SafeAreaView, StyleSheet, StatusBar, Alert, View, Text} from 'react-native';

import WeekView from '../node_modules/react-native-week-view';
//const WeekView = require('react-native-week-view');

const generateDates = (hours: number, minutes: number | null) => {
  const date = new Date();
  date.setHours(date.getHours() + hours);
  if (minutes != null) {
    date.setMinutes(minutes);
  }
  return date;
};

const sampleEvents = [
  {
    id: 1,
    description: 'Event 1',
    startDate: generateDates(0,0),
    endDate: generateDates(2,0),
    color: 'blue',
  },
  {
    id: 2,
    description: 'Event 2',
    startDate: generateDates(1,0),
    endDate: generateDates(4,0),
    color: 'red',
  },
  {
    id: 3,
    description: 'Event 3',
    startDate: generateDates(-5,0),
    endDate: generateDates(-3,0),
    color: 'green',
  },
];

export default function TabOneScreen()  {
  const state = {
    events: sampleEvents,
    selectedDate: new Date(),
  };
  // const state = useState({
  //   events: sampleEvents,
  //   selectedDate: new Date(),
  // })
  const onEventPress = ({id, color, startDate, endDate}) => {
    Alert.alert(
      `event ${color} - ${id}`,
      `start: ${startDate}\nend: ${endDate}`,
    );
  };

  const onGridClick = (event: any, startHour: any, date: { toISOString: () => string; }) => {
    const dateStr = date.toISOString().split('T')[0];
    Alert.alert(`Date: ${dateStr}\nStart hour: ${startHour}`);
  };

    const {events, selectedDate} = state;
    return (
      
      <>
        <View style={styles.container}>
          <StatusBar barStyle="dark-content" />
          <SafeAreaView style={styles.container}>
            
           <WeekView
              events={events}
              selectedDate={selectedDate}
              numberOfDays={3}
              onEventPress={onEventPress}
              onGridClick={onGridClick}
              headerStyle={styles.header}
              headerTextStyle={styles.headerText}
              hourTextStyle={styles.hourText}
              eventContainerStyle={styles.eventContainer}
              formatDateHeader="MMM D"
              hoursInDisplay={12}
              startHour={8}
            />
          </SafeAreaView>
        </View>
      </>
    );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingTop: 12,
  },
  header: {
    backgroundColor: '#4286f4',
    borderColor: '#fff',
  },
  headerText: {
    color: 'white',
  },
  hourText: {
    color: 'black',
  },
  eventContainer: {
    borderWidth: 1,
    borderColor: 'black',
  },
});
