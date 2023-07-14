import { FC } from 'react'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'
import Meta from '@/utils/meta/Meta'
import Heading from '@/ui/heading/Heading'
import MovieCard from '@/ui/movie-card/MovieCard'

import { getShortDate } from '@/utils/date/convertDate'
import { minutesToHours } from '@/utils/time/convertTime'
import { IMovie, IMovieShort } from '@/shared/types/movie.types'

import styles from './singleMovie.module.scss'

export interface ISingleMovie {
  movie: IMovie
  similarMovies: IMovieShort[]
}

const DynamicRating = dynamic(() => import('@/ui/rating/CustomRating'), {
  ssr: false,
})

const DynamicMovieReviews = dynamic(() => import('./reviews/MovieReviews'), {
  ssr: false,
})

const SingleMovie: FC<ISingleMovie> = ({ movie, similarMovies }) => {
  const convertObject = (data: any) => {
    const companies = data.map((company: { name: any }) => company?.name)

    return companies.join(', ')
  }

  return (
    <Meta title={movie.title} description={movie.overview}>
      <div className={styles.singleMovie}>
        <div className={styles.content}>
          <div className={styles.about}>
            <div className={styles.image}>
              <Image
                src={`https://m.media-amazon.com/images/M${movie.poster_path}`}
                width={300}
                height={450}
                alt={movie.title}
                loading="eager"
              />
            </div>
            <div className={styles.info}>
              <div className={styles.info_heading}>
                <Heading level="h1" text={movie.title} />
                <div className={styles.useful}>
                  <div className={styles.rating}>
                    <span>{movie.vote_average.toPrecision(2)}</span>
                    <DynamicRating
                      initialValue={movie.vote_average}
                      readonly
                      iconSize={20}
                      iconStyle={{ marginLeft: 2, marginRight: 2 }}
                    />
                  </div>
                  <Link
                    className={styles.imdb}
                    href={`https://www.imdb.com/title/${movie.imdb_id}`}
                    target="_blank">
                    IMDB
                  </Link>
                </div>
              </div>

              <table className={styles.info_table}>
                <tbody>
                  <tr className={styles.info_row}>
                    <td className={styles.info_row_name}>Original title:</td>
                    <td>
                      {movie.original_title
                        ? movie.original_title
                        : movie.title}
                    </td>
                  </tr>
                  {movie.tagline && (
                    <tr className={styles.info_row}>
                      <td className={styles.info_row_name}>Tagline:</td>
                      <td>{movie.tagline}</td>
                    </tr>
                  )}
                  {movie.production_companies && (
                    <tr className={styles.info_row}>
                      <td className={styles.info_row_name}>
                        Production companies:
                      </td>
                      <td>{convertObject(movie.production_companies)}</td>
                    </tr>
                  )}
                  {movie.production_countries && (
                    <tr className={styles.info_row}>
                      <td className={styles.info_row_name}>
                        Production countries:
                      </td>
                      <td>{convertObject(movie.production_countries)}</td>
                    </tr>
                  )}
                  <tr className={styles.info_row}>
                    <td className={styles.info_row_name}>Runtime:</td>
                    <td>{minutesToHours(movie.runtime)}</td>
                  </tr>
                  <tr className={styles.info_row}>
                    <td className={styles.info_row_name}>Status:</td>
                    <td>{movie.status}</td>
                  </tr>
                  <tr className={styles.info_row}>
                    <td className={styles.info_row_name}>Release date:</td>
                    <td>{getShortDate(movie.release_date)}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className={styles.overview}>
            <Heading level="h2" text="Overview" />
            <p>{movie.overview}</p>
          </div>
          <div className={styles.reviews}>
            <Heading level="h2" text="Reviews" />
            <div>
              <DynamicMovieReviews movieId={movie.id} />
            </div>
          </div>
        </div>
        <div className={styles.similar}>
          <Heading level="h3" text="More like this" />
          <div className={styles.similar_list}>
            {similarMovies.map((movie) => (
              <MovieCard key={movie.id} orient="horizontal" movie={movie} />
            ))}
          </div>
        </div>
      </div>
    </Meta>
  )
}

export default SingleMovie
