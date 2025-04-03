import { atom } from 'jotai';
import { authAtom } from '@/entities/auth/model/auth.state';
import axios, { AxiosError } from 'axios';
import { API } from '../api/api';
import { StudentCourseDescription } from './course.model';

//описываем начальное состояние
export const courseAtom = atom<CourseState>({
  courses: [],
  isLoading: false,
  error: null,
});

export const loadCourseAtom = atom(
  async (get) => {
    return get(courseAtom);
  },
  async (get, set) => {
    try {
      const { access_token } = await get(authAtom);
      set(courseAtom, {
        isLoading: true,
        courses: [],
        error: null,
      });
      const { data } = await axios.get<ICourseResponse>(API.my, {
        params: {
          studentCourse: 'my',
        },
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });

      set(courseAtom, {
        isLoading: false,
        courses: data.my,
        error: null,
      });
    } catch (error) {
      if (error instanceof AxiosError) {
        set(courseAtom, {
          isLoading: false,
          error: error.response?.data.message,
          courses: [],
        });
      }
    }
  }
);

//интерфейс стейта для Юзера
export interface CourseState {
  courses: StudentCourseDescription[];
  isLoading: boolean;
  error: string | null;
}

//interface для получения массива из объекта ответа
interface ICourseResponse {
  my: StudentCourseDescription[];
}
