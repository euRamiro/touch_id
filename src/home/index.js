import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text} from 'react-native';

import styles from './styles';

export default function Home({navigation}) {
  useEffect(() => {
    // reseta a navegação, evitando que voltei para a tela de login
    navigation.reset({
      index: 0,
      routes: [
        {
          name: 'Home',
        },
      ],
    });
  });

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Logado...</Text>
    </View>
  );
}
