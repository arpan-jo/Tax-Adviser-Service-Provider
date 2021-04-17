import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import './Sidebar.css';

const Sidebar = () => {
   const [loggedInUser, setLoggedInUser] = useContext(UserContext);
   const [admin, setAdmin] = useState([]);

   const checkMail = loggedInUser && loggedInUser?.email;
   useEffect(() => {
      fetch('https://secret-shelf-74335.herokuapp.com/checkMail', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({ checkMail }),
      })
         .then(res => res.json())
         .then(data => setAdmin(data));
   }, []);

   const adminMember = admin[0]?.email === checkMail;
   return (
      <div
         className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4"
         style={{ height: '100vh' }}
      >
         {adminMember ? (
            <ul className="list-unstyled">
               <li>
                  <Link
                     to="/common"
                     className="text-white text-decoration-none"
                  >
                     Dashboard
                  </Link>
               </li>

               <li>
                  <Link to="/order" className="text-white text-decoration-none">
                     Client Orders
                  </Link>
               </li>
               <li>
                  <Link
                     to="/services"
                     className="text-white text-decoration-none"
                  >
                     Services
                  </Link>
               </li>

               <li>
                  <Link
                     to="/addService"
                     className="text-white text-decoration-none"
                  >
                     Add Service
                  </Link>
               </li>

               <li>
                  <Link
                     to="/adminPanel"
                     className="text-white text-decoration-none"
                  >
                     Admin Panel
                  </Link>
               </li>
               <li>
                  <Link
                     to="/addAnAdmin"
                     className="text-white text-decoration-none"
                  >
                     Add An Admin
                  </Link>
               </li>
            </ul>
         ) : (
            <ul className="list-unstyled">
               <li>
                  <Link
                     to="/common"
                     className="text-white text-decoration-none"
                  >
                     Dashboard
                  </Link>
               </li>
               <li>
                  <Link
                     to="/myOrder"
                     className="text-white text-decoration-none"
                  >
                     My Order
                  </Link>
               </li>
               <li>
                  <Link
                     to="/addReview"
                     className="text-white text-decoration-none"
                  >
                     Review
                  </Link>
               </li>
            </ul>
         )}
         <div>
            <Link to="/" className="text-white text-decoration-none">
               <span>Logout</span>
            </Link>
         </div>
      </div>
   );
};

export default Sidebar;
