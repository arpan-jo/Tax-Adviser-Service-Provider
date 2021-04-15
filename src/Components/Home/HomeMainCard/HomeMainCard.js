import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './HomeMainCard.css';

const HomeMainCard = ({ data }) => {
   const history = useHistory();

   const handleOrder = () => {
      history.push('/dashboard');
      console.log(data);
   };

   return (
      <>
         {/* <div
            className="m-1 home-card bg-danger col-6 text-center"
            style={{ width: '18rem', height: '18rem' }}
         >
            <h3>{data.name}</h3>
            <p>
               Lorem ipsum dolor sit amet consectetur, adipisicing elit.
               Laudantium ea error quas voluptatem, in repudiandae expedita
               impedit laboriosam! Numquam, odit.
            </p>
         </div> */}
         <Card
            className="m-3 border-0 shadow rounded"
            style={{ width: '15rem', height: '15rem' }}
         >
            <Card.Body>
               <Card.Title>{data.name}</Card.Title>
               {/* <Card.Text>
                  Some quick example text to build on the card title and
               </Card.Text> */}
               <Button onClick={() => handleOrder(data)} variant="primary">
                  Hire me
               </Button>
            </Card.Body>
         </Card>
      </>
   );
};

export default HomeMainCard;
