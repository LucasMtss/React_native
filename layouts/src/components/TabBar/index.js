import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

const TabBar = () => (
  <View style={styles.container}>
    <Icon name="clone" size={20} style={[styles.icon, styles.active]} />
    <Icon name="search" size={20} style={styles.icon} />
    <View style={styles.main}>
      <Icon name="plus" size={20} style={styles.mainIcon} />
    </View>
    <Icon name="bell-o" size={20} style={styles.icon} />
    <Icon name="user-o" size={20} style={styles.icon} />
  </View>
);

export default TabBar;
