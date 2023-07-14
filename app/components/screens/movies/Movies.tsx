import Heading from '@/ui/heading/Heading'
import React, { FC } from 'react'
import { IMoviesPage } from '../../../../pages/movies'
import Catalog from '@/ui/catalog/Catalog'

import styles from './movies.module.scss'
import Pagination from '@/ui/pagination/Pagination'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import { useQuery } from '@tanstack/react-query'
import { GenreService } from '@/services/genre/genre.service'
import Meta from '@/utils/meta/Meta'

const DynamicControls = dynamic(() => import('./controls/Controls'), {
  ssr: false,
})

const Movies: FC<IMoviesPage> = ({
  query,
  data: { movies, length },
  genres,
}) => {
  const router = useRouter()

  const handlePageChange = (selectedItem: { selected: number }) => {
    const queryGenre = query.genreId ? `genreId=${query.genreId}&` : ''
    const querySearch = query.searchTerm
      ? `searchTerm=${query.searchTerm}&`
      : ''
    const querySort = query.sort ? `sort=${query.sort}&` : ''

    router.push(
      `/movies?${queryGenre}${querySearch}${querySort}page=${
        selectedItem.selected + 1
      }&perPage=${query.perPage}`,
    )
  }

  return (
    <Meta
      title="Movies"
      description="Movie search, user reviews, photos, posters and more.">
      <div className={styles.movies}>
        <Heading level="h1" text="Movies" />
        <DynamicControls query={query} genres={genres} />
        <Catalog movies={movies} />
        <div className={styles.pagination}>
          <Pagination
            currPage={query.page! - 1}
            pageCount={Math.ceil(length / query.perPage!)}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </Meta>
  )
}

export default Movies
