Tasker FLow-->

--> In the profile update, ask the user to connect with stripe.
----> Display a stripe button
----> upon receiving back the response, send to backend ans store it
----> profile wont be complete without this connection and not to be displayed on search

For Stripe -->
to start with, will use Standard account

Customer Flow--->

---> On confirm schedule click, display the Strip pop up to collect the payment info.
----> once the CC token received, send to backend API for processing /Saving / Create a charge on the card /customer
---> As the charge is not immediate, a charge needs to be created on a customer using customer email address and CC token.

---> once saving the card is successful, API will return response after confirming the schedule.

After the work comopletion flow-->
----> Service Provider, would need to go to dashboard against the particular request and click complete payment button.
----> Complete Payment button to be enabled only on or after the schedule date to avoid illegal activity

---> NOTE: May be provide option to start /stop timer to record time and that can be used to charge the customer.
---> NOTE: should we need a work flow for the user to approve before charging the customer?

---> NOTE: If the total cost changed, how to invalidate previous charge created and create a new one?

---> Once payment completed, create invoice and send to both.

https://stripe.com/docs/connect/direct-charges

https://stripe.com/docs/saving-cards#saving-cards

https://hackernoon.com/how-to-integrate-stripe-payments-in-web-application-2c72d5c67454

https://stripe.com/docs/connect/standard-accounts#integrating-oauth

Stripe - vipinunnikrishnan@gmail.com
curl -X POST https://connect.stripe.com/oauth/token \
-d client_secret=YOUR_SECRET_KEY \
-d code=ac_DjZhQtLycCQnS2FvwC9hTQWRgCqv8nrj \
-d grant_type=authorization_code

vipin.angelo@gmail.com
curl -X POST https://connect.stripe.com/oauth/token \
-d client_secret=YOUR_SECRET_KEY \
-d code=ac_DjvSZOv9bidvtgyFq7qwhdNEhRP41HfP \
-d grant_type=authorization_code

angular-stripe-example

https://github.com/tnishimura/angular-stripe-elements-demo/tree/master/src/app/stripe-demo
