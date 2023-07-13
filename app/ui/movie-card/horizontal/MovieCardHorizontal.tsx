import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import cn from 'classnames'

import { getShortDate } from '@/utils/date/convertDate'
import { IMovieShort } from '@/shared/types/movie.types'

import styles from '../movieCard.module.scss'

const MovieCardHorizontal: FC<{ movie: IMovieShort }> = ({ movie }) => {
  return (
    <Link
      href={`/movies/${movie.id}`}
      className={cn(styles.movieCard, styles.horizontal)}>
      <div className={styles.image}>
        <Image
          src={`https://m.media-amazon.com/images/M${movie.poster_path}`}
          width={70}
          height={105}
          alt={movie.title}
        />
      </div>
      <div className={styles.content}>
        <div className={styles.heading}>
          <span className={styles.title}>{movie.title}</span>
          <span className={styles.release_date}>
            {getShortDate(movie.release_date)}
          </span>
        </div>
        <div className={styles.rating}>
          <i className="icon-filled-star" />
          {movie.vote_average.toPrecision(2)}
        </div>
      </div>
    </Link>
  )
}

export default MovieCardHorizontal
