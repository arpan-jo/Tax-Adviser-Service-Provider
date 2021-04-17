import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentCard from './PaymentCard';

const ProcessPayment = ({ service }) => {
   const stripePromise = loadStripe(
      'pk_test_51Ie1DPCOfmAMYa8BqrouXT9Q5Iv66FLbBveaxFM4oVtqGtUvEXF43szK4lkfqcUd33RMHK7JQvxi3Facvg6LcYma00YUW63ud9'
   );
   return (
      <Elements stripe={stripePromise}>
         <PaymentCard service={service}></PaymentCard>
      </Elements>
   );
};

export default ProcessPayment;
