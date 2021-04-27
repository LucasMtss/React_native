import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './style';

const Button = ({children, type, style}) => {
  return (
    <TouchableOpacity
      style={[styles.container, style, type ? styles[`button-${type}`] : {}]}
      onPress={() => {}}>
      <Text style={[styles.text, type ? styles[`text-${type}`] : {}]}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
