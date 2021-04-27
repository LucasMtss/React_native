import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const Header = () => {
  return (
    <View style={styles.container}>
      <Icon name="arrow-back" size={24} style={styles.icon} />
      <Text style={styles.title}>Profile</Text>
      <Icon
        name="md-ellipsis-horizontal-outline"
        size={24}
        style={styles.icon}
      />
    </View>
  );
};

export default Header;
