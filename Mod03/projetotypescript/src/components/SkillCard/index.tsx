import React from 'react';
import {StyleSheet, Text, TouchableOpacity, TouchableOpacityProps} from 'react-native';

interface Props extends TouchableOpacityProps {
  skill: string;
}

function SkillCard({skill, ...rest}: Props) {
  return (
    <TouchableOpacity style={styles.buttonSkill} activeOpacity={0.5} {...rest}>
      <Text style={styles.textSkill}>{skill}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonSkill: {
    marginTop: 5,
    backgroundColor: '#1f1e25',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
  },
  textSkill: {
    color: '#fff',
    fontSize: 16,
  },
});

export default SkillCard;
