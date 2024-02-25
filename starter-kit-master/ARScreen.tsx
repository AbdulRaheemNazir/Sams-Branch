import React from "react";
import {
  Viro360Image,
  ViroAmbientLight,
  ViroARScene,
  ViroARSceneNavigator,
  ViroBox,
  ViroMaterials,
  ViroARImageMarker,
  ViroARTrackingTargets
} from "@viro-community/react-viro";
import { StyleSheet } from "react-native";
import { handleTrackingUpdated } from "./android/app/src/utils/handleTrackingUpdated";


// Define a material with a single texture
ViroMaterials.createMaterials({
  allSides: {
    diffuseTexture: require('./assets/test3.png'), // Path to the image for all sides
  },
});

const HelloWorldSceneAR = () => {
  return (
    <ViroARScene onTrackingUpdated={handleTrackingUpdated}>
      <ViroARImageMarker target={"targetOne"}>
        <ViroBox 
          position={[0, 0, 0]} 
          scale={[0.2, 0.2, 0.2]}
          materials={["allSides", "allSides", "allSides", "allSides", "allSides", "allSides"]}
          physicsBody={{
            type: 'Dynamic',
            mass: 1,
            useGravity: false,
            torque: [0.002, 0.002, 0.002],
          }}
        />
      </ViroARImageMarker>
      <ViroAmbientLight color="#ffffff" />
    </ViroARScene>
  );
};

ViroARTrackingTargets.createTargets({
  "targetOne": {
    source: require('./assets/logo.png'),
    orientation: "Up",
    physicalWidth: 0.1 // real world width in meters  
  },
});

const ARScreen = () => {
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

const styles = StyleSheet.create({
  f1: { flex: 1 },
  helloWorldTextStyle: {
    fontFamily: "Arial",
    fontSize: 30,
    color: "#ffffff",
    textAlignVertical: "center",
    textAlign: "center",
  },
});

export default ARScreen;
