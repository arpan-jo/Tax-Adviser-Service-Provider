import React, { useEffect, useState } from 'react';
// import AppointmentByDate from '../AppointmentByDate/AppointmentByDate';
import Sidebar from '../Sidebar/Sidebar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Dashboard = () => {
   const [selectedDate, setselectedDate] = useState(new Date());
   const [appointments, setAppointments] = useState([]);

   //    console.log(selectedDate.toISOString());
   const handleDateChange = date => {
      setselectedDate(date);
      // fetch('http://localhost:5005/appointmentsByDate', {
      //    method: 'POST',
      //    headers: {
      //       'Content-Type': 'application/json',
      //    },
      //    body: JSON.stringify({ date }),
      // })
      //    .then(res => res.json())
      //    .then(data => setAppointments(data));
   };

   useEffect(() => {
      fetch('http://localhost:5005', {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify({ selectedDate }),
      })
         .then(res => res.json())
         .then(data => setAppointments(data));
   }, [selectedDate]);

   return (
      <section className="justify-content-center">
         <div className="container-fluid row ">
            <div className="col-md-3">
               <Sidebar></Sidebar>
            </div>
            <div className="col-md-3 mt-3">
               <Calendar
                  className="border-0 shadow p-3 "
                  onChange={handleDateChange}
                  value={new Date()}
               />
            </div>
            <div className="col-md-6 ">
               {/* <AppointmentByDate
                  appointments={appointments}
               ></AppointmentByDate> */}
               <h2>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestias, fuga!
               </h2>
            </div>
         </div>
      </section>
   );
};

export default Dashboard;
