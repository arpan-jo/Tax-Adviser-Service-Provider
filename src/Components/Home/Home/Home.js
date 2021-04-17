import React from 'react';
import Header from '../Header/Header';
import HomeMain from '../HomeMain/HomeMain';
import PlanPrice from '../PlanPrice/PlanPrice';
import Review from '../Review/Review';

const Home = () => {
   return (
      <div>
         {/* <Header></Header> */}
         <HomeMain />
         <PlanPrice></PlanPrice>
         <Review></Review>
      </div>
   );
};

export default Home;
