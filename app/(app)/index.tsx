import {
  courseAtom,
  loadCourseAtom,
} from '@/entities/course/model/course.state';
import { Gaps } from '@/shared/tokens';
import { useAtomValue, useSetAtom } from 'jotai';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function MyCourses() {
  const { courses, error, isLoading } = useAtomValue(courseAtom);
  const loadCourse = useSetAtom(loadCourseAtom);

  useEffect(() => {
    loadCourse();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={{ color: 'white' }}>Index</Text>
      {courses.length > 0 &&
        courses.map((c) => (
          <Text style={{ color: 'white' }} key={c.id}>
            {c.title}
          </Text>
        ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Colors.black,
    padding: 55,
  },

  content: {
    alignItems: 'center',
    gap: Gaps.g50,
  },
});
