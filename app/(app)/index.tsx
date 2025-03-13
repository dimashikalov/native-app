import { logoutAtom } from '@/entities/auth/model/auth.state';
import { Button } from '@/shared/Button/Button';
import { useSetAtom } from 'jotai';
import { Text, View } from 'react-native';

export default function MyCourses() {
  const logout = useSetAtom(logoutAtom);

  return (
    <View>
      <Text>Index</Text>
      <Button text="Выход" onPress={logout} />
    </View>
  );
}
