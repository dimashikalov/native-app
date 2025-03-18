import { CloseDrawer } from '@/features/layout/ui/CloseDrawer/CloseDrawer';
import { CustomLink } from '@/shared/Link/CustomLink';
import { Colors } from '@/shared/tokens';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import { useAtom, useSetAtom } from 'jotai';
import { Image, StyleSheet, Text, View } from 'react-native';
import { logoutAtom } from '../../../auth/model/auth.state';
import { loadProfileAtom } from '@/entities/user/model/user.state';
import { useEffect } from 'react';

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
        <Text style={{ color: 'white' }}>{profile.profile?.name}</Text>
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
});
