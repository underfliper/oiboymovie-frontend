import { FC, ReactNode } from 'react'
import Link from 'next/link'
import Heading from '@/ui/heading/Heading'
import MovieCard from '@/ui/movie-card/MovieCard'

import { IMovieShort } from '@/shared/types/movie.types'

import styles from './movieGallery.module.scss'

interface IMovieGallery {
  items: IMovieShort[]
  title: IMovieGalleryTitle
  link: string
}

interface IMovieGalleryTitle {
  text: string
  icon?: ReactNode
}

const MovieGalery: FC<IMovieGallery> = ({ items, title, link }) => {
  return (
    <div className={styles.movieGallery}>
      <div className={styles.heading}>
        <Heading level="h2" {...title} />
        <div>
          <Link className={styles.view_all} href={link}>
            View All
          </Link>
        </div>
      </div>
      <div className={styles.items}>
        {items.map((item) => (
          <MovieCard key={item.id} movie={item} />
        ))}
      </div>
    </div>
  )
}

export default MovieGalery
