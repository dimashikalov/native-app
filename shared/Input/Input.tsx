import {
  Pressable,
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
} from 'react-native';
import { Colors, Fonst, Radius } from '../tokens';
import { useState } from 'react';
import EyeOpenedIcon from '@/assets/icons/eye-opened';
import EyeClosedIcon from '@/assets/icons/eye-closed';

export function Input({
  isPassword,
  ...props
}: TextInputProps & { isPassword?: boolean }) {
  const [isPasswordVisible, setIsPassportVisble] = useState<boolean>(false);
  return (
    <View>
      <TextInput
        style={styles.input}
        secureTextEntry={isPassword && !isPasswordVisible}
        {...props}
        placeholderTextColor={Colors.gray}
      />

      {isPassword && (
        <Pressable
          style={styles.eyeIcon}
          onPress={() => setIsPassportVisble((state) => !state)}
        >
          {isPasswordVisible ? <EyeOpenedIcon /> : <EyeClosedIcon />}
        </Pressable>
      )}
    </View>
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
    fontSize: Fonst.f16,
    fontWeight: '400',
    fontStyle: 'normal',
    // lineHeight: 1.2,
    color: Colors.gray,
  },
  eyeIcon: {
    position: 'absolute',
    right: 0,
    paddingHorizontal: 20,
    paddingVertical: 18,
  },
});
