import {
  authAtom,
  loginAtom,
  logoutAtom,
} from '@/entities/auth/model/auth.state';
import { profileAtom } from '@/entities/user/model/user.state';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router, useRootNavigationState } from 'expo-router';
import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import { useEffect } from 'react';
import { Text, View } from 'react-native';

export default function MyCourses() {
  // const { access_token } = useAtomValue(authAtom);
  // const state = useRootNavigationState();

  // const logout = useSetAtom(logoutAtom);
  // useEffect(() => {
  //   // AsyncStorage.getItem('auth').then((data) => {
  //   //   console.log('data = ', data);
  //   // });
  //   // logout();
  //   if (!state?.key) return;
  //   if (!access_token) {
  //тоже рабочий вариант для перенаправления
  //     router.replace('/login');
  //   }
  // }, [access_token, state]);

  return (
    <View>
      <Text>Index</Text>
    </View>
  );
}
