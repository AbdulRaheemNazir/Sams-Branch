import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const SignUpScreen = () => {
  const [username, setUsername] = useState('');

  const [summary, setsummary] = useState('');
  const [workhistory, setworkhistory] = useState('');
  const [hobbies, sethobbies] = useState('');
  const [educationhistory, seteducationhistory] = useState('');
  const [contactinformation, setcontactinformation] = useState('');

  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
       <Text style={styles.header}>SignUp</Text>
      <View style={styles.inputContainer}>
        <View style={styles.inputBox}>
          <Text style={styles.inputLabelOnBox}>Username</Text>
          <TextInput
            style={styles.input}
            onChangeText={setUsername}
            value={username}
            placeholder="Username"
          />
        </View>
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.inputBox}>
          <Text style={styles.inputLabelOnBox}>Summary</Text>
          <TextInput
            style={styles.input}
            onChangeText={setsummary}
            value={summary}
            placeholder="Summary"
            secureTextEntry
          />
        </View>
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.inputBox}>
          <Text style={styles.inputLabelOnBox}>Work History</Text>
          <TextInput
            style={styles.input}
            onChangeText={setworkhistory}
            value={workhistory}
            placeholder="Work History"
            secureTextEntry
          />
        </View>
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.inputBox}>
          <Text style={styles.inputLabelOnBox}>Hobbies</Text>
          <TextInput
            style={styles.input}
            onChangeText={sethobbies}
            value={hobbies}
            placeholder="Hobbies"
            secureTextEntry
          />
        </View>
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.inputBox}>
          <Text style={styles.inputLabelOnBox}>Education History</Text>
          <TextInput
            style={styles.input}
            onChangeText={seteducationhistory}
            value={educationhistory}
            placeholder="EducationHistory"
            secureTextEntry
          />
        </View>
      </View>

      
      <View style={styles.inputContainer}>
        <View style={styles.inputBox}>
          <Text style={styles.inputLabelOnBox}>Contact Information</Text>
          <TextInput
            style={styles.input}
            onChangeText={setcontactinformation}
            value={contactinformation}
            placeholder="ContactInformation"
            secureTextEntry
          />
        </View>
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.inputBox}>
          <Text style={styles.inputLabelOnBox}>Password</Text>
          <TextInput
            style={styles.input}
            onChangeText={setPassword}
            value={password}
            placeholder="Password"
            secureTextEntry
          />
        </View>
      </View>
      
    
      
      <TouchableOpacity style={styles.SignUpButton} onPress={() => {}}>
        <Text style={styles.SignUpButtonText}>Sign Up</Text>
      </TouchableOpacity>
      
      <View style={styles.LogInTextContainer}>
        <Text style={styles.LogInText}>Already have an account? </Text>
        <Text style={[styles.LogInText, styles.LogInLink]}>Log In</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: 'white',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
    marginBottom: 24,
  },
  logo: {
    width: 250,
    height: 100,
    alignSelf: 'center',
    marginBottom: 48,
  },
  inputContainer: {
    marginBottom: 16,
  },
  inputLabel: {
    marginBottom: 4,
    color: 'black',
  },
  inputBox: {
    position: 'relative',
    borderWidth: 1,
    borderRadius: 10,
  },
  inputLabelOnBox: {
    position: 'absolute',
    top: -10,
    left: 8,
    backgroundColor: 'white',
    paddingHorizontal: 4,
    fontSize: 12,
    color: 'black',
  },
  input: {
    height: 40,
    paddingHorizontal: 8,
    backgroundColor: 'transparent',
    color: 'black',
  },
  forgotPassword: {
    textAlign: 'right',
    marginBottom: 35,
    color: 'black',
    textDecorationLine: 'underline',
  },
  SignUpButton: {
    backgroundColor: 'black',
    padding: 12,
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 25,
  },
  SignUpButtonText: {
    color: 'white',
    fontSize: 18,
  },
  LogInTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  LogInText: {
    color: 'black',
  },
  LogInLink: {
    textDecorationLine: 'underline',
  },
});

export default SignUpScreen;
