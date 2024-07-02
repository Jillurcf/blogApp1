import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Logo from '../../assets/images/blogAppLogo.svg';
import SearchIcon from '../../assets/images/blogAppSearchLogo.svg';
const {width, height} = Dimensions.get('window')
const IconAndLogo = () => {
    const imageUrl = require('../../assets/images/blogAppLogo.svg');
  return (
    <View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: "center"}}>
       <Logo width={100} height={100} />    
      <SearchIcon width={35} height={35} />
      </View>
      
    </View>
  )
}

export default IconAndLogo

const styles = StyleSheet.create({})