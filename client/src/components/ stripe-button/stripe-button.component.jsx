import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51J8tUvFooLHDNmtPw0MUwk5WBMPCIbv2p8drQsbxPiLHRdeXDzGx3qPW01SrOiPauwOzKW2r4nWNBF8pWIz7rrAm00Ino51XLy';
    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        }).then(response =>  {
            alert('Payment successfull')
        }).catch(error => {
            console.log('Payment error: ', JSON.parse(error))
            alert(
                'There was an issue wis your payment. Please sure you use the provided credit card.'
            )
        })
    }

    return (
        <StripeCheckout 
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
};

export default StripeCheckoutButton;