import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ActivityIndicator } from 'react-native';
import axios from 'axios';
import LoginSuccessfulScreen from './LoginSuccessfulScreen'; // Importing LoginSuccessfulScreen

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false); // New state to track login status

  const handleLogin = async () => {
    try {
      setLoading(true);
      const response = await axios.post('http://192.168.218.38:8080/api/auth', {
        email: email,
        password: password,
      });
      setMessage(''); // Clear any previous error messages
      setLoggedIn(true); // Update login status
    } catch (error) {
      setMessage('Login failed');
    } finally {
      setLoading(false);
    }
  };

  if (loggedIn) { // Redirect if logged in
    return <LoginSuccessfulScreen />;
  }

  return (
    <View style={styles.container}>
      <Image source={require('./assets/IBM_Logo.png')} style={styles.logo} />
      
      <View style={styles.inputContainer}>
        <View style={styles.inputBox}>
          <Text style={styles.inputLabelOnBox}>Username</Text>
          <TextInput
            style={styles.input}
            onChangeText={setEmail}
            value={email}
            placeholder="Username"
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
      
      <Text style={[styles.message, message === 'Login failed' && styles.errorMessage]}>{message}</Text>
      
      <Text style={styles.forgotPassword}>Forgot Password?</Text>
      
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Log In</Text>
      </TouchableOpacity>
      {loading && <ActivityIndicator size="small" color="#0000ff" />}
      
      <View style={styles.signUpTextContainer}>
        <Text style={styles.signUpText}>Don't have an account? </Text>
        <Text style={[styles.signUpText, styles.signUpLink]}>Sign Up</Text>
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
  logo: {
    width: 250,
    height: 100,
    alignSelf: 'center',
    marginBottom: 48,
  },
  inputContainer: {
    marginBottom: 16,
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
  loginButton: {
    backgroundColor: 'black',
    padding: 12,
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 25,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 18,
  },
  signUpTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  signUpText: {
    color: 'black',
  },
  signUpLink: {
    textDecorationLine: 'underline',
  },
  message: {
    color: 'black', // Default text color
    textAlign: 'center',
    marginBottom: 10,
  },
  errorMessage: {
    color: 'red', // Red text color for error message
  },
});

export default LoginScreen;











/*
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Image source={require('../assets/IBM_Logo.png')} style={styles.logo} />
      
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
      
      <Text style={styles.forgotPassword}>Forgot Password?</Text>
      
      <TouchableOpacity style={styles.loginButton} onPress={() => {}}>
        <Text style={styles.loginButtonText}>Log In</Text>
      </TouchableOpacity>
      
      <View style={styles.signUpTextContainer}>
        <Text style={styles.signUpText}>Don't have an account? </Text>
        <Text style={[styles.signUpText, styles.signUpLink]}>Sign Up</Text>
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
  loginButton: {
    backgroundColor: 'black',
    padding: 12,
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 25,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 18,
  },
  signUpTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  signUpText: {
    color: 'black',
  },
  signUpLink: {
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;
*/