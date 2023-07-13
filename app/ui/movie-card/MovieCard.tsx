import { FC } from 'react'
import MovieCardVertical from './vertical/MovieCardVertical'
import MovieCardHorizontal from './horizontal/MovieCardHorizontal'

import { IMovieShort } from '@/shared/types/movie.types'

interface IMovieCard {
  movie: IMovieShort
  orient?: 'vertical' | 'horizontal'
}

const MovieCard: FC<IMovieCard> = ({ movie, orient = 'vertical' }) => {
  if (orient === 'vertical') return <MovieCardVertical movie={movie} />

  if (orient === 'horizontal') return <MovieCardHorizontal movie={movie} />
}

export default MovieCard
