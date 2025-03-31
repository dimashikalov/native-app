import { Image, StyleSheet } from 'react-native';
import React from 'react';
import { User } from '../../model/user.model';

export function Avatar({ image }: { image: string | null }) {
  return (
    <>
      {image ? (
        <Image
          style={styles.image}
          source={{ uri: image }}
          resizeMode="contain"
        />
      ) : (
        <Image
          style={styles.image}
          source={require('../../../../assets/images/avatar.png')}
          resizeMode="contain"
        />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
});
