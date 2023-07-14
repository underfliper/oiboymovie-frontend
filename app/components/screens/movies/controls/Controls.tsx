import { FC, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { OnChangeValue } from 'react-select'
import CustomSelect, { IOption } from '@/ui/select/CustomSelect'

import { GenreService } from '@/services/genre/genre.service'
import { MovieSort } from '@/shared/types/movie.types'
import { IQueryMovies } from '../../../../../pages/movies'

import styles from './controls.module.scss'
import { IGenre } from '@/shared/types/genre.types'

const Controls: FC<{ query: IQueryMovies; genres: IGenre[] }> = ({
  query,
  genres,
}) => {
  const router = useRouter()

  const genreOptions =
    genres &&
    genres.map((genre) => {
      return { value: genre.id.toString(), label: genre.name }
    })
  const sortOptions = [
    { value: MovieSort.HIGH_RATING, label: 'High Rating' },
    { value: MovieSort.LOW_RATING, label: 'Low Rating' },
    { value: MovieSort.HIGH_POPULARITY, label: 'High Popularity' },
    { value: MovieSort.LOW_POPULARITY, label: 'Low Popularity' },
  ]

  const handleGenreChange = (newValue: OnChangeValue<IOption, false>) => {
    const queryGenre = newValue?.value ? `genreId=${newValue.value}&` : ''
    const querySearch = query.searchTerm
      ? `searchTerm=${query.searchTerm}&`
      : ''
    const querySort = query.sort ? `sort=${query.sort}&` : ''

    router.push(
      `/movies?${queryGenre}${querySearch}${querySort}page=${query.page}&perPage=${query.perPage}`,
    )
  }

  const handleSortChange = (newValue: OnChangeValue<IOption, false>) => {
    const queryGenre = query.genreId ? `genreId=${query.genreId}&` : ''
    const querySearch = query.searchTerm
      ? `searchTerm=${query.searchTerm}&`
      : ''
    const querySort = newValue?.value ? `sort=${newValue.value}&` : ''

    router.push(
      `/movies?${queryGenre}${querySearch}${querySort}page=${query.page}&perPage=${query.perPage}`,
    )
  }

  return (
    <div className={styles.controls}>
      <div className={styles.genres}>
        <CustomSelect
          options={genreOptions!}
          defaultValue={
            query!.genreId
              ? genreOptions?.find(({ value }) => value === query!.genreId)
              : undefined
          }
          placeholder="Select genre"
          isClearable
          onChange={handleGenreChange}
        />
      </div>
      <div className={styles.sort}>
        <CustomSelect
          options={sortOptions}
          defaultValue={
            query!.sort
              ? sortOptions?.find(({ value }) => value === query!.sort)
              : undefined
          }
          placeholder="Select sort option"
          isClearable
          onChange={handleSortChange}
        />
      </div>
    </div>
  )
}

export default Controls
