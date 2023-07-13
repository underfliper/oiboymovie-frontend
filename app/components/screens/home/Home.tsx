import { FC } from 'react'
import { IMovieShort } from '@/shared/types/movie.types'

import Meta from '@/utils/meta/Meta'
import MovieGalery from '@/components/screens/home/movie-gallery/MovieGallery'
import HeroSlider from './hero-slider/HeroSlider'

import styles from './home.module.scss'

export interface IHome {
  recentMovies: IMovieShort[]
  hotMovies: IMovieShort[]
  newMovies: IMovieShort[]
}

const Home: FC<IHome> = ({ recentMovies, hotMovies, newMovies }) => {
  return (
    <Meta
      title="Movies online catalog"
      description="Movie search, user reviews, photos, posters and more.">
      <div className={styles.home}>
        <HeroSlider items={recentMovies} />
        <MovieGalery
          items={hotMovies}
          title={{ text: 'Hot Movies', icon: <i className="icon-fire" /> }}
          link="/hot-movies"
        />
        <MovieGalery
          items={newMovies}
          title={{ text: 'New Movies', icon: <i className="icon-film" /> }}
          link="/new-movies"
        />
      </div>
    </Meta>
  )
}

export default Home
