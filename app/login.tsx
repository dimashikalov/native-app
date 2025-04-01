import { loginAtom } from '@/entities/auth/model/auth.state';
import { Button } from '@/shared/Button/Button';
import { ErrorNotification } from '@/shared/ErrorNotification/ErrorNotification';
import { useScreenOrientation } from '@/shared/hooks';
import { Input } from '@/shared/Input/Input';
import { CustomLink } from '@/shared/Link/CustomLink';
import { Colors, Gaps } from '@/shared/tokens';
import { router } from 'expo-router';
import { Orientation } from 'expo-screen-orientation';
import { useAtom } from 'jotai';
import { useEffect, useState } from 'react';
import {
  Dimensions,
  Image,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  View,
} from 'react-native';

export default function HomeScreen() {
  const [localError, setLocalError] = useState<string | undefined>();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const [{ access_token, isLoading, error }, login] = useAtom(loginAtom);
  const orientation = useScreenOrientation();

  const alert = () => {
    setLocalError('OOOO, error!');
    setTimeout(() => {
      setLocalError(undefined);
    }, 4000);
  };

  useEffect(() => {
    if (error) {
      setLocalError(error);
    }
  }, [error]);

  useEffect(() => {
    if (access_token) {
      router.replace('/');
    }
  }, [access_token]);

  const onSubmitForm = async () => {
    if (!email) {
      setLocalError('Не введен email');
      return;
    }
    if (!password) {
      setLocalError('Не введен пароль');
      return;
    }
    login({ email, password });
  };

  return (
    <View style={styles.container}>
      <ErrorNotification error={localError} />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.content}
      >
        <View style={styles.title}>
          <Image
            style={styles.title_image}
            source={require('./../assets/images/logo.png')}
            resizeMode="contain"
          />
        </View>

        <View style={styles.form}>
          <View
            style={{
              ...styles.inputs,
              flexDirection:
                orientation === Orientation.PORTRAIT_UP ? 'column' : 'row',
            }}
          >
            <Input
              style={{
                width:
                  orientation === Orientation.PORTRAIT_UP
                    ? 'auto'
                    : Dimensions.get('window').width / 2 - 16 - 48,
              }}
              placeholder="Email"
              onChangeText={setEmail}
            />
            <Input
              style={{
                width:
                  orientation === Orientation.PORTRAIT_UP
                    ? 'auto'
                    : Dimensions.get('window').width / 2 - 16 - 48,
              }}
              placeholder="Пароль"
              isPassword
              onChangeText={setPassword}
            />
          </View>

          <Button text="Войти" onPress={onSubmitForm} isLoading={isLoading} />
        </View>

        <CustomLink href={'/restore'} text="Восстановить пароль" />
      </KeyboardAvoidingView>
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
  form: {
    alignSelf: 'stretch',
    gap: Gaps.g16,
  },
  inputs: {
    gap: Gaps.g16,
  },

  title: {
    flexDirection: 'row',
    height: 28,
  },

  title_text: {
    color: 'white',
    fontSize: 20,
  },
  title_image: {
    width: Platform.select({ ios: 220, android: 250 }),
  },

  button: {
    height: 58,
    borderRadius: 10,
    backgroundColor: '#6C38CC',
  },

  link_text: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
  },
});
