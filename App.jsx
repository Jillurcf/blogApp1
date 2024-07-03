import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BlogNavigation from './android/app/src/navigation/BlogNavigation'
import { Provider } from 'react-redux'
import store from './android/app/src/redux/store'

const App = () => {
  return (
  <Provider store={store}>
      <BlogNavigation />
  </Provider>
  )
}

export default App

const styles = StyleSheet.create({})