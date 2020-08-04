import React from 'react';
import './PayMethods.scss';
import {
  amex,
  applePay,
  bancontact,
  discover,
  googlePay,
  jcb,
  klarna,
  maestro,
  mastercard,
  paypal,
  sofort,
  visa,
} from '../../constants/imgs/payment';

const PayMethods = () => (
  <div className="pay-methods">
    <span>Ways You Can Pay</span>
    <div className="cards">
      <img src={paypal} alt="Paypal" />
      <img src={mastercard} alt="MasterCard" />
      <img src={visa} alt="Visa" />
      <img src={maestro} alt="Maestro" />
      <img src={amex} alt="Amex" />
      <img src={bancontact} alt="Bancontact" />
      <img src={jcb} alt="JCB" />
      <img src={discover} alt="Discover" />
      <img src={sofort} alt="Sofort" />
      <img src={klarna} alt="Klarna" />
      <img src={googlePay} alt="Google Pay" />
      <img src={applePay} alt="Apple Pay" />
    </div>
  </div>
);

export default PayMethods;
