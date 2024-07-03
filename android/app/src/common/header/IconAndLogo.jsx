import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Logo from '../../assets/images/blogAppLogo.svg';
import SearchIcon from '../../assets/images/blogAppSearchLogo.svg';
import { useNavigation } from '@react-navigation/native';
const {width, height} = Dimensions.get('window')
const IconAndLogo = () => {
    const imageUrl = require('../../assets/images/blogAppLogo.svg');
    const navigation = useNavigation();
    const handleSearchPage = () =>{
      navigation.navigate("HomeSearchScreen")
    }
  return (
    <View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: "center"}}>
       <Logo width={100} height={100} />    
   <TouchableOpacity onPress={handleSearchPage}>
   <SearchIcon width={35} height={35} />
   </TouchableOpacity>
      </View>
      
    </View>
  )
}

export default IconAndLogo

const styles = StyleSheet.create({})