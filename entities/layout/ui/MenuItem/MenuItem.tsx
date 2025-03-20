import {
  Pressable,
  PressableProps,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { ReactNode, useState } from 'react';
import {
  DrawerContentComponentProps,
  DrawerNavigationHelpers,
} from '@react-navigation/drawer/lib/typescript/commonjs/src/types';
import { Href } from 'expo-router';
import { Colors, Fonts, Gaps } from '@/shared/tokens';

interface MenuItemProps {
  drawer: DrawerContentComponentProps;
  text: string;
  icon: ReactNode;
  path: string;
}

export default function MenuItem({
  drawer,
  icon,
  text,
  path,
  ...props
}: MenuItemProps & PressableProps) {
  const [clicked, setClicked] = useState<boolean>(false);

  const issActive = drawer.state.routes[drawer.state.index].name === path;
  return (
    <Pressable
      {...props}
      onPress={() => drawer.navigation.navigate(path)}
      onPressIn={() => setClicked(true)}
      onPressOut={() => setClicked(false)}
    >
      <View
        style={{
          ...styles.content,
          borderColor: issActive ? Colors.primary : Colors.black,
          backgroundColor:
            clicked || issActive ? Colors.violetDark : Colors.blackLight,
        }}
      >
        {icon}
        <Text style={styles.text}>{text}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    gap: Gaps.g20,
    alignContent: 'center',
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderRightWidth: 5,
  },
  text: {
    color: Colors.white,
    fontFamily: Fonts.regular,
    fontSize: Fonts.f16,
  },
});
