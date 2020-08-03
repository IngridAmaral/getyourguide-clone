import React from 'react';
import './Footer.scss';
import Selector from './Selector';
import Mobile from './Mobile';
import FooterNavigation from '../../containers/footer/FooterNavigation';
import PayMethods from './PayMethods';
import { ReactComponent as Facebook } from '../../assets/svgs/socialMedia/facebook.svg';
import { ReactComponent as Instagram } from '../../assets/svgs/socialMedia/instagram.svg';
import { ReactComponent as Linkedin } from '../../assets/svgs/socialMedia/linkedin.svg';
import { ReactComponent as Pinterest } from '../../assets/svgs/socialMedia/pinterest.svg';
import { ReactComponent as Twitter } from '../../assets/svgs/socialMedia/twitter.svg';

export const language = [
  'English (United States)',
  'Densk',
  'Deutsch (Deutschland)',
  'Deutsch (Österreich)',
  'English',
  'English (United Kingdom)',
  'Español (España)',
  'Español (México)',
  'Français',
  'Italiano',
  'Nederlands',
  'Norsk',
  'Polski',
];

export const currency = [
  'Euro',
  'British Pound',
  'Hong Kong Dollar',
  'Croatian Kuna',
  'Hungarian Forint',
  'Indonesian Rupee',
  'Indian Rupee',
  'Japanese Yen',
  'South Korean Won',
  'Moroccan Dirham',
];

export const support = ['Contact', 'Legal', 'Privacy Policy', 'Terms of Use'];

export const company = [
  'About Us',
  'Careers',
  'Blog',
  'Press',
  'Gift Cards',
  'Magazine',
];

export const workWithUs = [
  'Supplier Administration',
  'Affiliate Partnet Administration',
];

const Footer = () => (
  <div className="footer-container">
    <div className="selectors">
      <Selector title="language" options={language} />
      <Selector title="currency" options={currency} />
    </div>
    <Mobile />
    <FooterNavigation title="Support" items={support} />
    <FooterNavigation title="Company" items={company} />
    <FooterNavigation title="Work With Us" items={workWithUs} />
    <PayMethods />

    <div className="copyrights-social">
      <span>© 2020 GetYourGuideClone. Cloned in Berlin by Ingrid Amaral.</span>
      <div className="social">
        <Facebook />
        <Instagram />
        <Linkedin />
        <Pinterest />
        <Twitter />
      </div>
    </div>
  </div>
);

export default Footer;
