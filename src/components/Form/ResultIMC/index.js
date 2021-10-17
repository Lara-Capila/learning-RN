import React from 'react';
import { View, Text, Share, TouchableOpacity, Image } from 'react-native';
import styles from './style';

export default function ResultIMC(props) {

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: `Meu imc hoje é: ${props.resultIMC}! Use o app! https://www.instagram.com/lara.capila/`,
        url: 'https://www.instagram.com/lara.capila/',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View style={styles.resultIMC}>
      <Text style={styles.message}>{props.messageResultIMC}</Text>
      <Text style={styles.resultNumber}>{props.resultIMC}</Text>
      <View style={styles.boxShare}>
        {props.resultIMC ? 
        <View>
          <TouchableOpacity
            style={styles.shared}
            onPress={onShare}
          >
            <Text
              style={styles.sharedText}
            >Compartilhar</Text>
          </TouchableOpacity> 
        </View>
          : null
        }
      </View>
    </View>
  );
};
