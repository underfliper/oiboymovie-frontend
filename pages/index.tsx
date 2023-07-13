import { GetStaticProps, NextPage } from 'next'
import { MovieService } from '@/services/movie/movie.service'

import { IMovieShort } from '@/shared/types/movie.types'
import Home, { IHome } from '@/components/screens/home/Home'

const HomePage: NextPage<IHome> = (props) => {
  return <Home {...props} />
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const hotMovies: { data: IMovieShort[] } = await MovieService.getHotMovies()
    const newMovies = await MovieService.getNewMovies()
    const recentMovies = [...hotMovies.data, ...newMovies.data]
      .sort((a, b) =>
        a.vote_average > b.vote_average
          ? 1
          : b.vote_average > a.vote_average
          ? -1
          : 0,
      )
      .slice(0, 5)

    return {
      props: {
        recentMovies,
        hotMovies: hotMovies.data.slice(0, 5),
        newMovies: newMovies.data.slice(0, 5),
      } as IHome,
    }
  } catch (error) {
    return {
      props: {
        recentMovies: [],
        hotMovies: [],
        newMovies: [],
      } as IHome,
    }
  }
}

export default HomePage
