import React, { FC, useEffect, useRef, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { MovieService } from '@/services/movie/movie.service'

import Pagination from '@/ui/pagination/Pagination'
import MovieReview from './MovieReview'

import styles from './movieReviews.module.scss'

interface IMovieReviewList {
  movieId: number
}

const MovieReviewList: FC<IMovieReviewList> = ({ movieId }) => {
  const reviews = useRef<null | HTMLDivElement>(null)
  const [page, setPage] = useState(1)
  const { data } = useQuery(
    ['movie reviews', page],
    async () => MovieService.getMovieReviews(movieId, { page, perPage: 10 }),
    {
      select: ({ data }) => data,
    },
  )

  const handlePageClick = (selectedItem: { selected: number }) => {
    setPage(selectedItem.selected + 1)
  }

  useEffect(() => {
    if (reviews && reviews.current && page !== 1) {
      reviews.current.scrollIntoView()
    }
  }, [data])

  return (
    <div ref={reviews} className={styles.movieReviews}>
      {data && (
        <>
          <div className={styles.list}>
            {data.reviews.map((item, index) => (
              <MovieReview key={index} review={item} />
            ))}
          </div>
          <Pagination
            currPage={page - 1}
            pageCount={data?.length ? Math.ceil(data?.length / 10) : 0}
            onPageChange={handlePageClick}
          />
        </>
      )}
    </div>
  )
}

export default MovieReviewList
