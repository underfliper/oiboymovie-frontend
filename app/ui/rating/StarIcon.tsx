import { FC } from 'react'

export interface IStarIcon {
  size?: number
  SVGstrokeColor?: string
  SVGstorkeWidth?: string | number
  SVGclassName?: string
  SVGstyle?: React.CSSProperties
}

const StarIcon: FC<IStarIcon> = ({
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
      <g id="star">
        <path
          id="Vector"
          d="M256.008 0C264.934 0 273.083 5.19961 276.963 13.499L343.514 154.788L492.137 177.387C500.868 178.687 508.144 184.986 510.861 193.685C513.577 202.385 511.346 211.784 505.137 218.184L397.356 328.375L422.773 483.963C424.228 492.963 420.639 502.062 413.46 507.462C406.281 512.861 396.677 513.461 388.916 509.162L256.008 435.967L123.198 509.062C115.34 513.361 105.833 512.761 98.6539 507.362C91.475 501.962 87.7885 492.863 89.2437 483.863L114.661 328.275L6.87998 218.184C0.574156 211.784 -1.56012 202.285 1.15623 193.685C3.87259 185.086 11.1485 178.787 19.8797 177.387L168.503 154.788L235.054 13.499C239.031 5.19961 247.083 0 256.008 0ZM256.008 78.994L205.077 187.186C201.681 194.285 195.181 199.285 187.517 200.485L72.7516 217.884L156.085 302.977C161.421 308.477 163.943 316.276 162.682 323.976L142.989 443.667L245.046 387.471C251.934 383.671 260.18 383.671 266.971 387.471L369.028 443.667L349.432 324.076C348.17 316.376 350.596 308.577 356.028 303.077L439.362 217.984L324.596 200.485C317.029 199.285 310.432 194.385 307.037 187.186L256.008 78.994Z"
          fill="currentColor"
        />
      </g>
    </svg>
  )
}

export default StarIcon
