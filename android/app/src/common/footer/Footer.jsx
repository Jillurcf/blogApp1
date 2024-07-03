import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import HomeIcon from '../../assets/images/home-2@2x.svg'
import BookMark from '../../assets/images/BookMark.svg'
import Settings from '../../assets/images/Settings.svg'
import { useNavigation } from '@react-navigation/native'
const {width, height} = Dimensions.get('window')
const Footer = () => {

const navigation = useNavigation();
  const handleBackHome = () => {
navigation.navigate("Music")
  }

  return (
    <View style={{flexDirection: 'row', justifyContent: "space-around", paddingBottom: height * 0.03, alignItems: "center" }}>
     <TouchableOpacity onPress={handleBackHome}>
     <HomeIcon />
     </TouchableOpacity>
      <BookMark />
      <Settings />
    </View>
  )
}

export default Footer

const styles = StyleSheet.create({})