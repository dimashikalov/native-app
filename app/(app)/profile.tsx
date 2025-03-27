import { Image, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import ImageUploader from '@/shared/ImageUploader/ImageUploader';
import { Gaps } from '@/shared/tokens';

export default function Profile() {
  const [image, setImage] = useState<string | null>(null);

  return (
    <View style={styles.container}>
      {image ? (
        <Image
          style={styles.image}
          source={{
            uri: image,
            width: 100,
            height: 100,
          }}
        />
      ) : (
        <Image
          style={styles.image}
          source={require('../../assets/images/avatar.png')}
          resizeMode="contain"
        />
      )}

      <ImageUploader onUpload={setImage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: Gaps.g20,
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
});
