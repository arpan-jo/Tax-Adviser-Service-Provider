import React from 'react';
import '../../Review/Review.css';

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
            </div>
         </div>
      </>
   );
};

export default ReviewCard;
