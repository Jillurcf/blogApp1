import {
  Dimensions,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import HomeScreen from '../homeScreen/HomeScreen';
import Footer from '../../common/footer/Footer';
import Header from '../../common/header/Header';
import SettingScreen from '../settingSreen/SettingScreen';
import Music from '../music/Music';
import News from '../news/News';
import Interview from '../interview/Interview';
import VideoScreen from '../videoScreen/VideoScreen';
const {width, height} = Dimensions.get('window')
const Tab = createMaterialTopTabNavigator();

const Main = () => {
  return (
    <View style={{flex: 1, paddingHorizontal: width * 0.03, marginTop: height * 0.004}}>
        <StatusBar barStyle="dark-content" />
     <View style={styles.header}>
  {/* Header part start */}
  <Header />
     </View>
     <View style={styles.content}>
<Tab.Navigator 
       screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        tabBarInactiveTintColor: 'gray',
        tabBarLabelStyle: { fontSize: 14, fontWeight: 'bold' },
        tabBarStyle: { backgroundColor: '#fff' },
        tabBarIndicatorStyle: { backgroundColor: '#e91e63', height: 3 },
        tabBarPressColor: 'lightgray',
        tabBarPressOpacity: 0.8,
        tabBarShowIcon: true,
      }}

>
    <Tab.Screen options={{headerShown: false, tabBarActiveTintColor: "red", tabBarLabelStyle: {fontSize: 15, fontWeight: "bold",}, }} name="Music" component={Music} />
    <Tab.Screen options={{headerShown: false}} name="Video" component={VideoScreen} />
    <Tab.Screen options={{headerShown: false}} name="News" component={News} />
    <Tab.Screen options={{headerShown: false}} name="Interview" component={Interview} />
    
</Tab.Navigator>

     </View>
     <View style={styles.footer} >
     <View style={styles.footer} >
<Footer />
</View>
     </View>
    </View>
  )
}

export default Main

const styles = StyleSheet.create({
    header: {
    //   height: 50,
    //   backgroundColor: '#f8f8f8',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    },
    headerText: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    content: {
      flex: 1,
    },
    footer: {
    }
  });