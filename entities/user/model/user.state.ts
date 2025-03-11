import { atom } from 'jotai';
import { User } from './user.model';

//описываем начальное состояние
export const profileAtom = atom<UserState>({
  profile: {
    id: 1,
    name: 'Dimas',
  },
  isLoading: false,
  error: null,
});

//интерфейс стейта для Юзера
export interface UserState {
  profile: User | null;
  isLoading: boolean;
  error: string | null;
}
