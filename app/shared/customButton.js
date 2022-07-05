import React from 'react';
import { Text, Pressable } from 'react-native';

const CustomButton = ({
  onPress,
  title = 'Default text',
  shapeStyle = '#fff',
  textStyle = 'Default text'
}) => {
  return (
    <Pressable style={shapeStyle} onPress={onPress}>
      <Text style={textStyle}>{title}</Text>
    </Pressable>
  );
}

export default CustomButton;
