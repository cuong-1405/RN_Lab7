// import React from "react";
// import { View, Button, Alert } from "react-native";

// const App = () => {
//   const showAlert = () => {
//     Alert.alert(
//       "Thông báo", // Tiêu đề
//       "You need to...", // Nội dung
//       [{ text: "OK", onPress: () => console.log("Đã nhấn nút Đóng") }],
//       { cancelable: false }
//     );
//   };

//   return (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <Button title="Alert" onPress={showAlert} />
//     </View>
//   );
// };

import React from "react";
import { View, StyleSheet } from "react-native";
import Geolocation from "./LocationComponent";
import LocationComponent from "./LocationComponent";

const App = () => {
  return (
    <View style={styles.container}>
      <LocationComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});

export default App;
