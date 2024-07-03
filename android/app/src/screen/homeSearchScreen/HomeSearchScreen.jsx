import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SearchBar from 'react-native-dynamic-search-bar'
import { allCategories } from '../music'
const {width, height} = Dimensions.get('window')
const HomeSearchScreen = () => {
  return (
    <View>
      <Text>HomeSearchScreen</Text>
      {allCategories.map((category, index) => {
        return (
          <View key={index}>
            <Text>{category.title}</Text>
            <Text>{category.length}</Text>
          </View>
        )
      })}
    </View>
  )
}

export default HomeSearchScreen

const styles = StyleSheet.create({
    
})