import React, { useContext, useMemo } from 'react';
import {
   useStripe,
   useElements,
   CardNumberElement,
   CardCvcElement,
   CardExpiryElement,
} from '@stripe/react-stripe-js';
import { UserContext } from '../../App';
import { useHistory } from 'react-router';

const useOptions = () => {
   const options = useMemo(
      () => ({
         style: {
            base: {
               fontSize: '16px',
               color: '#424770',
               letterSpacing: '0.025em',
               fontFamily: 'Source Code Pro, monospace',
               '::placeholder': {
                  color: '#aab7c4',
               },
            },
            invalid: {
               color: '#9e2146',
            },
         },
      }),
      []
   );
   return options;
};

const PaymentCard = ({ service }) => {
   const { title, summary, details, price } = service;
   const history = useHistory();
   const [loggedInUser, setLoggedInUser] = useContext(UserContext);
   const email = loggedInUser && loggedInUser.email;
   const stripe = useStripe();
   const elements = useElements();
   const options = useOptions();

   const handleSubmit = async event => {
      event.preventDefault();

      if (!stripe || !elements) {
         // Stripe.js has not loaded yet. Make sure to disable
         // form submission until Stripe.js has loaded.
         return;
      }

      const payload = await stripe.createPaymentMethod({
         type: 'card',
         card: elements.getElement(CardNumberElement),
      });
      const clientOrder = {
         title,
         summary,
         details,
         price,
         email,
         status: 'pending',
         ...payload,
      };

      fetch('https://desolate-river-56965.herokuapp.com/orderService', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify(clientOrder),
      });
      history.push('/myOrder');
   };

   return (
      <form onSubmit={handleSubmit}>
         <p className="fw-bold">Pay With Card:</p>
         <label>
            Card number
            <CardNumberElement
               options={options}
               onReady={() => {
                  console.log('CardNumberElement [ready]');
               }}
               onChange={event => {
                  console.log('CardNumberElement [change]', event);
               }}
               onBlur={() => {
                  console.log('CardNumberElement [blur]');
               }}
               onFocus={() => {
                  console.log('CardNumberElement [focus]');
               }}
            />
         </label>
         <br />
         <label>
            Expiration date
            <CardExpiryElement
               options={options}
               onReady={() => {
                  console.log('CardNumberElement [ready]');
               }}
               onChange={event => {
                  console.log('CardNumberElement [change]', event);
               }}
               onBlur={() => {
                  console.log('CardNumberElement [blur]');
               }}
               onFocus={() => {
                  console.log('CardNumberElement [focus]');
               }}
            />
         </label>
         <br />
         <label>
            CVC
            <CardCvcElement
               options={options}
               onReady={() => {
                  console.log('CardNumberElement [ready]');
               }}
               onChange={event => {
                  console.log('CardNumberElement [change]', event);
               }}
               onBlur={() => {
                  console.log('CardNumberElement [blur]');
               }}
               onFocus={() => {
                  console.log('CardNumberElement [focus]');
               }}
            />
         </label>
         <br />
         <input
            className="p-1 m-1 w-50"
            type="text"
            disabled
            value={`You have to pay: $ ${service.price}`}
         />
         <br />
         <button
            className="btn btn-success px-4 mt-1"
            type="submit"
            disabled={!stripe}
         >
            Confirm with Pay
         </button>
      </form>
   );
};

export default PaymentCard;
