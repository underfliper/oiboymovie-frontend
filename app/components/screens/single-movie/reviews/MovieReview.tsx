import { FC } from 'react'
import Image from 'next/image'
import CustomRating from '@/ui/rating/CustomRating'

import { IMovieReview } from '@/shared/types/movie.types'
import { getFullDate } from '@/utils/date/convertDate'

import profileImage from '@/assets/images/profileImage.jpg'

import styles from './movieReviews.module.scss'

const MovieReview: FC<{ review: IMovieReview }> = ({ review }) => {
  return (
    <div className={styles.review}>
      <div className={styles.review_image}>
        <Image
          width={100}
          height={100}
          src={profileImage}
          alt={`${review.user.firstName} avatar`}
        />
      </div>
      <div className={styles.review_content}>
        <div className={styles.review_heading}>
          <div
            className={
              styles.review_name
            }>{`${review.user.firstName} ${review.user.lastName}`}</div>
          <div className={styles.review_rating}>
            <CustomRating
              initialValue={review.rating}
              readonly
              iconSize={16}
              iconStyle={{ marginLeft: 2, marginRight: 2 }}
            />
          </div>
        </div>
        <div className={styles.review_text}>{review.text}</div>
        <div className={styles.review_date}>
          {getFullDate(review.publishDate)}
        </div>
      </div>
    </div>
  )
}

export default MovieReview
