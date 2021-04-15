import React from 'react';

const PriceCard = ({ price }) => {
   return (
      <div className="col-md-4 my-1 info-card">
         <div className="d-flex info-container bg-danger align-items-center justify-content-center ">
            <div className=""></div>
            <div>
               <h5>{price.planName}</h5>
               <small>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Labore, laboriosam.
               </small>
               <p className="bg-dark d-block text-white">{price.price}</p>
            </div>
         </div>
      </div>
   );
};

export default PriceCard;
