import React from "react";
import {
  StatusBar,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-dynamic-vector-icons";
import BarcodeScanner from "./lib/BarcodeScanner";

const App = () => {
  renderBackButton = () => (
    <TouchableOpacity style={styles.backButton} onPress={() => {}}>
      <Icon type="Ionicons" name="ios-arrow-back" color="#f95313" />
    </TouchableOpacity>
  );
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <BarcodeScanner
          onBarcodeRecognized={({ barcodes }) => {
            console.log("Barcode: ", barcodes[0].data);
          }}
        >
          <StatusBar barStyle="light-content" />
          <SafeAreaView style={{ position: "absolute", left: 12, top: 36 }}>
            {renderBackButton()}
          </SafeAreaView>
        </BarcodeScanner>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  backButton: {
    height: 50,
    width: 50,
    backgroundColor: "#fdfdfd",
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    shadowRadius: 8,
    shadowOpacity: 0.8,
    shadowColor: "#757575",
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
});

export default App;
