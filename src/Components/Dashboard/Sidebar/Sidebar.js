import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
   return (
      <div
         className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4"
         style={{ height: '100vh' }}
      >
         <ul className="list-unstyled">
            <li>
               <Link
                  to="/dashboard"
                  className="text-white text-decoration-none"
               >
                  Dashboard
               </Link>
            </li>
            <li>
               <Link
                  to="/doctor/services"
                  className="text-white text-decoration-none"
               >
                  Appointment
               </Link>
            </li>
            <li>
               <Link
                  to="/doctor/patients"
                  className="text-white text-decoration-none"
               >
                  Patients
               </Link>
            </li>
            <li>
               <Link
                  to="/doctor/prescriptions"
                  className="text-white text-decoration-none"
               >
                  Prescriptions
               </Link>
            </li>
            <li>
               <Link to="/doctor" className="text-white text-decoration-none">
                  Add Doctor
               </Link>
            </li>
            <li>
               <Link
                  to="/doctor/setting"
                  className="text-white text-decoration-none"
               >
                  Setting
               </Link>
            </li>
         </ul>
         <div>
            <Link to="/" className="text-white text-decoration-none">
               <span>Logout</span>
            </Link>
         </div>
      </div>
   );
};

export default Sidebar;
