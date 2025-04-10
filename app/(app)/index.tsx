import { StudentCourseDescription } from '@/entities/course/model/course.model';
import {
  courseAtom,
  loadCourseAtom,
} from '@/entities/course/model/course.state';
import CourseCard from '@/entities/course/ui/CourseCard';
import { useAtomValue, useSetAtom } from 'jotai';
import { useEffect } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

export default function MyCourses() {
  const { courses, error, isLoading } = useAtomValue(courseAtom);
  const loadCourse = useSetAtom(loadCourseAtom);

  useEffect(() => {
    loadCourse();
  }, []);

  const renderCourse = ({ item }: { item: StudentCourseDescription }) => {
    return (
      <View style={styles.item}>
        <CourseCard {...item} key={item.id} />
      </View>
    );
  };

  return (
    <>
      {courses.length > 0 && (
        <FlatList
          data={courses}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderCourse}
        />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 20,
  },
});
