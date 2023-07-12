import { ChangeEvent, FC, useState } from 'react'
import SearchField from '@/ui/search-field/SearchField'

import styles from './search.module.scss'

interface Props {
  className?: string
}

const Search: FC<Props> = ({ className }) => {
  const [searchTerm, setSearchTerm] = useState('')

  // add search logic

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  return (
    <div className={`${styles.wrapper}${className && ' ' + className}`}>
      <SearchField searchTerm={searchTerm} handleSearch={handleSearch} />
      {/* Add search results */}
    </div>
  )
}

export default Search
