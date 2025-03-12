import { authAtom } from '@/entities/auth/model/auth.state';
import { Redirect, Stack } from 'expo-router';
import { useAtomValue } from 'jotai';

export default function AppLayout() {
  const { access_token } = useAtomValue(authAtom);
  if (!access_token) {
    //программно перенаправляем на нужную страницу
    return <Redirect href="/login" />;
  }
  return (
    <Stack>
      <Stack.Screen name="index" />
    </Stack>
  );
}
