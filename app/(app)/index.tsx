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
import * as Notifications from 'expo-notifications';
import { Button } from '@/shared/Button/Button';

export default function MyCourses() {
  const { courses, isLoading } = useAtomValue(courseAtom);
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

  const allowsNotification = async () => {
    const settings = await Notifications.getPermissionsAsync();
    return (
      settings.granted ||
      settings.ios?.status == Notifications.IosAuthorizationStatus.PROVISIONAL
    );
  };

  const requestPermissions = async () => {
    return Notifications.requestPermissionsAsync({
      ios: {
        allowAlert: true,
        allowBadge: true,
        allowSound: false,
      },
    });
  };

  const sheduleNotification = async () => {
    const granted = await allowsNotification();
    if (!granted) {
      await requestPermissions();
    }

    Notifications.scheduleNotificationAsync({
      content: {
        title: 'Новый курс!',
        body: 'Начни учиться уже сейчас!',
        data: { alias: 'typescript' },
      },
      // trigger: null,
      // trigger: {
      //   seconds: 5,
      //   type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
      //   // repeats: false,
      // // },
      trigger: {
        date: new Date(Date.now() + 5 * 1000),
        type: Notifications.SchedulableTriggerInputTypes.DATE,
      },
    });
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
      <Button text="Напомнить" onPress={sheduleNotification} />
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
