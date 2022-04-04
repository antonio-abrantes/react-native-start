/**
 * Desafio
 * https://github.com/Rocketseat/bootcamp-gostack-desafios/tree/master/desafio-conceitos-react-native
 */

import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import MyWebComponent from './components/MyWebComponent';

export default function App() {

  const data = [
    {
      albumId: 3,
      id: 101,
      title: 'incidunt alias vel enim',
      url: 'https://via.placeholder.com/600/e743b',
      thumbnailUrl: 'https://via.placeholder.com/150/e743b',
    },
    {
      albumId: 3,
      id: 102,
      title:
        'eaque iste corporis tempora vero distinctio consequuntur nisi nesciunt',
      url: 'https://via.placeholder.com/600/a393af',
      thumbnailUrl: 'https://via.placeholder.com/150/a393af',
    },
    {
      albumId: 3,
      id: 103,
      title: 'et eius nisi in ut reprehenderit labore eum',
      url: 'https://via.placeholder.com/600/35cedf',
      thumbnailUrl: 'https://via.placeholder.com/150/35cedf',
    },
    {
      albumId: 3,
      id: 104,
      title: 'incidunt alias vel enim',
      url: 'https://via.placeholder.com/600/e743b',
      thumbnailUrl: 'https://via.placeholder.com/150/e743b',
    },
    {
      albumId: 3,
      id: 105,
      title:
        'eaque iste corporis tempora vero distinctio consequuntur nisi nesciunt',
      url: 'https://via.placeholder.com/600/a393af',
      thumbnailUrl: 'https://via.placeholder.com/150/a393af',
    },
    {
      albumId: 3,
      id: 106,
      title: 'et eius nisi in ut reprehenderit labore eum',
      url: 'https://via.placeholder.com/600/35cedf',
      thumbnailUrl: 'https://via.placeholder.com/150/35cedf',
    },
    {
      albumId: 3,
      id: 107,
      title: 'incidunt alias vel enim',
      url: 'https://via.placeholder.com/600/e743b',
      thumbnailUrl: 'https://via.placeholder.com/150/e743b',
    },
    {
      albumId: 3,
      id: 108,
      title:
        'eaque iste corporis tempora vero distinctio consequuntur nisi nesciunt',
      url: 'https://via.placeholder.com/600/a393af',
      thumbnailUrl: 'https://via.placeholder.com/150/a393af',
    },
    {
      albumId: 3,
      id: 109,
      title: 'et eius nisi in ut reprehenderit labore eum',
      url: 'https://via.placeholder.com/600/35cedf',
      thumbnailUrl: 'https://via.placeholder.com/150/35cedf',
    },
    {
      albumId: 3,
      id: 110,
      title: 'incidunt alias vel enim',
      url: 'https://via.placeholder.com/600/e743b',
      thumbnailUrl: 'https://via.placeholder.com/150/e743b',
    },
  ];

  const [projects, setProjects] = useState(data);

  async function handleAddProject() {
    let newProject = {
      albumId: projects.length + 1,
      id: projects[projects.length - 1 ].id + projects.length + 1,
      title: `Projeto ${Date.now()}`,
      url: 'https://via.placeholder.com/600/e743b',
      thumbnailUrl: 'https://via.placeholder.com/150/e743b',
    }
    const tempProjects = projects;
    setProjects([...tempProjects, newProject]);
  }

  return (
    <>
      {/* <StatusBar barStyle="light-content" backgroundColor="#456" />
      <FlatList
        style={styles.container}
        data={projects}
        keyExtractor={project => project.id}
        renderItem={({item}) => <Text style={styles.title}>{item.title}</Text>}
      />
      <TouchableOpacity style={styles.button} activeOpacity={0.6} onPress={handleAddProject}>
        <Text style={styles.buttonText}>Adicionar novo título</Text>
      </TouchableOpacity> */}
      {/* <View style={styles.container}>
        <Text style={styles.title}>App teste 01</Text>
      </View> */}
      <MyWebComponent style={styles.container} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7149c1',
  },
  title: {
    color: '#fff',
    fontSize: 20,
    padding: 5,
  },
  button: {
    backgroundColor: '#fff',
    margin: 20,
    height: 20,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontWeight: 'bolt',
    fontSize: 16,
  },
});
