import { FC } from 'react'
import Slider from 'react-slick'
import SliderItem from './SliderItem'

import { IMovieShort } from '@/shared/types/movie.types'

const HeroSlider: FC<{ items: IMovieShort[] }> = ({ items }) => {
  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    variableWidth: true,
    pauseOnHover: true,
  }

  return (
    <Slider {...settings}>
      {items.map((item) => (
        <SliderItem key={item.id} movie={item} />
      ))}
    </Slider>
  )
}

export default HeroSlider
