import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import backgroundImage from "../assets/privacypolicy2.jpg";

const PrivacyPolicy = () => {
  return (
    <>
      <Header />

      <div
        className="min-h-screen bg-cover bg-center relative"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Darker overlay for better readability */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-0"></div>

        {/* Main content with white text, left aligned */}
        <div className="relative z-10 max-w-4xl px-8 py-12 text-white text-left">
          <h1 className="text-4xl font-bold text-green-400 mb-6">
            Privacy Policy
          </h1>

          <p className="mb-4">
            At <strong>Super Cleaner</strong>, we are committed to protecting
            your privacy and ensuring that your personal information is handled
            responsibly. This policy outlines how we collect, use, and safeguard
            your data when you use our cleaning services.
          </p>

          <h2 className="text-2xl font-semibold text-green-400 mt-6 mb-2">
            Information We Collect
          </h2>
          <ul className="list-disc list-inside mb-4">
            <li>Your name, phone number, and email address</li>
            <li>Address of the property where the cleaning is required</li>
            <li>Booking dates, times, and preferences</li>
            <li>
              Payment information (handled securely via third-party processors)
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-green-400 mt-6 mb-2">
            How We Use Your Information
          </h2>
          <p className="mb-4">
            Your data is used to schedule and manage your cleaning appointments,
            communicate service updates, process payments, and improve our
            offerings.
          </p>

          <h2 className="text-2xl font-semibold text-green-400 mt-6 mb-2">
            Sharing of Information
          </h2>
          <p className="mb-4">
            We do not sell or rent your information. We may share it only with
            trusted service partners like our cleaners and payment providers,
            strictly for operational purposes.
          </p>

          <h2 className="text-2xl font-semibold text-green-400 mt-6 mb-2">
            Data Security
          </h2>
          <p className="mb-4">
            We use industry-standard encryption and secure systems to protect
            your data. Access to your personal information is limited to
            authorized staff only.
          </p>

          <h2 className="text-2xl font-semibold text-green-400 mt-6 mb-2">
            Your Rights
          </h2>
          <p className="mb-4">
            You have the right to access, update, or delete your personal
            information at any time. Please contact us if you wish to make any
            changes.
          </p>

          <h2 className="text-2xl font-semibold text-green-400 mt-6 mb-2">
            Contact Us
          </h2>
          <p>
            If you have questions about this privacy policy or how your data is
            handled, contact us at{" "}
            <strong className="text-green-300">privacy@supercleaner.com</strong>
            .
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default PrivacyPolicy;
