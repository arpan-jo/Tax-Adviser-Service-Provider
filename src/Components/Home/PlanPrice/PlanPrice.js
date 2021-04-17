import React from 'react';
import PriceCard from '../PriceCard/PriceCard';

const PlanPrice = () => {
   const pricePlan = [
      { planName: 'Basic Plan', price: 120, package: 'FOR PERSONAL USE OLNY' },
      {
         planName: 'Advance Plan',
         price: 120,
         package: 'FOR SMALL AND LARGE COMPANIES',
      },
      {
         planName: 'Profesional Plan',
         price: 120,
         package: 'FOR USE CORPORATIONS',
      },
   ];
   return (
      <div>
         <div className="text-center">
            <h3>Pricing Table</h3>
            <small className="text-center mx-5 p-5">
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam
               a, cupiditate praesentium aut explicabo minima suscipi.
            </small>
            <div className="d-flex justify-content-center">
               <div className="w-75 row">
                  {pricePlan.map(price => (
                     <PriceCard price={price}></PriceCard>
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
};

export default PlanPrice;
