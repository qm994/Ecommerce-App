import React from 'react';
import axios from "axios";
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HtEM4EAoNEfVzPJLiyM6YsBEmxcWMv9iLnsdo8UJkdFSD5KqeaxQjnOzwTCQTexstnuFANuT1dYFOvAGeHOqT9700rxHBzHVX'

    const onToken = token => {
        axios({
          url: '/payment',
          method: 'post',
          data: {
            amount: priceForStripe,
            token: token
          }
        })
          .then(response => {
            alert('succesful payment');
          })
          .catch(error => {
            console.log('Payment Error: ', error);
            alert(
              'There was an issue with your payment! Please make sure you use the provided credit card.'
            );
          });
      };
    return (
        <StripeCheckout 
            label='Pay Now' 
            name='CRWN Clothing Ltd'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton