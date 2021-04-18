import React from 'react';
import './Review.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const ReviewCard = ({ review }) => {
   return (
      <>
         <div className="card-review d-flex row">
            <div className="col-md-7 text-center">
               <img
                  className="img-fluid review-image"
                  src={review.imageURL}
                  alt=""
               />
               <p>{review.name}</p>
            </div>
            <div className="col-md-5 ">
               <small>{review.review}</small>
               <br />
               <FontAwesomeIcon
                  className="text-warning fw-bold"
                  icon={faStar}
               />{' '}
               <FontAwesomeIcon
                  className="text-warning fw-bold"
                  icon={faStar}
               />{' '}
               <FontAwesomeIcon
                  className="text-warning fw-bold"
                  icon={faStar}
               />{' '}
               <FontAwesomeIcon
                  className="text-warning fw-bold"
                  icon={faStar}
               />{' '}
               <FontAwesomeIcon
                  className="text-warning fw-bold"
                  icon={faStar}
               />
            </div>
         </div>
      </>
   );
};

export default ReviewCard;
