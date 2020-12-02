import { Calendar } from "react-native-event-week";
import * as React from 'react';
const events = [
  {
    title: "Block A Stimulation",
    start: "2020-11-27 06:00",
    end: "2020-11-27 06:30",
    backgroundColor: "#41CAC0",
  },{
    title: "Block B Stimulation",
    start: "2020-11-27 12:00",
    end: "2020-11-27 12:30",
    backgroundColor: "#41CAC0",
  },
  {
    title: "Block A Stimulation",
    start: "2020-11-26 06:00",
    end: "2020-11-26 06:30",
    backgroundColor: "#41CAC0",
  },{
    title: "Block B Stimulation",
    start: "2020-11-26 12:00",
    end: "2020-11-26 12:30",
    backgroundColor: "#41CAC0",
  },
  {
    title: "Block A Stimulation",
    start: "2020-11-28 06:00",
    end: "2020-11-28 06:30",
    backgroundColor: "#41CAC0",
  },{
    title: "Block B Stimulation",
    start: "2020-11-28 12:00",
    end: "2020-11-28 12:30",
    backgroundColor: "#41CAC0",
  },
];
 
export default function HomeScreen() {
  return <Calendar events={events} mode="3days" height={2000} />;
}