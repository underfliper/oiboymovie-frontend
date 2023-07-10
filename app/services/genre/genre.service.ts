import { axiosClassic } from 'api/interceptors'

import { IGenre } from '@/shared/types/genre.types'

import { API_URL, getGenreUrl } from '@/configs/api.config'

export const GenreService = {
  async getAll(): Promise<IGenre[]> {
    const response = await axiosClassic.get<IGenre[]>(
      `${API_URL}${getGenreUrl('')}`,
    )

    return response.data
  },
}
