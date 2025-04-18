import { StudentCourseDescription } from '@/entities/course/model/course.model';
import {
  courseAtom,
  loadCourseAtom,
} from '@/entities/course/model/course.state';
import CourseCard from '@/widget/course/ui/CourseCard/CourseCard';
import { Colors } from '@/shared/tokens';
import { useAtomValue, useSetAtom } from 'jotai';
import { useEffect } from 'react';
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  StyleSheet,
  View,
} from 'react-native';

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
      {isLoading && (
        <ActivityIndicator
          style={styles.activity}
          size={'large'}
          color={Colors.primary}
        />
      )}
      {courses.length > 0 && (
        <FlatList
          refreshControl={
            <RefreshControl refreshing={isLoading} onRefresh={loadCourse} />
          }
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
  activity: {
    marginTop: 30,
  },
});
