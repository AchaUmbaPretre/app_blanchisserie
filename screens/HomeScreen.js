import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import * as Location from 'expo-location'

const HomeScreen = () => {
    useEffect(()=> {
        checkIfLocationEnabled();
        getCurrentLocation();
    }, [])
  return (
    <SafeAreaView>
      <Text>HomeScreen</Text>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})