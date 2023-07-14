import { FC } from 'react'
import MovieCard from '../movie-card/MovieCard'

import { IMovieShort } from '@/shared/types/movie.types'

import styles from './catalog.module.scss'

const Catalog: FC<{ movies: IMovieShort[] }> = ({ movies }) => {
  return (
    <div className={styles.catalog}>
      {movies.map((movie) => (
        <div key={movie.id} className={styles.item}>
          <MovieCard orient="vertical" movie={movie} />
        </div>
      ))}
    </div>
  )
}

export default Catalog
