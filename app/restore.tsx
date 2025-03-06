import { Colors } from '@/shared/tokens';
import { Link, Stack } from 'expo-router';
import { Text, View } from 'react-native';

export default function Restore() {
  return (
    <View>
      {/* <Stack.Screen options={{ title: 'Восстановить пароль' }} /> */}
      <Link href={'/'}>
        <Text style={{ color: Colors.white }}>Restore</Text>
      </Link>
    </View>
  );
}
