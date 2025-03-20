import { atom } from 'jotai';
import { User, UserRequest } from './user.model';
import { authAtom } from '@/entities/auth/model/auth.state';
import axios, { AxiosError } from 'axios';
import { API } from '../api/api';

//описываем начальное состояние
export const profileAtom = atom<UserState>({
  profile: null,
  isLoading: false,
  error: null,
});

export const loadProfileAtom = atom(
  async (get) => {
    return get(profileAtom);
  },
  async (get, set) => {
    const { access_token } = await get(authAtom);
    set(profileAtom, {
      isLoading: true,
      error: null,
      profile: null,
    });
    try {
      const { data } = await axios.get<UserRequest>(API.profile, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });
      set(profileAtom, {
        isLoading: false,
        profile: data.profile,
        error: null,
      });
    } catch (error) {
      if (error instanceof AxiosError) {
        set(profileAtom, {
          isLoading: false,
          profile: null,
          error: error.response?.data.message,
        });
      }
    }
  }
);

//интерфейс стейта для Юзера
export interface UserState {
  profile: User | null;
  isLoading: boolean;
  error: string | null;
}
