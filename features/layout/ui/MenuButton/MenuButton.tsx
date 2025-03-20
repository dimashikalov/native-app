import MenuIcon from '@/assets/icons/menu';
import { Colors } from '@/shared/tokens';
import { useState } from 'react';
import { Pressable, PressableProps, StyleSheet, View } from 'react-native';

export function MenuButton({
  navigation,
  ...props
}: PressableProps & { navigation: any }) {
  const [clicked, setClicked] = useState<boolean>(false);
  return (
    <Pressable
      {...props}
      onPressIn={() => setClicked(true)}
      onPressOut={() => setClicked(false)}
      onPress={() => navigation.toggleDrawer()}
    >
      <View
        style={{
          ...styles.button,
          backgroundColor: clicked ? Colors.violetDark : Colors.blackLight,
        }}
      >
        <MenuIcon />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 25,
    flex: 1,
  },
});
