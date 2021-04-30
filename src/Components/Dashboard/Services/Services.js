import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import LoadServices from '../LoadServices/LoadServices';

const Services = () => {
   const [allService, setAllService] = useState([]);

   useEffect(() => {
      fetch('https://desolate-river-56965.herokuapp.com/allServices')
         .then(res => res.json())
         .then(data => setAllService(data));
   }, []);

   return (
      <section className="justify-content-center">
         <div className="container-fluid row ">
            <div className="col-md-3">
               <Sidebar />
            </div>

            <div className="col-md-9 ">
               <div id="deleteTable">
                  <h3 className="mt-3 fw-bold">Manage Services</h3>{' '}
                  <Table bordered>
                     <thead>
                        <tr>
                           <th>Title</th>
                           <th>Summary</th>
                           <th>Details</th>
                           <th>Action</th>
                        </tr>
                     </thead>
                     <tbody>
                        {allService.map(service => (
                           <LoadServices
                              key={service._id}
                              service={service}
                           ></LoadServices>
                        ))}
                     </tbody>
                  </Table>
                  {allService.length > 0 ? (
                     <div className="d-flex justify-content-center">
                        <div
                           className="spinner-border d-none"
                           role="status"
                        ></div>
                     </div>
                  ) : (
                     <div className="d-flex justify-content-center">
                        <div className="spinner-border " role="status"></div>
                     </div>
                  )}
               </div>
            </div>
         </div>
      </section>
   );
};

export default Services;
