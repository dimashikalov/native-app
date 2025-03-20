import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { User } from '../../model/user.model';
import { Colors, Fonts, Gaps } from '@/shared/tokens';

export function UserMenu({ user }: { user: User | null }) {
  if (!user) {
    return;
  }

  return (
    <View style={styles.container}>
      {user.photo ? (
        <Image
          style={styles.image}
          source={{ uri: user.photo }}
          resizeMode="contain"
        />
      ) : (
        <Image
          style={styles.image}
          source={require('../../../../assets/images/avatar.png')}
          resizeMode="contain"
        />
      )}

      <Text style={styles.text}>
        {user.name} {user.surname}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    gap: Gaps.g8,
    marginTop: 30,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  text: {
    color: Colors.white,
    fontFamily: Fonts.regular,
    fontSize: Fonts.f16,
  },
});
