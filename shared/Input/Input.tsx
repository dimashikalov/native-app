import { StyleSheet, TextInput, TextInputProps } from 'react-native';

export function Input(props: TextInputProps) {
  return (
    <TextInput
      style={styles.input}
      {...props}
      placeholderTextColor={'#AFB2BF'}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    height: 58,
    borderRadius: 10,
    backgroundColor: '#2E2D3D',
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
    color: '#AFB2BF',
  },
});
