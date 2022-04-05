import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  Platform,
  View,
  TouchableOpacity,
  FlatList,
  ScrollView
} from 'react-native';

import Button from '../components/Button';
import SkillCard from '../components/SkillCard';

const Home = () => {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState([]);
  const [gretting, setGretting] = useState('')

  function handleAddNewSkill() {
    if (newSkill.length > 0) {
      setMySkills(oldState => [...oldState, newSkill]);
    }
  }

  useEffect(() => {
    // console.log('useEffect');
    const currentHour = new Date().getHours();
    if(currentHour < 12 && currentHour > 4){
      setGretting('Good morning!');
    }else if(currentHour>= 12 && currentHour < 18 ){
      setGretting('Good afternoon!');
    }else{
      setGretting('Good night!');
    }
  }, [])

  return (
    <>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Bem vindo, Antônio Abrantes</Text>
        <Text style={{color: '#fff'}} >{gretting}</Text>
        <TextInput
          style={styles.input}
          placeholder="New skill"
          placeholderTextColor="#555"
          onChangeText={setNewSkill}
        />

        <Button onPress={handleAddNewSkill} />

        <Text style={[styles.sectionTitle, {marginTop: 20}]}>My Skills</Text>

        {/* <ScrollView showsVerticalScrollIndicator={false}>
          {mySkills.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </ScrollView> */}

        <FlatList 
          data={mySkills}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <SkillCard skill={item} />
          )}
        />

      </View>
    </>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 20,
    paddingVertical: 70,
    paddingHorizontal: 30,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    marginTop: 15,
    backgroundColor: '#1f1e25',
    color: '#fff',
    fontSize: 18,
    borderRadius: 7,
    paddingLeft: 10,
  },
});

export default Home;
