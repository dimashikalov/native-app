import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Colors, Fonts, Radius } from '../tokens';

export default function Chip({ text }: { text: string }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: Colors.border,
    borderRadius: Radius.r17,
    borderWidth: 1,
    width: '40%',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  text: {
    color: Colors.white,
    fontFamily: Fonts.regular,
    fontSize: Fonts.f16,
  },
});
