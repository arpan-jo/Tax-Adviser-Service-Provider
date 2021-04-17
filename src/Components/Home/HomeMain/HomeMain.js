import React, { useEffect, useState } from 'react';
import HomeMainCard from '../HomeMainCard/HomeMainCard';

const HomeMain = () => {
   const [allService, setAllService] = useState([]);

   useEffect(() => {
      fetch('https://secret-shelf-74335.herokuapp.com/allServices')
         .then(res => res.json())
         .then(data => setAllService(data));
   }, []);

   return (
      <div className="row p-2 m-1 bg-light align-items-center">
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
         </div>
         <div className="col-md-8 justify-content-evenly ">
            <div className="container">
               <div className="row ms-auto justify-content-center">
                  {allService.map(service => (
                     <HomeMainCard
                        key={service._id}
                        service={service}
                     ></HomeMainCard>
                  ))}
                  {allService.length > 0 ? (
                     <div className="d-flex justify-content-center">
                        <div
                           className="spinner-border d-none"
                           role="status"
                        ></div>
                     </div>
                  ) : (
                     <div className="d-flex justify-content-center mt-5 pt-5">
                        <div className="spinner-border" role="status"></div>
                     </div>
                  )}
               </div>
            </div>
         </div>
      </div>
   );
};

export default HomeMain;
