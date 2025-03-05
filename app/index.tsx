import { Button } from '@/shared/Button/Button';
import { ErrorNotification } from '@/shared/ErrorNotification/ErrorNotification';
import { Input } from '@/shared/Input/Input';
import { Colors, Gaps } from '@/shared/tokens';
import { useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  const [error, setError] = useState<string | undefined>();

  const alert = () => {
    setError('OOOO, error!');
    setTimeout(() => {
      setError(undefined);
    }, 4000);
  };

  return (
    <View style={styles.container}>
      <ErrorNotification error={error} />
      <View style={styles.content}>
        <View style={styles.title}>
          <Image
            style={styles.title_image}
            source={require('./../assets/images/logo.png')}
            resizeMode="contain"
          />
        </View>

        <View style={styles.form}>
          <Input placeholder="Email" />

          <Input placeholder="Пароль" isPassword />

          <Button text="Войти" onPress={alert} />
        </View>

        <Text style={styles.link_text}>Восстановить пароль</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
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

  title: {
    flexDirection: 'row',
    height: 28,
    // gap: 10,
    // alignSelf: 'center',
  },

  title_text: {
    color: 'white',
    fontSize: 20,
  },
  title_image: {
    // height: 25,
    width: 220,
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
