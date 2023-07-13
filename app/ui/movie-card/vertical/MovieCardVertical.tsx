import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import cn from 'classnames'

import { IMovieShort } from '@/shared/types/movie.types'

import styles from '../movieCard.module.scss'

const MovieCardVertical: FC<{ movie: IMovieShort }> = ({ movie }) => {
  return (
    <Link
      href={`/movies/${movie.id}`}
      className={cn(styles.movieCard, styles.vertical)}>
      <span className={styles.rating}>{movie.vote_average.toFixed(1)}</span>
      <Image
        src={`https://m.media-amazon.com/images/M${movie.poster_path}`}
        width={240}
        height={360}
        alt={movie.title}
      />
      <div className={styles.title}>{movie.title}</div>
    </Link>
  )
}

export default MovieCardVertical
