import React from 'react';
import HomeMainCard from '../HomeMainCard/HomeMainCard';

const HomeMain = () => {
   const fakeData = [
      {
         name: 'arpan',
         age: 28,
      },
      {
         name: 'arpan',
         age: 28,
      },
      {
         name: 'arpan',
         age: 28,
      },
      {
         name: 'arpan',
         age: 28,
      },
   ];
   return (
      <div className="row p-2 m-1 bg-light">
         <div className="col-md-4">
            <h1>Financial Advices for Success</h1>
            <h5>Welcome to FINWIZ</h5>
            <p>
               It's not just about your money, it's about your life. Finwiz
               professionals understand how complex your life and financial
               situation can be, and we're here to help. Our team of certified
               financial planners can help you get the right information so you
               can make the best decisions.
            </p>
            <button className="p-3">OUR SERVICE</button>
         </div>
         <div className="col-md-8 justify-content-evenly ">
            <div className="container">
               <div className="row ms-auto justify-content-center">
                  {fakeData.map(data => (
                     <HomeMainCard data={data}></HomeMainCard>
                  ))}
               </div>
               {/* <div className="col-6 bg-secondary">
                  <div className="bg-light">
                     <h3>
                        FINANCIAL <br /> PLANING
                     </h3>
                  </div>
                  <div>
                     <h3>
                        FINANCIAL <br /> PLANING
                     </h3>
                  </div>
               </div>
               <div className="col-6 bg-danger">
                  <div>Right side 2</div>
                  <div>Right side 2</div>
               </div> */}
            </div>
         </div>
      </div>
   );
};

export default HomeMain;
