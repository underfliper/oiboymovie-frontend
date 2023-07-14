import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { MovieService } from '@/services/movie/movie.service'

import SingleMovie, {
  ISingleMovie,
} from '@/components/screens/single-movie/SingleMovie'

const SingleMoviePage: NextPage<ISingleMovie> = (props) => {
  return <SingleMovie {...props} />
}

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const { data: response } = await MovieService.getAll({
      page: 1,
      perPage: 9999,
    })
    const paths = response.movies.map((movie) => ({
      params: { id: movie.id.toString() },
    }))

    return { paths, fallback: 'blocking' }
  } catch {
    return {
      paths: [],
      fallback: false,
    }
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const { data: movie } = await MovieService.getById(Number(params?.id))

    const { data: similarMovies } = await MovieService.getSimilarMovies(
      Number(params?.id),
    )

    return {
      props: { movie, similarMovies },
    }
  } catch (e) {
    return {
      notFound: true,
    }
  }
}

export default SingleMoviePage
