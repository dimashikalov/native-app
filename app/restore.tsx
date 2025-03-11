import { CustomLink } from '@/shared/Link/CustomLink';
import { Colors } from '@/shared/tokens';
import { Link, Stack } from 'expo-router';
import { Text, View } from 'react-native';

export default function Restore() {
  return (
    <View>
      <CustomLink href="/" text="Restore" />
    </View>
  );
}
