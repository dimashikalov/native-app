import { Input } from '@/shared/Input/Input';
import { Link } from 'expo-router';
import {
  Button,
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

export default function HomeScreen() {
  const width = Dimensions.get('window').width;
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.title}>
          <Image
            style={styles.title_image}
            source={require('./../assets/images/logo.png')}
            resizeMode="contain"
          />
          {/* <Image
            style={styles.title_image}
            source={require('./../assets/images/school_logo.png')}
            resizeMode="center"
          />
          <Text style={styles.title_text}>PurpleSchool</Text> */}
        </View>

        <View style={styles.form}>
          <Input placeholder="Email" inputMode="email" />

          <Input placeholder="Пароль" inputMode="text" />

          <Button title="Войти" color={'#6C38CC'} />
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
    backgroundColor: 'black',
    padding: 55,
  },

  content: {
    alignItems: 'center',
    gap: 50,
  },
  form: {
    alignSelf: 'stretch',
    gap: 16,
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
