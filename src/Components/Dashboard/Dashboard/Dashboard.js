import React, { useContext } from 'react';
import 'react-calendar/dist/Calendar.css';
import { useLocation } from 'react-router';
import { UserContext } from '../../../App';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import ProcessPayment from '../../ProcessPayment/ProcessPayment';

const Dashboard = () => {
   const location = useLocation();
   const [loggedInUser, setLoggedInUser] = useContext(UserContext);
   const service = location.state.params;

   return (
      <section className="justify-content-center">
         <div className="container-fluid row ">
            <div className="col-md-3">
               <Sidebar></Sidebar>
            </div>
            <div className="col-md-6 ">
               <h5 className="mt-2 fw-bold">ORDER FORM:</h5>
               <input
                  className="p-1 m-1 w-50"
                  type="text"
                  disabled
                  value={`Email: ${loggedInUser.email}`}
               />
               <br />
               <input
                  className="p-1 m-1 w-50"
                  type="text"
                  disabled
                  value={`Order Title: ${service.title}`}
               />
               <ProcessPayment service={service}></ProcessPayment>
            </div>
         </div>
      </section>
   );
};

export default Dashboard;
