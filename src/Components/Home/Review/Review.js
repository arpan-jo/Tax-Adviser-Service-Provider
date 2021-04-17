import React, { useEffect, useState } from 'react';
import ReactCardCarousel from 'react-card-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Review.css';
// import { faGrinStars } from '@fortawesome/free-regular-svg-icons';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import ReviewCard from '../ReviewCard/ReviewCard/ReviewCard';

const Review = () => {
   const [loadReview, setLoadReview] = useState([]);

   useEffect(() => {
      fetch('https://secret-shelf-74335.herokuapp.com/loadReviews')
         .then(res => res.json())
         .then(data => setLoadReview(data));
   }, []);

   return (
      <div className="d-block">
         <div className="text-center mt-4">
            <FontAwesomeIcon className="review-icon" icon={faQuoteRight} />
            <h3>What Our Client Say</h3>
         </div>
         <div className="container-review text-warning">
            <ReactCardCarousel autoplay={true} autoplay_speed={2500}>
               {loadReview.map(review => (
                  <ReviewCard review={review}></ReviewCard>
               ))}
            </ReactCardCarousel>
         </div>
      </div>
   );
};

export default Review;
