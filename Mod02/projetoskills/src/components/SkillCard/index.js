import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

function SkillCard({skill}) {
  return (
    <TouchableOpacity style={styles.buttonSkill} activeOpacity={0.5}>
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
