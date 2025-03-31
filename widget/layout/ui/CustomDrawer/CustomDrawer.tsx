import { CloseDrawer } from '@/features/layout/ui/CloseDrawer/CloseDrawer';
import { CustomLink } from '@/shared/Link/CustomLink';
import { Colors } from '@/shared/tokens';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import { useAtom, useSetAtom } from 'jotai';
import { Image, StyleSheet, Text, View } from 'react-native';
import { logoutAtom } from '../../../../entities/auth/model/auth.state';
import { loadProfileAtom } from '@/entities/user/model/user.state';
import { useEffect } from 'react';

import MenuItem from '../../../../entities/layout/ui/MenuItem/MenuItem';
import ProfileIcon from '@/assets/icons/profile-icon';
import CourseIcon from '@/assets/icons/course-icon';
import { UserMenu } from '@/widget/user/ui/UserMenu/UserMenu';

const MENU = [
  { text: 'Профиль', icon: <ProfileIcon />, path: 'profile' },
  { text: 'Курсы', icon: <CourseIcon />, path: 'index' },
];

export function CustomDrawer(props: DrawerContentComponentProps) {
  const logout = useSetAtom(logoutAtom);
  const [profile, loadProfile] = useAtom(loadProfileAtom);

  useEffect(() => {
    loadProfile();
  }, []);

  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={styles.scrollView}
    >
      <View style={styles.content}>
        <CloseDrawer {...props.navigation} />
        <UserMenu user={profile.profile} />
        <View style={styles.menu}>
          {MENU.map((menu) => (
            <MenuItem key={menu.path} {...menu} drawer={props} />
          ))}
        </View>
      </View>

      <View style={styles.footer}>
        <CustomLink text="Выход" onPress={logout} href={'/login'} />
        <Image
          style={styles.logo}
          source={require('../../../../assets/images/logo.png')}
          resizeMode="contain"
        />
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: Colors.blackLight,
  },
  content: {
    flex: 1,
  },
  footer: {
    gap: 50,
    marginBottom: 40,
    alignItems: 'center',
  },
  logo: {
    width: 160,
  },
  menu: {
    marginTop: 40,
  },
});
