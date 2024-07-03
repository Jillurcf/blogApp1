import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import SearchBar from 'react-native-dynamic-search-bar'
import { allCategories } from '../music'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { setSearchQuery } from '../../redux/searchSlice'

const {width, height} = Dimensions.get('window')

const HomeSearchScreen = () => {
  const dispatch = useDispatch();
    const searchQuery = useSelector((state) => state.search.searchQuery);
  console.log("", searchQuery)
  const filteredCategories = useSelector((state) => state.search.filteredCategories)
  console.log("++++++++++>",filteredCategories)
  // const [searchQuery, setSearchQuery] = useState('');
  // const [filteredCategories, setFilteredCategories] = useState(
  //   allCategories || [],
  // )
  const navigation = useNavigation();
  // useEffect(() => {
  //   if(!allCategories) {
  //     console.error('categories is undefined');
  //     return;
  //   }
  //   const filtered = allCategories.filter(category => 
  //     category.category.toLowerCase().includes(searchQuery.toLowerCase())
  //   )
  //   setFilteredCategories(filtered);
  // },[searchQuery]);

  const handleSearch = text => {
    dispatch(setSearchQuery(text));
  }
  const handleSearchItem = () => {
  
    const matchCategory = filteredCategories.find(
      (category) => category.category.toLowerCase() === searchQuery.toLowerCase()
    )
    console.log("40=====", matchCategory)
    if(matchCategory) {
      navigation.navigate(matchCategory.screenName)
    }
  }
  const handleCategory = (category) => {
    navigation.navigate(category.screenName)
  }
  
  return (
    <View>
      <SearchBar
      placeholder='Search Here'
      onPress={() => handleSearchItem()}
      onChangeText={handleSearch}
      />
      <Text>HomeSearchScreen</Text>
      {filteredCategories.map((category, index) => {
        return (
          <View key={index}>
            <Text>{category.category}</Text>
          
          </View>
        )
      })}
    </View>
  )
}

export default HomeSearchScreen
const styles = StyleSheet.create({
})