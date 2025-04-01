import CloseIcon from '@/assets/icons/close';
import { DrawerNavigationHelpers } from '@react-navigation/drawer/lib/typescript/commonjs/src/types';
import { Pressable, StyleSheet, View } from 'react-native';

export function CloseDrawer(navigation: DrawerNavigationHelpers) {
  return (
    <Pressable onPress={() => navigation.closeDrawer()}>
      <View style={styles.button}>
        <CloseIcon />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 10,
    right: 15,
  },
});
