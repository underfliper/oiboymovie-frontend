import { GetServerSideProps, NextPage } from 'next'

import { IMovieList, MovieSort } from '@/shared/types/movie.types'
import { MovieService } from '@/services/movie/movie.service'
import Movies from '@/components/screens/movies/Movies'
import { IGenre } from '@/shared/types/genre.types'
import { GenreService } from '@/services/genre/genre.service'

export interface IQueryMovies {
  genreId?: string
  searchTerm?: string
  sort?: MovieSort
  page?: number
  perPage?: number
}

export interface IMoviesPage {
  query: IQueryMovies
  data: IMovieList
  genres: IGenre[]
}

const MoviesPage: NextPage<IMoviesPage> = (props) => {
  return <Movies {...props} />
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const query = context?.query
  const sort =
    query!.sort === MovieSort.HIGH_POPULARITY
      ? MovieSort.HIGH_POPULARITY
      : query!.sort === MovieSort.LOW_POPULARITY
      ? MovieSort.LOW_POPULARITY
      : query!.sort === MovieSort.HIGH_RATING
      ? MovieSort.HIGH_RATING
      : query!.sort === MovieSort.LOW_RATING
      ? MovieSort.LOW_RATING
      : undefined

  try {
    const { data } = await MovieService.getAll({
      genreId: query!.genreId ? Number(query!.genreId) : undefined,
      searchTerm: query!.searchTerm ? String(query!.searchTerm) : undefined,
      sort: sort,
      page: Number(query!.page),
      perPage: Number(query!.perPage),
    })

    const genres = await GenreService.getAll()

    return { props: { query: { ...query }, data, genres } }
  } catch (error) {
    console.log(error)
    return {
      props: {
        query: { ...query },
        data: { movies: [], length: 0 },
        genres: [],
      },
    }
  }
}

export default MoviesPage
