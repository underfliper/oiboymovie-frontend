import { ChangeEvent, FC } from 'react'

import styles from './search-field.module.scss'

interface ISearchField {
  searchTerm: string
  handleSearch: (event: ChangeEvent<HTMLInputElement>) => void
}

const SearchField: FC<ISearchField> = ({ handleSearch, searchTerm }) => {
  return (
    <div className={styles.wrapper}>
      <i className="icon-search" />
      <input
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
      />
    </div>
  )
}

export default SearchField
