import React from 'react';
import 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  Alert,
} from 'react-native';

import styles from './styles';

import TouchId from 'react-native-touch-id';

export default function Login({navigation}) {
  const navegar = useNavigation('Pressione para autenticar!', {
    title: 'Autentique-se',
  });
  TouchId.authenticate().then(() => {
    Alert.alert('Autenticado com sucesso!');
    navegar.navigate('Home', {});
  });

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="nome de usuário"
        placeholderTextColor="#fff"
      />
      <TextInput
        style={styles.input}
        placeholder="senha"
        placeholderTextColor="#fff"
      />
      <TouchableOpacity style={styles.button}>
        <Text>Entrar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
