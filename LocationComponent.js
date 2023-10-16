import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import Geolocation from "@react-native-community/geolocation";

const LocationComponent = () => {
  const [initialPosition, setInitialPosition] = useState(null);
  const [currentPosition, setCurrentPosition] = useState(null);

  useEffect(() => {
    Geolocation.getCurrentPosition(
      (position) => {
        setInitialPosition(position);
      },
      (error) => alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  }, []);

  const getCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        setCurrentPosition(position);
      },
      (error) => alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Initial position:</Text>
      {initialPosition && (
        <Text style={styles.dataText}>
          {JSON.stringify(initialPosition, null, 2)}
        </Text>
      )}
      <Text style={styles.headerText}>Current position:</Text>
      {currentPosition && (
        <Text style={styles.dataText}>
          {JSON.stringify(currentPosition, null, 2)}
        </Text>
      )}
      <Button title="Lấy vị trí hiện tại" onPress={getCurrentLocation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 20,
  },
  dataText: {
    fontFamily: "Courier",
    marginTop: 10,
  },
});

export default LocationComponent;
