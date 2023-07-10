import { axiosClassic } from 'api/interceptors'

import {
  IMovie,
  IMovieList,
  IMovieReviewList,
  IMovieShort,
  IMovieQuery,
} from '@/shared/types/movie.types'
import { IPagination } from '@/shared/types/pagination.types'

import { API_URL, getMovieUrl } from '@/configs/api.config'

export const MovieService = {
  async getById(id: number) {
    return axiosClassic.get<IMovie>(`${API_URL}${getMovieUrl(`/${id}`)}`)
  },

  async getHotMovies() {
    return axiosClassic.get<IMovieShort[]>(`${API_URL}${getMovieUrl('/hot')}`)
  },

  async getNewMovies() {
    return axiosClassic.get<IMovieShort[]>(`${API_URL}${getMovieUrl('/new')}`)
  },

  async getSimilarMovies(id: number) {
    return axiosClassic.get<IMovieShort[]>(
      `${API_URL}${getMovieUrl(`/${id}/similar`)}`,
    )
  },

  async getMovieReviews(id: number, pagination: IPagination) {
    return axiosClassic.get<IMovieReviewList>(
      `${API_URL}${getMovieUrl(
        `/reviews?movieId=${id}&page=${pagination.page}&perPage=${pagination.perPage}`,
      )}`,
    )
  },

  async getAll(query: IMovieQuery) {
    const queryGenre = query.genreId ? `genreId=${query.genreId}&` : ''
    const querySearch = query.searchTerm
      ? `searchTerm=${query.searchTerm}&`
      : ''
    const querySort = query.sort ? `sort=${query.sort}&` : ''

    return axiosClassic.get<IMovieList>(
      `${API_URL}${getMovieUrl(
        `?${queryGenre}${querySearch}${querySort}page=${query.page}&perPage=${query.perPage}`,
      )}`,
    )
  },
}
