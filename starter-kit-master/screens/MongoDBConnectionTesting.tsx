import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
const { MongoClient } = require('mongodb');

const MongoDBConnectionTesting = () => {
  useEffect(() => {
    const uri = "mongodb+srv://Thinkingof132_:WL3Uk2jPN4gRtnVH@ibmteama.z07s6ju.mongodb.net/?retryWrites=true&w=majority";    
    const client = new MongoClient(uri);

    async function run() {
      try {
        await client.connect();
        console.log("Connected to MongoDB!");
      } finally {
        await client.close();
      }
    }
    run().catch(console.dir);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Connecting to MongoDB...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default MongoDBConnectionTesting;
