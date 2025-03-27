import { Alert, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {
  launchImageLibraryAsync,
  PermissionStatus,
  requestCameraPermissionsAsync,
  useMediaLibraryPermissions,
} from 'expo-image-picker';
import ImageUploaderIcon from '@/assets/icons/uploader-icon';
import { Colors, Fonts, Gaps, Radius } from '../tokens';

interface ImageUploaderProps {
  onUpload: (uri: string) => void;
}

export default function ImageUploader({ onUpload }: ImageUploaderProps) {
  const [libraryPermissions, requestLibraryPermission] =
    useMediaLibraryPermissions();

  const verifyMediaPermissions = async () => {
    if (libraryPermissions?.status === PermissionStatus.UNDETERMINED) {
      const res = await requestCameraPermissionsAsync();
      return res.granted;
    }

    if (libraryPermissions?.status === PermissionStatus.DENIED) {
      Alert.alert('Недостаточно прав для доступа к фото');
      return false;
    }

    return true;
  };

  const pickImage = async () => {
    const isPermissionGranted = await verifyMediaPermissions();
    if (!isPermissionGranted) {
      return;
    }

    const result = await launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.5,
    });

    console.log(result);
    if (!result.assets) {
      return;
    }

    onUpload(result.assets[0].uri);
  };
  return (
    <Pressable onPress={pickImage}>
      <View style={styles.container}>
        <ImageUploaderIcon />
        <Text style={styles.text}>Загрузить изображение</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: Gaps.g8,
    backgroundColor: Colors.violetDark,
    borderRadius: Radius.r10,
    paddingHorizontal: 20,
    paddingVertical: 17,
    alignItems: 'center',
  },
  text: {
    fontSize: Fonts.f16,
    fontFamily: Fonts.regular,
    color: Colors.white,
  },
});
