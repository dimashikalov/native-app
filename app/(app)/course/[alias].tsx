import { Colors } from '@/shared/tokens';
import { useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';

export default function CoursePage() {
  const { alias } = useLocalSearchParams();
  console.log('alias ', alias);
  return (
    <View>
      <Text style={{ color: Colors.white }}>{alias}</Text>
    </View>
  );
}
