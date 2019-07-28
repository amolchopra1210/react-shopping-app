import React from 'react'
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishablekey = 'pk_test_hopc8vds2UK2K6E77kOCPI7v00lIIOeEE2';

    const onToken = token => {
        alert("Payment Successful");
    }

    return (
        <StripeCheckout
            label = "Pay Now"
            name = "Crwn Clothing Ltd."
            billingAddress
            shippingAddress
            image = 'https://svgshare.com/i/CUz.svg'
            description = {`Your total is $${price}`}
            amount = {priceForStripe}
            panelLabel = 'Pay Now'
            token = {onToken}
            stripeKey = {publishablekey}
        />
    )
}

export default StripeCheckoutButton;
