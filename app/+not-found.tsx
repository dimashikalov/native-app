import { View, StyleSheet, Image, Text, Dimensions } from 'react-native';
import { Link, Stack } from 'expo-router';
import { Colors, Fonts, Gaps } from '@/shared/tokens';
import { CustomLink } from '@/shared/Link/CustomLink';

export default function NotFoundScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          source={require('./../assets/images/error-image.png')}
          style={styles.image}
          resizeMode="contain"
        />

        <Text style={styles.text}>
          Ооо... что-то пошло не так. Попробуйте вернуться на главный экран
          приложения
        </Text>

        <CustomLink href="/" text="На главный экран" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
    justifyContent: 'center',
    padding: 55,
  },
  content: {
    alignItems: 'center',
    gap: Gaps.g50,
  },

  text: {
    fontSize: Fonts.f18,
    color: Colors.white,
    textAlign: 'center',
    fontFamily: Fonts.regular,
  },
  image: {
    width: 204,
    height: 282,
  },
});
