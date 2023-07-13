import { FC } from 'react'
import Link from 'next/link'
import Heading from '@/ui/heading/Heading'
import { IMovieShort } from '@/shared/types/movie.types'

import styles from './slider.module.scss'

const SliderItem: FC<{ movie: IMovieShort }> = ({ movie }) => {
  return (
    <div
      className={styles.slide}
      style={{
        backgroundImage: `url(https://m.media-amazon.com/images/M${movie.poster_path})`,
      }}>
      <Heading level="h1" text={movie.title} />
      <p className={styles.description}>{movie.overview}</p>
      <div className={styles.controls}>
        <Link className={styles.link} href={`/movies/${movie.id}`}>
          More info
        </Link>
      </div>
    </div>
  )
}

export default SliderItem
