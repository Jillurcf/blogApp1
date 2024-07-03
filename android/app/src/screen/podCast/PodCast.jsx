import { Alert, Dimensions, Image, Modal, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { videodata } from '../music';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from '../../assets/images/Icon.svg';
import { useNavigation } from '@react-navigation/native';
import Video from 'react-native-video';
const { width, height } = Dimensions.get('window')

const PodCast = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [playingIndex, setPlayingIndex] = useState(null);
  const navigation = useNavigation()
  const [modalVisible, setModalVisible] = useState(false);
  const toggleExpanded = () => setIsExpanded(!isExpanded);

  const MAX_LENGTH = 20;
  const getPreviewText = (text) => {
    const words = text.split(' ');
    return words.length > MAX_LENGTH ? words.slice(0, MAX_LENGTH).join(' ') + '...' : text;
  };

  const PodCast = (videoUrl, index) => {
    console.log("24", videoUrl)
    setPlayingIndex(index)
   navigation.navigate("VideoPlayer", {videoUrl})
    }
  
  const handleStop = () => {
    setPlayingIndex(null)
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingLeft: 0 }}>
        <View style={{ gap: height * 0.015 }}>
          {videodata.map((category, index) => (
            <View
              style={{
                borderRadius: 10,
                borderColor: '#DD3333',
                borderWidth: 1,
                padding: width * 0.04,
              }}
              key={index}
            >
              
              {/* Modal for Play Video */}

              {/* <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
        <Video
        
              source={{ uri: category.videoUrl }}
              style={{backgroundColor: "black", width: '100%', height: 200 }}
              controls={true}
              resizeMode="contain"
            />
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable>
    </View> */}

<Video
              source={{uri: category.videoUrl}}
              style={{ width: '100%', height: 200 }}
              controls={true}
              resizeMode="contain"
            />
            <TouchableOpacity >
              <Text>
                Back Home
              </Text>
            </TouchableOpacity>
    


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
                   
                    // onPress={() => setModalVisible(!modalVisible)}
                    style={{
                      padding: width * 0.002,
                      backgroundColor: '#F4C0C0',
                      width: width * 0.15,
                      alignItems: 'center',
                      paddingVertical: height * 0.005,
                      borderRadius: 5,
                    }}
                  >
                    <Text style={{ color: '#DD3333' }}>Video</Text>
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
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PodCast;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: width * 0.005,
    paddingVertical: height * 0.03,
  },
  centeredView: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    marginTop: 2,
  }
});
