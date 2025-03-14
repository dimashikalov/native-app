import { logoutAtom } from '@/entities/auth/model/auth.state';
import { Button } from '@/shared/Button/Button';
import { Gaps } from '@/shared/tokens';
import { useSetAtom } from 'jotai';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function MyCourses() {
  const logout = useSetAtom(logoutAtom);

  return (
    <View style={styles.container}>
      <Text>Index</Text>
      <Button text="Выход" onPress={logout} />
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
