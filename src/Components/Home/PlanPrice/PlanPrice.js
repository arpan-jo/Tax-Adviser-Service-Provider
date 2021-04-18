import React from 'react';
import PriceCard from '../PriceCard/PriceCard';

const PlanPrice = () => {
   const pricePlan = [
      { planName: 'Basic Plan', price: 120, package: 'FOR PERSONAL USE OLNY' },
      {
         planName: 'Advance Plan',
         price: 120,
         package: 'FOR ANY COMPANIES',
      },
      {
         planName: 'Profesional Plan',
         price: 120,
         package: 'FOR USE CORPORATIONS',
      },
   ];
   return (
      <section>
         <div className="container mt-5">
            <div className="text-center">
               <h3 style={{ 'font-family': 'Satisfy' }}>Pricing Table</h3>
               <small className="text-center">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ullam a, cupiditate praesentium aut explicabo minima suscipi.
               </small>
               <div className="d-flex justify-content-center mt-2">
                  <div className="w-75 row">
                     {pricePlan.map(price => (
                        <PriceCard price={price}></PriceCard>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default PlanPrice;
