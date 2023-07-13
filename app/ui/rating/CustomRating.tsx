import { FC, MouseEvent } from 'react'
import { Rating } from 'react-simple-star-rating'

import FilledStarIcon from './FilledStarIcon'
import StarIcon from './StarIcon'

interface IRating {
  initialValue?: number
  readonly?: boolean
  onClick?: (
    value: number,
    index: number,
    event?: MouseEvent<HTMLSpanElement>,
  ) => void
  iconSize?: number
  iconStyle?: React.CSSProperties
}

const CustomRating: FC<IRating> = (props) => {
  const fillColors = ['#ff5936', '#ff6736', '#ff7835', '#fe8535', '#fe9d34']

  return (
    <Rating
      allowFraction
      transition
      emptyIcon={<StarIcon size={props.iconSize} SVGstyle={props.iconStyle} />}
      fillIcon={
        <FilledStarIcon size={props.iconSize} SVGstyle={props.iconStyle} />
      }
      fillColorArray={fillColors}
      {...props}
    />
  )
}

export default CustomRating
