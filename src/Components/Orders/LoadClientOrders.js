import React from 'react';
import { Dropdown } from 'react-bootstrap';

const LoadClientOrders = ({ order }) => {
   const status1 = order?.status === 'pending';
   // const status2 = order?.status === 'on going';
   // const status3 = order?.status === 'done';
   const handleStatus = (id, e) => {
      const newStatus = e.target.innerText;

      fetch('https://secret-shelf-74335.herokuapp.com/updateOrder', {
         method: 'PATCH',
         headers: { 'Content-type': 'application/json' },
         body: JSON.stringify({ id, newStatus }),
      });
   };

   return (
      <>
         <tr>
            <td>{order.email}</td>
            <td>{order.title}</td>
            <td>{order.paymentMethod.id}</td>
            <td>
               {status1 === true ? (
                  <button className="btn btn-danger" disabled="disabled">
                     {order.status}
                  </button>
               ) : (
                  <button className="btn btn-success" disabled="disabled">
                     {order.status}
                  </button>
               )}
            </td>
            <td>
               <Dropdown>
                  <Dropdown.Toggle id="dropdown-basic">Status</Dropdown.Toggle>

                  <Dropdown.Menu>
                     <Dropdown.Item
                        className="text-danger"
                        onClick={e => handleStatus(order._id, e)}
                        href="#/action-1"
                     >
                        Pending
                     </Dropdown.Item>
                     <Dropdown.Item
                        className="text-warning"
                        onClick={e => handleStatus(order._id, e)}
                        href="#/action-2"
                     >
                        On Going
                     </Dropdown.Item>
                     <Dropdown.Item
                        className="text-success"
                        onClick={e => handleStatus(order._id, e)}
                        href="#/action-3"
                     >
                        Done
                     </Dropdown.Item>
                  </Dropdown.Menu>
               </Dropdown>
            </td>
         </tr>
      </>
   );
};

export default LoadClientOrders;
