import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeIcon from '../../assets/images/home-2@2x.svg'
import BookMark from '../../assets/images/BookMark.svg'
import Settings from '../../assets/images/Settings.svg'
const {width, height} = Dimensions.get('window')
const Footer = () => {
  return (
    <View style={{flexDirection: 'row', justifyContent: "space-around", paddingBottom: height * 0.03, alignItems: "center" }}>
      <HomeIcon />
      <BookMark />
      <Settings />
    </View>
  )
}

export default Footer

const styles = StyleSheet.create({})