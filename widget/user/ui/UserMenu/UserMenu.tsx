import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Colors, Fonts, Gaps } from '@/shared/tokens';
import { User } from '@/entities/user/model/user.model';
import { Avatar } from '@/entities/user/ui/Avatar/Avatar';

export function UserMenu({ user }: { user: User | null }) {
  if (!user) {
    return;
  }

  return (
    <View style={styles.container}>
      <Avatar image={user.photo ?? null} />

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

  text: {
    color: Colors.white,
    fontFamily: Fonts.regular,
    fontSize: Fonts.f16,
  },
});
