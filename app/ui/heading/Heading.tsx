import { FC, ReactNode, createElement } from 'react'

import styles from './heading.module.scss'

interface IHeading {
  level: string
  text: string
  icon?: ReactNode
}

const Heading: FC<IHeading> = ({ level = 'h1', text, icon }) => {
  const node: ReactNode = (
    <>
      {icon && icon}
      {text}
    </>
  )

  return (
    <div className={styles.heading}>
      {createElement(level, { className: styles.text }, node)}
    </div>
  )
}

export default Heading
