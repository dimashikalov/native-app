import { StyleSheet, TextInput, TextInputProps } from 'react-native';
import { Colors, Radius } from '../tokens';

export function Input(props: TextInputProps) {
  return (
    <TextInput
      style={styles.input}
      {...props}
      placeholderTextColor={Colors.gray}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    height: 58,
    borderRadius: Radius.r10,
    backgroundColor: Colors.violetDark,
    paddingHorizontal: 24,
    shadowColor: 'rgba(0, 0, 0, 0.04)',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 32,
    shadowOpacity: 1,

    fontFamily: 'Fira Sans',
    fontSize: 16,
    fontWeight: '400',
    fontStyle: 'normal',
    // lineHeight: 1.2,
    // color: '#AFB2BF',
  },
});
