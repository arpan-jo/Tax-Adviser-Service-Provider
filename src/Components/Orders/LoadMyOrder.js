import React from 'react';

const LoadMyOrder = ({ orders }) => {
   const status = orders?.status === 'pending';
   return (
      <>
         <tr>
            <td>{orders.email}</td>
            <td>{orders.title}</td>
            <td>{orders.paymentMethod.id}</td>
            <td>
               {status === true ? (
                  <button className="btn btn-danger" disabled="disabled">
                     {orders.status}
                  </button>
               ) : (
                  <button className="btn btn-success" disabled="disabled">
                     {orders.status}
                  </button>
               )}
            </td>
         </tr>
      </>
   );
};

export default LoadMyOrder;
