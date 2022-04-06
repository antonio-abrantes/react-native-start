import React from 'react';
import {StyleSheet, Text, TouchableOpacity, TouchableOpacityProps} from 'react-native';

interface ButtonProps extends TouchableOpacityProps{
  title: string;
}

function Button({ title,...rest}: ButtonProps) {
  return (
    <TouchableOpacity
      style={styles.button}
      {...rest}
      >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 15,
    backgroundColor: '#a370f7',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default Button;
