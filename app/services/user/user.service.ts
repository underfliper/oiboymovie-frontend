import axiosInstance from 'api/interceptors'

import {
  IEditUser,
  IUser,
  IUserAddReview,
  IUserAddReviewResponse,
  IUserReviewList,
} from '@/shared/types/user.types'
import { IPagination } from '@/shared/types/pagination.types'
import { IMovieShort } from '@/shared/types/movie.types'

import { API_URL, getUserUrl } from '@/configs/api.config'

export const UserService = {
  async getProfile() {
    return axiosInstance.get<IUser>(`${API_URL}${getUserUrl}/profile`)
  },

  async updateProfile(data: IEditUser) {
    return axiosInstance.patch<IUser>(`${API_URL}${getUserUrl}/profile`, data)
  },

  async getUserReviewedMovies(pagination: IPagination) {
    return axiosInstance.get<IUserReviewList>(
      `${API_URL}${getUserUrl('/reviews')}?page=${pagination.page}&perPage=${
        pagination.perPage
      }`,
    )
  },

  async addReview(data: IUserAddReview) {
    return axiosInstance.post<IUserAddReviewResponse>(
      `${API_URL}${getUserUrl('/add-review')}`,
      data,
    )
  },

  async getRecommendedMovies() {
    return axiosInstance.get<IMovieShort[]>(
      `${API_URL}${getUserUrl('/recommended-movies')}`,
    )
  },
}
