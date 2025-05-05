import React from "react";
import { useNavigate } from "react-router-dom";

const PricingPage = () => {
  const navigate = useNavigate();

  const handleBooking = () => {
    navigate("/booking");
  };

  const pricingPlans = [
    {
      name: "Standard",
      description: "Perfect for small apartments",
      price: "$89",
      features: [
        "All cleaners are fully insured",
        "Full flat cleaning",
        "1 bedroom",
        "1 bathroom",
        "Vacuum cleaning",
      ],
    },
    {
      name: "Extended",
      description: "Ideal for family homes",
      price: "$149",
      features: [
        "All cleaners are fully insured",
        "Full house cleaning",
        "2 bedrooms",
        "2 bathrooms",
        "Vacuum cleaning",
      ],
    },
    {
      name: "Premium",
      description: "Best for office spaces",
      price: "$249",
      features: [
        "All cleaners are fully insured",
        "Full office cleaning",
        "Up to 3 workstations",
        "3 bathrooms",
        "Vacuum cleaning",
      ],
    },
  ];

  const comboPackages = [
    {
      title: "Home + Car Cleaning",
      price: "$129",
      details: [
        "1 Bedroom Home Cleaning",
        "Basic Car Interior Cleaning",
        "Same-day service",
      ],
    },
    {
      title: "Monthly Deep Clean",
      price: "$199",
      details: [
        "Full House Deep Clean",
        "Fridge, Oven & Windows included",
        "Scheduled monthly",
      ],
    },
    {
      title: "Complete Office Care",
      price: "$299",
      details: [
        "Up to 4 Workstations",
        "Bathroom & Kitchen Cleaning",
        "Bi-weekly service",
      ],
    },
  ];

  const addOns = [
    { name: "Window cleaning", price: "$30" },
    { name: "Fridge cleaning", price: "$25" },
    { name: "Oven cleaning", price: "$35" },
    { name: "Laundry service", price: "$40" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Main Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Exceptional cleaning at reasonable prices
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Pay securely online and manage the booking via desktop or via the
            mobile app.
          </p>
        </div>

        {/* Pricing Plans */}
        <div className="flex flex-col md:flex-row items-stretch gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className="flex-1 bg-white rounded-lg shadow-md overflow-hidden flex flex-col border border-green-100"
            >
              <div className="p-8 flex-grow">
                <h2 className="text-2xl font-bold text-gray-800 text-center mb-2">
                  {plan.name}
                </h2>
                <p className="text-gray-600 text-center mb-6">
                  {plan.description}
                </p>
                <p className="text-4xl font-bold text-center text-green-600 mb-8">
                  {plan.price}
                </p>
                <ul className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg
                        className="h-6 w-6 text-green-500 mr-3 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="px-8 pb-8 pt-6 bg-green-50">
                <button
                  onClick={handleBooking}
                  className="w-full py-3 px-6 bg-green-600 hover:bg-green-700 text-white font-medium rounded-md transition-colors shadow-md hover:shadow-lg"
                >
                  Subscribe Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Combo Packages */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">
            Special Combo Packages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {comboPackages.map((pkg, index) => (
              <div
                key={index}
                className="bg-white border border-green-100 rounded-xl shadow-md p-8 text-center"
              >
                <h3 className="text-xl font-semibold text-green-700 mb-4">
                  {pkg.title}
                </h3>
                <p className="text-4xl font-bold text-gray-800 mb-6">
                  {pkg.price}
                </p>
                <ul className="space-y-3 text-gray-700 mb-6 text-left">
                  {pkg.details.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <svg
                        className="h-5 w-5 text-green-500 mr-2 mt-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={handleBooking}
                  className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-md transition"
                >
                  Book Now
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Add-On Services */}
        <div className="mt-24 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">
            Need something extra?
          </h2>
          <div className="bg-white rounded-lg shadow-md p-8 max-w-4xl mx-auto border border-green-100">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {addOns.map((service, index) => (
                <li key={index} className="flex items-start">
                  <svg
                    className="h-6 w-6 text-green-500 mr-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <div>
                    <span className="text-gray-800 font-medium">
                      {service.name}
                    </span>
                    <span className="text-gray-600 ml-2">+{service.price}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
