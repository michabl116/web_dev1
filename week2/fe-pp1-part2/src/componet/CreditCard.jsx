import React from 'react';
import './App.css';

function CreditCard(props) {
  const cardStyle = {
    backgroundColor: props.bgColor,
    color: props.color,
  };
  const cardLogo =
  type === 'Visa'
    ? '/src/assets/images/visa.png'
    : type === 'Master Card'
    ? '/src/assets/images/master.png'
    : null;

  return (
    <div className="credit-card" style={cardStyle}>
      <div className="credit-card-type">{props.type}</div>
      <div className="credit-card-number">
      <div className="cardLogo">
        {cardLogo && <img src={cardLogo} alt={type} />}
      </div>
        •••• •••• •••• {props.number.slice(-4)}
      </div>
      <div className="credit-card-expiration">
        Expires {props.expirationMonth}/{props.expirationYear} &nbsp;
        <span className="credit-card-bank">{props.bank}</span>
      </div>
      <div className="credit-card-owner">{props.owner}</div>
    </div>
  );
}

export default CreditCard;
