


/*
import {
  Viro360Image,
  ViroAmbientLight,
  ViroARScene,
  ViroARSceneNavigator,
  ViroBox,
  ViroMaterials
} from "@viro-community/react-viro";
import React from "react";
import { StyleSheet } from "react-native";
import { handleTrackingUpdated } from "./android/app/src/utils/handleTrackingUpdated";

// Define a material with a single texture
ViroMaterials.createMaterials({
  allSides: {
    diffuseTexture: require('./assets/test2.png'), // Path to the image for all sides
  },
});

const HelloWorldSceneAR = () => {
  return (
    <ViroARScene onTrackingUpdated={handleTrackingUpdated}>
      <ViroBox 
        position={[0, 1, -3]}
        height={1}
        width={1}
        length={1}
        materials={["allSides", "allSides", "allSides", "allSides", "allSides", "allSides"]}
        physicsBody={{
          type: 'Dynamic', //Set the type to 'Static' to keep the box stationary
          mass: 1,
          useGravity : false,
          torque:[0,0.2,0],
        }}
      />
      <ViroAmbientLight color="#ffffff" />
    </ViroARScene>
  );
};

export default () => {
  return (
    <ViroARSceneNavigator
      autofocus={true}
      initialScene={{
        scene: HelloWorldSceneAR,
      }}
      style={styles.f1}
    />
  );
};

var styles = StyleSheet.create({
  f1: { flex: 1 },
  helloWorldTextStyle: {
    fontFamily: "Arial",
    fontSize: 30,
    color: "#ffffff",
    textAlignVertical: "center",
    textAlign: "center",
  },
});
*/














/*
import {
  Viro360Image,
  ViroAmbientLight,
  ViroARScene,
  ViroARSceneNavigator,
} from "@viro-community/react-viro";
import React from "react";
import { StyleSheet } from "react-native";
import { handleTrackingUpdated } from "./android/app/src/utils/handleTrackingUpdated";

const HelloWorldSceneAR = () => {
  return (
    <ViroARScene onTrackingUpdated={handleTrackingUpdated}>
      <Viro360Image source={require("./assets/test.png")} />
      <ViroAmbientLight color="#ffffff" />
    </ViroARScene>
  );
};

export default () => {
  return (
    <ViroARSceneNavigator
      autofocus={true}
      initialScene={{
        scene: HelloWorldSceneAR,
      }}
      style={styles.f1}
    />
  );
};

var styles = StyleSheet.create({
  f1: { flex: 1 },
  helloWorldTextStyle: {
    fontFamily: "Arial",
    fontSize: 30,
    color: "#ffffff",
    textAlignVertical: "center",
    textAlign: "center",
  },
});
*/