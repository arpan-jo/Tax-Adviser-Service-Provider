import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './HomeMainCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';

const HomeMainCard = ({ service }) => {
   const history = useHistory();
   const handleOrder = e => {
      history.push('/placeOrder', { params: e });
   };

   return (
      <>
         <Card className="m-3 border-0 shadow rounded col-md-4">
            <Card.Body>
               <Card.Title>{service.title}</Card.Title>
               <Card.Text>
                  <small>{service.summary}</small>
               </Card.Text>
               <Card.Text>
                  <small>$ {service.price}</small>
               </Card.Text>
               <Button
                  className="btn btn-warning px-4 button-hover"
                  onClick={() => {
                     handleOrder(service);
                  }}
                  variant="success"
               >
                  Order <FontAwesomeIcon icon={faSignInAlt} />
               </Button>
            </Card.Body>
         </Card>
      </>
   );
};

export default HomeMainCard;
