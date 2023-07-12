import { ChangeEvent, FC } from 'react'

import styles from './toggle.module.scss'

interface IToggle {
  handleToggle: (event: ChangeEvent<HTMLInputElement>) => void
}

const Toggle: FC<IToggle> = ({ handleToggle }) => {
  return (
    <div className={styles.wrapper}>
      <input
        className={styles.toggle}
        id={`toggle`}
        type="checkbox"
        onChange={handleToggle}
      />
      <label className={styles.label} htmlFor={`toggle`}>
        <span className={styles.button} />
      </label>
    </div>
  )
}

export default Toggle
