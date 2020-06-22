import React from 'react';
import './TextCallouts.scss';
import { calendar, duration, heart } from '../../assets/imgs/text-callouts/text-callouts';

const callouts = [
  {
    title: 'Flexibile Booking',
    img: calendar,
    text: "Don't stress if your plans change. Cancel up to 24 hours before most tours and activities for a full refund.",
  },
  {
    title: 'Faster Acess',
    img: duration,
    text: 'Skip the long ticket lines and get straight to the good stuff in the places everyone wants to visit.',
  },
  {
    title: 'Friendly Help',
    img: heart,
    text: "We're standing by 24/7 to make your experience incredible. Reach us by phone, email, or WhatsApp.",
  },
];

const TextCallouts = () => (
  <div className="text-callouts-container">
    {callouts.map(({ title, img, text }) => (
      <div key={title} className="callout">
        <div className="img-wrapper">
          <img src={img} alt={title} />
        </div>
        <span className="title">{title}</span>
        <span className="description">{text}</span>
      </div>
    ))}
  </div>
);

export default TextCallouts;
