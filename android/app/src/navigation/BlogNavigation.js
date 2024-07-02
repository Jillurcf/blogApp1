import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from '../screen/mainScreen/MainScreen';
// import HomeScreen from '../screen/homeScreen/HomeScreen';


const Stack = createNativeStackNavigator()

const BlogNavigation = () => {
    return (
        <NavigationContainer screenOptions={{}}>
          <Stack.Navigator initialRouteName='Main' screenOptions={{
          headerShown: false, 
          }}>
            <Stack.Screen  name="Main" component={MainScreen} options={{headerShown: false,}} />
          </Stack.Navigator>
        </NavigationContainer>
      );
}

export default BlogNavigation

const styles = StyleSheet.create({})