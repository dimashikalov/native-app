import { Link, LinkProps } from 'expo-router';
import { StyleSheet, Text } from 'react-native';
import { Colors, Fonst } from '../tokens';

export function CustomLink({ text, ...props }: LinkProps & { text: string }) {
  return (
    <Link {...props} style={styles.link}>
      <Text>{text}</Text>
    </Link>
  );
}

const styles = StyleSheet.create({
  link: {
    fontSize: Fonst.f18,
    color: Colors.link,
    fontFamily: Fonst.regular,
  },
});
