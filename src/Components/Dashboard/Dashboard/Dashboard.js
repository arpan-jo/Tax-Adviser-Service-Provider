import React, { useContext, useEffect, useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import { useLocation } from 'react-router';
import { UserContext } from '../../../App';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import ProcessPayment from '../../ProcessPayment/ProcessPayment';

const Dashboard = () => {
   const location = useLocation();
   const [loggedInUser, setLoggedInUser] = useContext(UserContext);

   const [selectedDate, setselectedDate] = useState(new Date());

   const service = location.state.params;

   // const handleDateChange = date => {
   //    setselectedDate(date);
   //    fetch('http://localhost:5005/appointmentsByDate', {
   //       method: 'POST',
   //       headers: {
   //          'Content-Type': 'application/json',
   //       },
   //       body: JSON.stringify({ date }),
   //    })
   //       .then(res => res.json())
   //       .then(data => setAppointments(data));
   // };

   // useEffect(() => {
   //    fetch('http://localhost:5005', {
   //       method: 'POST',
   //       headers: { 'Content-Type': 'application/json' },
   //       body: JSON.stringify({ selectedDate }),
   //    })
   //       .then(res => res.json())
   //       .then(data => setAppointments(data));
   // }, [selectedDate]);

   return (
      <section className="justify-content-center">
         <div className="container-fluid row ">
            <div className="col-md-3">
               <Sidebar></Sidebar>
            </div>
            <div className="col-md-6 ">
               <h3>Title : {service.title}</h3>
               <ProcessPayment service={service}></ProcessPayment>
            </div>
         </div>
      </section>
   );
};

export default Dashboard;
