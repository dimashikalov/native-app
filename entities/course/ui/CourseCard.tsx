import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import { StudentCourseDescription } from '../model/course.model';
import { Colors, Fonts, Gaps, Radius } from '@/shared/tokens';
import { Button } from '@/shared/Button/Button';
import Chip from '@/shared/Chip/Chip';

export default function CourseCard(course: StudentCourseDescription) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: course.image,
        }}
      />

      <View style={styles.header}>
        <Text style={styles.title}>{course.shortTitle}</Text>
        <View style={styles.chips}>
          {course.courseOnDirection.length > 0 &&
            course.courseOnDirection.map((c) => (
              <Chip text={c.direction.name} />
            ))}
        </View>
      </View>
      <View style={styles.footer}>
        <Button text="Продолжить" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    borderRadius: Radius.r10,
    backgroundColor: Colors.blackLight,
  },
  image: {
    height: 200,
    borderRadius: Radius.r10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  header: {
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  title: {
    color: Colors.white,
    fontFamily: Fonts.semibold,
    fontSize: Fonts.f20,
    marginBottom: 12,
  },
  tariff: {
    color: Colors.primaryHover,
    fontFamily: Fonts.regular,
    fontSize: Fonts.f16,
  },
  chips: {
    flexDirection: 'row',
    gap: Gaps.g10,
  },
  footer: {
    backgroundColor: Colors.violetDark,
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
});
