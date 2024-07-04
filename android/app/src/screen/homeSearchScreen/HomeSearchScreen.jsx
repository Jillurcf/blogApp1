import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import SearchBar from 'react-native-dynamic-search-bar'
import Sound from 'react-native-sound';
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { setSearchQuery } from '../../redux/searchSlice'
import Icon from '../../assets/images/Icon.svg';
import { allCategories } from './index';

const {width, height} = Dimensions.get('window')

const HomeSearchScreen = () => {
  const dispatch = useDispatch();
    const searchQuery = useSelector((state) => state.search.searchQuery);
  console.log("", searchQuery)
  const filteredCategories = useSelector((state) => state.search.filteredCategories)
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentSound, setCurrentSound] = useState(null);
  const [playingIndex, setPlayingIndex] = useState(null);

  const toggleExpanded = () => setIsExpanded(!isExpanded)
  console.log("19++++++++++>",filteredCategories)
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
  // for music category
  const MAX_LENGTH = 20;
  const getPreviewText = (text) => {
    const words = text.split(' ');
    return words.length > MAX_LENGTH ? words.slice(0, MAX_LENGTH).join(' ') + '...' : text;
  };

  const handleMusic = (soundPath, index) => {
    if (playingIndex === index) {
      // Stop if the same sound is playing
      if (currentSound) {
        currentSound.stop(() => {
          currentSound.release();
          setPlayingIndex(null);
          setCurrentSound(null);
          console.log(`Sound ${soundPath} stopped`);
        });
      }
    } else {
      // Stop current sound (if any) and play new sound
      if (currentSound) {
        currentSound.stop(() => {
          currentSound.release();
        });
      }

      const newSound = new Sound(soundPath, Sound.MAIN_BUNDLE, (error) => {
        if (error) {
          console.log(`Failed to load sound ${soundPath}`, error);
          return;
        }
        setCurrentSound(newSound);
        setPlayingIndex(index);
        newSound.play((success) => {
          if (success) {
            console.log(`Sound ${soundPath} played successfully`);
          } else {
            console.log(`Sound ${soundPath} playback failed`);
            setCurrentSound(null);
            setPlayingIndex(null);
          }
        });
      });
    }
  };

  const handleStop = () => {
    if (currentSound) {
      currentSound.stop(() => {
        currentSound.release();
        setCurrentSound(null);
        setPlayingIndex(null);
        console.log('Sound stopped');
      });
    }
  };

  return (
    <View>
      <SearchBar
      placeholder='Search Here'
      onPress={() => handleSearchItem()}
      onChangeText={handleSearch}
      />
      <Text>HomeSearchScreen</Text>
      <ScrollView >
      {filteredCategories.map((category, index) => {
       
       return (
         <View key={index}>
           <Text>{category.category}</Text>
           <View
             style={{
               borderRadius: 10,
               borderColor: '#DD3333',
               borderWidth: 1,
               padding: width * 0.04,
             }}
             key={index}
           >
             <Image
               style={{
                 width: '100%',
                 height: height * 0.2,
                 borderRadius: 10,
               }}
               source={category.icon}
               width={100}
               height={100}
             />

             <View
               style={{
                 paddingVertical: height * 0.02,
                 flexDirection: 'row',
                 justifyContent: 'space-between',
               }}
             >
               {playingIndex === index ? (
                 <TouchableOpacity
                   onPress={handleStop}
                   style={{
                     padding: width * 0.002,
                     backgroundColor: '#F4C0C0',
                     width: width * 0.15,
                     alignItems: 'center',
                     paddingVertical: height * 0.005,
                     borderRadius: 5,
                   }}
                 >
                   <Text style={{ color: '#DD3333' }}>Stop</Text>
                 </TouchableOpacity>
               ) : (
                 <TouchableOpacity
                   onPress={() => handleMusic(category.music, index)}
                   style={{
                     padding: width * 0.002,
                     backgroundColor: '#F4C0C0',
                     width: width * 0.15,
                     alignItems: 'center',
                     paddingVertical: height * 0.005,
                     borderRadius: 5,
                   }}
                 >
                   <Text style={{ color: '#DD3333' }}>Play</Text>
                 </TouchableOpacity>
               )}
               <Icon />
             </View>

             <Text style={{ paddingVertical: height * 0.005 }}>{category.title}</Text>
             <View
               style={{
                 paddingVertical: height * 0.02,
                 flexDirection: 'row',
                 justifyContent: 'space-between',
               }}
             >
               <Text>{category.singer}</Text>
               <Text>{category.date}</Text>
             </View>

             <Text>{isExpanded ? category.description : getPreviewText(category.description)}</Text>
             <TouchableOpacity onPress={toggleExpanded}>
               <Text style={{ color: '#DD3333', textDecorationLine: 'underline', paddingVertical: height * 0.004 }}>
                 {isExpanded ? 'Read less' : 'Read more'}
               </Text>
             </TouchableOpacity>
           </View>
         </View>
         
       )
     })}
 
      </ScrollView>
        </View>
  )
}

export default HomeSearchScreen
const styles = StyleSheet.create({
})