import React from 'react';
import { AiFillGithub, AiFillFacebook, AiFillLinkedin } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className="footer p-10 bg-orange-400 text-white">
      <div>
        <span className="footer-title">Services</span>
        <p className="link link-hover">Wholesale</p>
        <p className="link link-hover">Bike Parts</p>
        <p className="link link-hover">Bulk Quantity</p>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <p className="link link-hover">About us</p>
        <p className="link link-hover">Contact</p>
        <p className="link link-hover">Business Policy</p>
      </div>
      <div>
        <span className="footer-title">Contact Us</span>
        <div className="grid grid-flow-col gap-4">
          <a href="https://github.com/hasibmiraz">
            <AiFillGithub className="w-10 h-10" />
          </a>
          <a href="https://www.facebook.com/mi.r4z/">
            <AiFillFacebook className="w-10 h-10" />
          </a>
          <a href="https://www.linkedin.com/in/md-hasibul-alam-miraz-a063411aa/">
            <AiFillLinkedin className="w-10 h-10" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
