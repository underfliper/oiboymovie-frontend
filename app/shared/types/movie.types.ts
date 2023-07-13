import { IGenre } from './genre.types'
import { IPagination } from './pagination.types'
import { IUserShort } from './user.types'

export interface IMovie {
  id: number
  adult: boolean
  imdb_id?: string
  original_language: string
  original_title?: string
  overview: string
  popularity: number
  poster_path: string
  production_companies?: JSON
  production_countries?: JSON
  release_date: string
  runtime: number
  spoken_languages: JSON
  status: string
  tagline?: string
  title: string
  vote_average: number
  vote_count: number
  genres: Pick<IGenre, 'id' | 'name'>[]
}

export interface IMovieShort
  extends Pick<
    IMovie,
    | 'id'
    | 'poster_path'
    | 'release_date'
    | 'runtime'
    | 'title'
    | 'vote_average'
    | 'overview'
  > {}

export interface IMovieReview {
  rating: number
  text?: string
  publishDate: Date
  user: IUserShort
}

export interface IMovieReviewList {
  reviews: IMovieReview[]
  length: number
}

export enum MovieSort {
  HIGH_RATING = 'high-rating',
  LOW_RATING = 'low-rating',
  HIGH_POPULARITY = 'high-popularity',
  LOW_POPULARITY = 'low-popularity',
}

export interface IMovieQuery extends IPagination {
  genreId?: number
  sort?: MovieSort
  searchTerm?: string
}

export interface IMovieList {
  movies: IMovieShort[]
  length: number
}
