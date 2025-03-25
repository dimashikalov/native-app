import { authAtom } from '@/entities/auth/model/auth.state';
import { Redirect } from 'expo-router';
import { useAtomValue } from 'jotai';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { Colors, Fonts } from '@/shared/tokens';
import { MenuButton } from '@/features/layout/ui/MenuButton/MenuButton';
import { DrawerNavigationOptions } from '@react-navigation/drawer';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { CustomDrawer } from '@/widget/layout/ui/CustomDrawer/CustomDrawer';
import { StyleSheet } from 'react-native';

export default function AppLayout() {
  const { access_token } = useAtomValue(authAtom);
  if (!access_token) {
    //программно перенаправляем на нужную страницу
    return <Redirect href="/login" />;
  }
  return (
    <GestureHandlerRootView style={styles.wrapper}>
      <SafeAreaProvider>
        <Drawer
          drawerContent={(props) => <CustomDrawer {...props} />}
          screenOptions={({ navigation }): DrawerNavigationOptions => ({
            headerStyle: {
              backgroundColor: Colors.blackLight,
            },

            headerLeft: () => <MenuButton navigation={navigation} />,

            headerTitleStyle: {
              color: Colors.white,
              fontFamily: Fonts.regular,
              fontSize: Fonts.f20,
            },
            headerTitleAlign: 'center',
            sceneStyle: {
              backgroundColor: Colors.black,
            },
          })}
        >
          <Drawer.Screen
            name="index"
            options={{
              title: 'Мои курсы',
            }}
          />
          <Drawer.Screen
            name="profile"
            options={{
              title: 'Профиль',
            }}
          />
        </Drawer>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});
