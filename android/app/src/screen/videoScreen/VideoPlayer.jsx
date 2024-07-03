import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Video from 'react-native-video';
import { useNavigation } from '@react-navigation/native';

const VideoPlayer = (videoUrl) => {
  
  console.log("8", videoUrl)
    // console.log(videoUrl.videoUrl)
    // console.log("7", video1)
    const {route} = videoUrl;
    console.log("=====>", route?.params.videoUrl);
    
    const navigation = useNavigation();
    const handleBackHome = () => {
      navigation.navigate('Video')
    }

  return (
    <View>
     
      <Video
              source={{uri: route?.params?.videoUrl}}
              style={{ width: '100%', height: 200 }}
              controls={true}
              resizeMode="contain"
            />
            <TouchableOpacity onPress={handleBackHome} >
              <Text>
                Back Home
              </Text>
            </TouchableOpacity>
    </View>
  )
}

export default VideoPlayer

const styles = StyleSheet.create({})