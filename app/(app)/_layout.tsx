import { authAtom } from '@/entities/auth/model/auth.state';
import { Redirect, Stack } from 'expo-router';
import { useAtomValue } from 'jotai';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { Colors, Fonst } from '@/shared/tokens';

export default function AppLayout() {
  const { access_token } = useAtomValue(authAtom);
  if (!access_token) {
    //программно перенаправляем на нужную страницу
    return <Redirect href="/login" />;
  }
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={(navigation) => ({
          headerStyle: {
            backgroundColor: Colors.blackLight,
          },

          // headerLeft: () => {},
          headerTitleStyle: {
            alignContent: 'flex-start',
            color: Colors.white,
            fontFamily: Fonst.regular,
            fontSize: Fonst.f20,
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
      </Drawer>
    </GestureHandlerRootView>
  );
}
