import { profileAtom } from '@/entities/user/model/user.state';
import { useAtom } from 'jotai';
import { Text, View } from 'react-native';

export default function MyCourses() {
  const [profile] = useAtom(profileAtom);
  return (
    <View>
      <Text>{profile.profile?.name}</Text>
    </View>
  );
}
