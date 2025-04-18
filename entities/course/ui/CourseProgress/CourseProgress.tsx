import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Colors, Fonts, Radius } from '@/shared/tokens';

export default function CourseProgress({
  totalLessons,
  passedLessons,
}: {
  totalLessons: number;
  passedLessons: number;
}) {
  const persent = Math.round((passedLessons / totalLessons) * 100);
  return (
    <View style={styles.wrapper}>
      <View style={styles.head}>
        <Text style={styles.textPercent}>{persent}%</Text>
        <Text style={styles.textCount}>
          {passedLessons}/{totalLessons}
        </Text>
      </View>
      <View style={styles.bar}>
        <View style={{ ...styles.progress, width: `${persent}%` }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: { marginBottom: 18 },
  head: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  bar: {
    height: 5,
    borderRadius: Radius.r20,
    backgroundColor: Colors.border,
  },
  progress: {
    height: 5,
    borderRadius: Radius.r20,
    backgroundColor: Colors.secondary,
  },
  textPercent: {
    color: Colors.secondary,
    fontSize: Fonts.f16,
    fontFamily: Fonts.regular,
  },
  textCount: {
    fontSize: Fonts.f12,
    fontFamily: Fonts.regular,
    color: Colors.grayLight,
  },
});
