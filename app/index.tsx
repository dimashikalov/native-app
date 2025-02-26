import { Button, StatusBar, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Ура! Я снес шаблон!</Text>
      <View style={styles.top}>
        <Text>Ура! Я снес шаблон!</Text>
        <Button title="Кнопка" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  top: {
    flexDirection: 'row-reverse',
  },
});
