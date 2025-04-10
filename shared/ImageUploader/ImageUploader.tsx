import { Alert, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {
  launchCameraAsync,
  launchImageLibraryAsync,
  PermissionStatus,
  requestCameraPermissionsAsync,
  useCameraPermissions,
  useMediaLibraryPermissions,
} from 'expo-image-picker';
import ImageUploaderIcon from '@/assets/icons/uploader-icon';
import { Colors, Fonts, Gaps, Radius } from '../tokens';
import FormData from 'form-data';
import axios, { AxiosError } from 'axios';
import { FILE_API } from '../api';
import { UploaderResponse } from './ImageUploader.interface';

interface ImageUploaderProps {
  onUpload: (uri: string) => void;
  onError: (error: string) => void;
}

export default function ImageUploader({
  onUpload,
  onError,
}: ImageUploaderProps) {
  // const [libraryPermissions, requestLibraryPermission] = useCameraPermissions();
  const [libraryPermissions, requestLibraryPermission] =
    useMediaLibraryPermissions();

  const upload = async () => {
    const isPermissionGranted = await verifyMediaPermissions();
    if (!isPermissionGranted) {
      onError('Недостаточно прав');
      return;
    }

    const asset = await pickImage();

    if (!asset) {
      onError('Не выбрано изображение');
      return;
    }

    const uploadedUrl = await uploadToServer(asset.uri, asset.fileName ?? '');
    if (!uploadedUrl) {
      onError('Не удалось загрузить изображение');
      return;
    }
    onUpload(uploadedUrl);
  };

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
    // const result = await launchCameraAsync({
    const result = await launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.5,
    });

    if (!result.assets) {
      return null;
    }

    return result.assets[0];
  };

  const uploadToServer = async (uri: string, name: string) => {
    const formData = new FormData();
    formData.append('files', {
      // formData.append('lms.stage', {
      uri,
      name,
      type: 'image/jpeg',
    });

    try {
      const { data } = await axios.post<UploaderResponse>(
        FILE_API.uploadImage,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/fom-data',
          },
        }
      );

      return data.urls.original;
    } catch (error) {
      if (error instanceof AxiosError) {
        console.error('error ,', error);
      }

      return null;
    }
  };
  return (
    <Pressable onPress={upload}>
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
