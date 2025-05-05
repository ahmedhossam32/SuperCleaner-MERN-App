import React from "react";
import { Link } from "react-router-dom";
import facebookIcon from "../assets/facebook.png";
import instagramIcon from "../assets/instagram.png";
import twitterIcon from "../assets/twitter.png";

function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 py-6 mt-10 px-0">
      <div className="w-full px-4 flex flex-col sm:flex-row justify-between items-center sm:items-start gap-4">
        <div className="text-sm text-left w-full sm:w-auto">
          © 2025 Super Cleaner. All rights reserved.
        </div>

        <ul className="flex flex-wrap justify-center gap-4 text-sm">
          <li>
            <Link to="/privacyPolicy" className="hover:text-green-600">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link to="/terms" className="hover:text-green-600">
              Terms of Use
            </Link>
          </li>
          <li>
            <Link to="/accessibility" className="hover:text-green-600">
              Accessibility
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-green-600">
              Contact Us
            </Link>
          </li>
        </ul>

        <div className="flex gap-4 justify-center sm:justify-end">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <img
              src={facebookIcon}
              alt="Facebook"
              className="w-6 h-6 hover:scale-110 transition"
            />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <img
              src={instagramIcon}
              alt="Instagram"
              className="w-6 h-6 hover:scale-110 transition"
            />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <img
              src={twitterIcon}
              alt="Twitter"
              className="w-6 h-6 hover:scale-110 transition"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
