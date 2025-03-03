import {
  Pressable,
  PressableProps,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Colors, Fonst, Radius } from '../tokens';

export function Button({ text, ...props }: PressableProps & { text: string }) {
  return (
    <Pressable {...props}>
      <View style={styles.button}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 58,
    borderRadius: Radius.r10,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    width: 52,
    height: 22,
    fontFamily: 'Fira Sans',
    fontSize: Fonst.f18,
    fontWeight: '400',
    fontStyle: 'normal',
    textAlign: 'center',
    color: Colors.white,
  },
});
