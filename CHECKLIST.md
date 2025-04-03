1 OrderService:
- should throw an error if order items are empty
- should throw an error if any item has invalid price or quantity
- should calculate the total price correctly
- should apply a valid coupon and adjust the total price
- should throw an error if coupon is invalid
- should ensure total price does not go below 0 after applying a coupon
- should call buildPaymentMethod with the correct total price
- should send the correct order payload to the API
- should throw an error if order creation fails
- should call payViaLink with the created order


2 buildPaymentMethod
- should include all payment methods for totalPrice <= 300,000
- should exclude AUPAY for totalPrice > 300,000
- should exclude PAYPAY and AUPAY for totalPrice > 500,000
- should return only CREDIT if PAYPAY and AUPAY are removed

3 payViaLink
- should open the correct payment URL in a new tab

4 setupCounter
- should set the initial counter value to 0
- should increment the counter by 1 on button click
- should increment the counter correctly on multiple clicks
- should update the counter correctly when setCounter is called directly

5 main 
- should render the #app element
- should set the correct innerHTML for the #app element
- should call setupCounter with the #counter button
