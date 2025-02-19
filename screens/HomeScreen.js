import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as Location from "expo-location";

const HomeScreen = () => {
    const [displayCurrentAddress, setdisplayCurrentAddress] = useState(
        "we are loading your location"
      );
    const [locationServicesEnabled, setlocationServicesEnabled] = useState(false);



    useEffect(() => {
        checkIfLocationEnabled();
        getCurrentLocation();
    }, []);

    const checkIfLocationEnabled = async () => {
        // Logique ici
    };

    const getCurrentLocation = async () => {
        // Logique ici
    };

    return (
        <SafeAreaView>
            <Text>HomeScreen</Text>
        </SafeAreaView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({});
