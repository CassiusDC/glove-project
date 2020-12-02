
        
import { RootStackParamList } from '../types';
import { StackScreenProps } from '@react-navigation/stack';
import useColorScheme from '../hooks/useColorScheme';
import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Navigation from '../navigation';
import { DarkTheme } from '@react-navigation/native';

const data = [
  {
    title: 'Bliss Wearable Tech',
    text: 'This companion app will provide you\nwith the best usage of our technology',
    image: require('../assets/images/1.png'),
    bg: '#59b2ab',
    
  },
  {
    title: 'Introduction',
    text: 'Bliss Wearable Tech uses acupressure points\nto relieve stress from daily life.',
    image: require('../assets/images/2.png'),
    bg: '#febebe',
  },
  {
    title: 'Get Started',
    text: 'We\'re ready to get started!\nOnce you\'re finished preparing, click "Done"',
    image: require('../assets/images/3.png'),
    bg: '#22bcb5',
  },
];

type Item = typeof data[0];

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 150,  // Add padding to offset large buttons and pagination in bottom of page
  },
  image: {
    width: 360,
    height: 520,
    marginTop: 32,
    
  },
  text: {
    color: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'center',
    marginTop: 12,
  },
  title: {
    marginTop: 32,
    fontSize: 22,
    color: 'white',
    textAlign: 'center',
  },
});


const colorScheme = useColorScheme();


 
const  _keyExtractor = (item: Item) => item.title;


export default function GetStartedScreen ({
    navigation,
  }: StackScreenProps<RootStackParamList, 'GetStarted'>) {
    const _renderItem = ({item}: {item: Item}) => {
        return (
          <View
            style={{
              flex: 1,
              backgroundColor: item.bg,
            }}>
            <SafeAreaView style={styles.slide}>
              <Text style={styles.title}>{item.title}</Text>
              <Image style={styles.image} source={item.image}></Image>
              <Text style={styles.text}>{item.text}</Text>
            </SafeAreaView>
          </View>
        );
      };
    
    const _onDone = () => {
        navigation.replace('Root')
          return(
              <SafeAreaView>
                  <Navigation colorScheme={colorScheme} />
                  <StatusBar />
              </SafeAreaView>
          )
      }
    
    return (
      <View style={{flex: 1}}>
        <StatusBar translucent backgroundColor="transparent" />
        <AppIntroSlider
          keyExtractor={_keyExtractor}
          renderItem={_renderItem}
          bottomButton
          onDone={_onDone}
          showSkipButton
          showPrevButton
          data={data}
        />
      </View>
    );
  }

//<TouchableOpacity onPress={() => navigation.replace('Root')} style={styles.link}>
//<Text style={styles.linkText}>Get Started</Text>
//</TouchableOpacity>