import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './HomeMainCard.css';

const HomeMainCard = ({ service }) => {
   const history = useHistory();
   const handleOrder = e => {
      history.push('/placeOrder', { params: e });
   };

   return (
      <>
         <Card
            className="m-3 border-0 shadow rounded"
            style={{ width: '15rem', height: '15rem' }}
         >
            <Card.Body>
               <Card.Title>{service.title}</Card.Title>
               <Card.Text>
                  <small>{service.summary}</small>
               </Card.Text>
               <Button
                  className="btn btn-success px-4"
                  onClick={() => {
                     handleOrder(service);
                  }}
                  variant="success"
               >
                  Order
               </Button>
            </Card.Body>
         </Card>
      </>
   );
};

export default HomeMainCard;
