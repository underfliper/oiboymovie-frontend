import { FC } from 'react'

export interface IStarIcon {
  size?: number
  SVGstrokeColor?: string
  SVGstorkeWidth?: string | number
  SVGclassName?: string
  SVGstyle?: React.CSSProperties
}

const FilledStarIcon: FC<IStarIcon> = ({
  size = 25,
  SVGstrokeColor = 'currentColor',
  SVGstorkeWidth = 0,
  SVGclassName = 'star-svg',
  SVGstyle,
}) => {
  return (
    <svg
      className={SVGclassName}
      style={SVGstyle}
      stroke={SVGstrokeColor}
      strokeWidth={SVGstorkeWidth}
      width={size}
      height={size}
      viewBox="0 0 512 512"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg">
      <g id="filled-star">
        <path
          id="Vector"
          d="M285.855 20.998C280.716 9.99922 269.856 3 257.93 3C246.004 3 235.242 9.99922 230.006 20.998L167.661 153.283L28.4277 174.481C16.7925 176.281 7.09661 184.68 3.50912 196.178C-0.078376 207.677 2.8304 220.376 11.1689 228.875L112.201 331.963L88.3485 477.647C86.4093 489.646 91.2573 501.844 100.856 508.943C110.455 516.043 123.157 516.942 133.629 511.243L258.027 442.751L382.426 511.243C392.898 516.942 405.599 516.143 415.198 508.943C424.797 501.744 429.645 489.646 427.706 477.647L403.757 331.963L504.789 228.875C513.127 220.376 516.133 207.677 512.449 196.178C508.764 184.68 499.165 176.281 487.53 174.481L348.2 153.283L285.855 20.998Z"
          fill="currentColor"
        />
      </g>
    </svg>
  )
}

export default FilledStarIcon
