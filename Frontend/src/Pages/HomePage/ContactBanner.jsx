import React from "react";
import { Link } from "react-router-dom";
import contactBackground from "../../assets/contactbanner2.jpg";
import facebookIcon from "../../assets/facebook.png";
import instagramIcon from "../../assets/instagram.png";
import twitterIcon from "../../assets/twitter.png";

function ContactBanner() {
  return (
    <section
      className="relative bg-cover bg-center text-white h-[50vh] flex items-center px-6 sm:px-10"
      style={{ backgroundImage: `url(${contactBackground})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

      <div className="relative z-10 max-w-6xl mx-auto w-full flex flex-col sm:flex-row justify-between items-center">
        <div className="mb-6 sm:mb-0">
          <p className="text-sm mb-2 font-semibold text-white">
            Call us now: <span className="text-white">(234) 035 374 318</span>
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold max-w-md mb-4">
            Are you looking for professional cleaning services?
          </h2>

          <div className="flex gap-4">
            <a href="#" target="_blank" rel="noreferrer">
              <img
                src={facebookIcon}
                alt="Facebook"
                className="w-8 h-8 hover:scale-110 transition"
              />
            </a>
            <a href="#" target="_blank" rel="noreferrer">
              <img
                src={instagramIcon}
                alt="Instagram"
                className="w-8 h-8 hover:scale-110 transition"
              />
            </a>
            <a href="#" target="_blank" rel="noreferrer">
              <img
                src={twitterIcon}
                alt="Twitter"
                className="w-8 h-8 hover:scale-110 transition"
              />
            </a>
          </div>
        </div>

        <Link
          to="/contact"
          className="border border-white px-6 py-3 rounded hover:bg-white hover:text-black transition"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}

export default ContactBanner;
