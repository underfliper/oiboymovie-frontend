import { IMovieShort } from './movie.types'

export enum Gender {
  FEMALE,
  MALE,
}

export interface IUser {
  id: number
  email: string
  firstName: string
  lastName: string
  phone?: string
  gender?: Gender
  birthdate?: Date
  country?: string
  createdAt: Date
  updatedAt: Date
}

export interface IUserState extends Pick<IUser, 'id' | 'email'> {}

export interface IUserInitialState {
  user: IUserState | null
  isLoading: boolean
}

export interface IEditUser {
  email?: string
  firstname?: string
  lastName?: string
  phone?: string
  gender?: Gender
  birthdate?: Date
  country?: string
}

export interface IUserShort extends Pick<IUser, 'firstName' | 'lastName'> {}

export interface IUserReview {
  rating: number
  text?: string
  publishDate: Date
  movie: IMovieShort
}

export interface IUserReviewList {
  reviews: IUserReview[]
  length: number
}

export interface IUserAddReview extends Pick<IUserReview, 'rating' | 'text'> {
  movieId: number
}

export interface IUserAddReviewResponse extends IUserAddReview {
  userId: number
  publishDate: Date
}
