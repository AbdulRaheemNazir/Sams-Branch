//        apikey: 'o58H2YwteBWMUq-fIGtvp8lsQy3_eUiL1L9CGCATiuRr',
//      serviceUrl: 'https://api.eu-gb.text-to-speech.watson.cloud.ibm.com/instances/9911a204-42e4-4c04-9620-8b579286cbb7',

import React, { useState, useEffect } from 'react';
import { Text, View, Button } from 'react-native';
import Voice from '@react-native-community/voice';
import { IamAuthenticator } from 'ibm-watson/auth';
import TextToSpeechV1 from 'ibm-watson/text-to-speech/v1';
import Sound from 'react-native-sound';
import { SpeechResultsEvent } from '@react-native-community/voice';


const TextToSpeech = () => {
  const [text, setText] = useState('');
  const [isListening, setIsListening] = useState(false);

  useEffect(() => {
    Voice.onSpeechResults = onSpeechResults;

    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  const onSpeechResults = (e: SpeechResultsEvent) => {
    if (e.value && e.value.length > 0) {
      setText(e.value[0]);
    }
  };
  
  

  const startListening = async () => {
    setIsListening(true);
    try {
      await Voice.start('en-US');
    } catch (e) {
      console.error(e);
    }
  };

  const stopListening = async () => {
    setIsListening(false);
    try {
      await Voice.stop();
    } catch (e) {
      console.error(e);
    }
  };

  const synthesizeSpeech = async () => {
    const textToSpeech = new TextToSpeechV1({
      authenticator: new IamAuthenticator({
        apikey: 'YOUR_API_KEY',
      }),
      serviceUrl: 'https://api.us-south.text-to-speech.watson.cloud.ibm.com',
    });

    try {
      const res = await textToSpeech.synthesize({
        text,
        accept: 'audio/wav',
        voice: 'en-US_AllisonV3Voice',
      });

      const audioUrl = res.result;
      const sound = new Sound(audioUrl, '', (error) => {
        if (error) {
          console.error('Failed to load the sound', error);
          return;
        }
        sound.play((success) => {
          if (success) {
            console.log('Sound played successfully');
          } else {
            console.error('Playback failed due to audio decoding errors');
          }
        });
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <Text>Text to convert:</Text>
      <Button onPress={startListening} title="Start Listening" />
      <Button onPress={stopListening} title="Stop Listening" />
      <Text>{text}</Text>
      <Button onPress={synthesizeSpeech} title="Convert to Speech" />
    </View>
  );
};

export default TextToSpeech;
