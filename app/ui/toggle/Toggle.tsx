import { ChangeEvent, FC } from 'react'

import styles from './toggle.module.scss'

interface IToggle {
  value: boolean
  handleToggle: (event: ChangeEvent<HTMLInputElement>) => void
}

const Toggle: FC<IToggle> = ({ value, handleToggle }) => {
  return (
    <div className={styles.wrapper}>
      <input
        className={styles.toggle}
        id={`toggle`}
        type="checkbox"
        onChange={handleToggle}
        checked={value}
      />
      <label className={styles.label} htmlFor={`toggle`}>
        <span className={styles.button} />
      </label>
    </div>
  )
}

export default Toggle
