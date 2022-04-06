import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
} from 'react-native';

import Button from '../components/Button';
import SkillCard from '../components/SkillCard';

interface SkillDate {
  id: string;
  name: string;
}

const Home = () => {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState<SkillDate[]>([]);
  const [gretting, setGretting] = useState('')

  function handleAddNewSkill() {
    const data = {
      id: String(new Date().getTime()),
      name: newSkill
    }

    console.log(data);

    if (newSkill.length > 0) {
      setMySkills(oldState => [...oldState, data]);
    }
  }

  function handleRemoveSkill(id: string) {
    setMySkills(oldState => oldState.filter(skill => {
      return skill.id !== id;
    }));
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

        <Button title="Add" onPress={handleAddNewSkill} activeOpacity={0.6} />

        <Text style={[styles.sectionTitle, {marginTop: 20}]}>My Skills</Text>

        {/* <ScrollView showsVerticalScrollIndicator={false}>
          {mySkills.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </ScrollView> */}

        <FlatList 
          data={mySkills}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <SkillCard skill={item.name} onPress={() => handleRemoveSkill(item.id)} />
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
    paddingHorizontal: 30,
    paddingVertical: 70,
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
