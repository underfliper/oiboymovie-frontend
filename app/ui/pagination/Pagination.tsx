import { FC } from 'react'
import ReactPaginate from 'react-paginate'

import styles from './pagination.module.scss'

interface IPaginationProps {
  currPage: number
  pageCount: number
  onPageChange?(selectedItem: { selected: number }): void
}

const Pagination: FC<IPaginationProps> = ({
  currPage,
  pageCount,
  onPageChange,
}) => {
  return (
    <ReactPaginate
      forcePage={currPage}
      breakLabel="..."
      nextLabel="Next"
      pageRangeDisplayed={3}
      onPageChange={onPageChange}
      previousLabel="Prev"
      pageCount={pageCount}
      renderOnZeroPageCount={null}
      containerClassName={styles.pagination}
      pageLinkClassName={styles['page-num']}
      previousLinkClassName={styles['prev-page']}
      nextLinkClassName={styles['next-page']}
      activeLinkClassName={styles.active}
      disabledLinkClassName={styles.disabled}
      marginPagesDisplayed={3}
    />
  )
}

export default Pagination
