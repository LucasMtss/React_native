import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './styles';
import Button from '../Button';

const SubHeader = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.avatar}
        source={{
          uri:
            'https://tconline.com.br/wp-content/uploads/2019/11/Scarlett-Johansson-2-e1574430293237.jpg',
        }}
      />
      <View style={styles.profileInfo}>
        <Text style={styles.name}>Scarllet Johanson</Text>
        <Text style={styles.bio}>A viúva negra </Text>
        <View style={styles.buttonContainer}>
          <Button style={styles.firstButton}>Mensagem</Button>
          <Button type="outline">Seguir</Button>
        </View>
      </View>
    </View>
  );
};

export default SubHeader;
