import { StyleSheet, Text, View, SafeAreaView, Alert } from 'react-native'
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
        let enabled = await Location.hasServicesEnabledAsync();
    if (!enabled) {
      Alert.alert(
        "Location services not enabled",
        "Please enable the location services",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ],
        { cancelable: false }
      );
    } else {
      setlocationServicesEnabled(enabled);
    }
    };

    const getCurrentLocation = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
            Alert.alert(
              "Autorisation refusée",
              "autoriser l'application à utiliser les services de localisation",
              [
                {
                  text: "Cancel",
                  onPress: () => console.log("Cancel Pressed"),
                  style: "cancel",
                },
                { text: "OK", onPress: () => console.log("OK Pressed") },
              ],
              { cancelable: false }
            );
          }

          const { coords } = await Location.getCurrentPositionAsync();
          if (coords) {
            const { latitude, longitude } = coords;
      
            let response = await Location.reverseGeocodeAsync({
              latitude,
              longitude,
            });
            
            for (let item of response) {
              let address = `${item.name} ${item.city} ${item.postalCode}`;
              setdisplayCurrentAddress(address);
            }
          }

    };

    const services = [
        {
          id: "0",
          image: "https://cdn-icons-png.flaticon.com/128/4643/4643574.png",
          name: "shirt",
          quantity: 0,
          price: 10,
        },
        {
          id: "11",
          image: "https://cdn-icons-png.flaticon.com/128/892/892458.png",
          name: "T-shirt",
          quantity: 0,
          price: 10,
        },
        {
          id: "12",
          image: "https://cdn-icons-png.flaticon.com/128/9609/9609161.png",
          name: "dresses",
          quantity: 0,
          price: 10,
        },
        {
          id: "13",
          image: "https://cdn-icons-png.flaticon.com/128/599/599388.png",
          name: "jeans",
          quantity: 0,
          price: 10,
        },
        {
          id: "14",
          image: "https://cdn-icons-png.flaticon.com/128/9431/9431166.png",
          name: "Sweater",
          quantity: 0,
          price: 10,
        },
        {
          id: "15",
          image: "https://cdn-icons-png.flaticon.com/128/3345/3345397.png",
          name: "shorts",
          quantity: 0,
          price: 10,
        },
        {
          id: "16",
          image: "https://cdn-icons-png.flaticon.com/128/293/293241.png",
          name: "Sleeveless",
          quantity: 0,
          price: 10,
        },
      ];

    return (
        <SafeAreaView>
            <Text>HomeScreen</Text>
        </SafeAreaView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({});
