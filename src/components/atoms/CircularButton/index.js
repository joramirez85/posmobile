import React, { memo } from 'react';
import {
  View, Text, TouchableOpacity,
} from 'react-native';
import styles from './style';
import { LinearGradient } from 'expo-linear-gradient'
import { viewPort } from '../../../utils/utils'

const CircularButton = ({
  onPress,
  title = null,
  icon = null,
  lg = null,
  size = null,
  colors = null,
  disabled = false,
}) => {
  const widthXL = viewPort(111, 0).width;
  const widthSM = viewPort(90, 0).width;

  return (
    <>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => requestAnimationFrame(() => onPress())}
        style={[styles.container, { width: lg ? widthXL : widthSM }]}
        disabled={disabled}
      >
        <View style={[styles.circle(size), disabled && { opacity: 0.4 }]}>
          <LinearGradient
            style={styles.bg(size)}
            colors={colors || ['#FBFBFB', '#FBFBFB']}
          >
            {icon}
          </LinearGradient>
        </View>
        {
          title &&
          <Text style={[styles.title, disabled && { opacity: 0.4 }]}>
            {title.replace('//n', '\n')}
          </Text>
        }
      </TouchableOpacity>
    </>
  )
}

export default memo(CircularButton);
