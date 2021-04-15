import React from 'react';
import ReactCardCarousel from 'react-card-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Review.css';
// import { faGrinStars } from '@fortawesome/free-regular-svg-icons';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';

const Review = () => {
   return (
      <div>
         <div className="text-center mt-4">
            <FontAwesomeIcon className="review-icon" icon={faQuoteRight} />
            <h3>What Our Client Say</h3>
         </div>
         <div className="container-review">
            <ReactCardCarousel autoplay={true} autoplay_speed={2500}>
               <div className="card-review">
                  <h3>Review</h3>
                  <small>
                     Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                     Laudantium esse tenetur ipsa corporis est id ducimus nulla,
                     cupiditate, nesciunt earum facere mollitia. Nisi
                     dignissimos quas perferendis repellendus similique culpa
                     quisquam!
                  </small>
               </div>
               <div className="card-review">Second Card</div>
               <div className="card-review">Third Card</div>
               <div className="card-review">Fourth Card</div>
               <div className="card-review">Fifth Card</div>
            </ReactCardCarousel>
         </div>
      </div>
   );
};

export default Review;
