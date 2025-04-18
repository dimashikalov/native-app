import { View, Text, StyleSheet, Image, Linking } from 'react-native';
import React from 'react';
import { StudentCourseDescription } from '../../../../entities/course/model/course.model';
import { Colors, Fonts, Gaps, Radius } from '@/shared/tokens';
import { Button } from '@/shared/Button/Button';
import Chip from '@/shared/Chip/Chip';
import { PREFIX } from '@/shared/api';
import MaskedView from '@react-native-masked-view/masked-view';
import { LinearGradient } from 'expo-linear-gradient';
import CourseProgress from '@/entities/course/ui/CourseProgress/CourseProgress';

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
        <CourseProgress passedLessons={30} totalLessons={120} />
        <Text style={styles.title}>{course.shortTitle}</Text>
        <View style={styles.chips}>
          {course.courseOnDirection.length > 0 &&
            course.courseOnDirection.map((c) => (
              <Chip text={c.direction.name} />
            ))}
        </View>
        {course.tariffs.length > 0 && (
          <MaskedView
            maskElement={
              <Text style={styles.tariff}>
                Тариф &laquo;{course.tariffs[0].name}&raquo;
              </Text>
            }
          >
            <LinearGradient
              colors={['#D77BE5', '#6C38CC']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
            >
              <Text style={{ ...styles.tariff, ...styles.tariffWithOpacity }}>
                Тариф &laquo;{course.tariffs[0].name}&raquo;
              </Text>
            </LinearGradient>
          </MaskedView>
        )}
      </View>
      <View style={styles.footer}>
        <Button
          text="Купить"
          onPress={() =>
            Linking.openURL(`https://purpleschool.ru/course/${course.alias}`)
          }
        />
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
  tariff: {
    marginTop: 10,
    fontSize: Fonts.f16,
    fontFamily: Fonts.regular,
  },
  tariffWithOpacity: {
    opacity: 0,
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
