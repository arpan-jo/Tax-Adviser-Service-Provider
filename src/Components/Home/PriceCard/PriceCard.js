import React from 'react';
import './PriceCard.css';

const PriceCard = ({ price }) => {
   return (
      <div className="col-md-4 my-1 info-card">
         <div className="info-container rounded">
            <div className="mt-2">
               <h5 className="pt-2">{price.planName}</h5>
               <p>
                  <span className="text-bold"> $ {price.price}</span> <br />{' '}
                  <small>per month</small>
               </p>
            </div>
            <div className="mt-5">
               <small className="bg-dark d-block text-white rounded py-2">
                  {price.package}
               </small>
            </div>
         </div>
      </div>
   );
};

export default PriceCard;
