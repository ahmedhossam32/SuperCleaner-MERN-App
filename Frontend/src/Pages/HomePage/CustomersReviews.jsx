import React from "react";

const reviews = [
  {
    id: 1,
    text: "I’ve been buying liquid soap from Super Cleaner for my restaurant, and it’s fantastic! The quality is outstanding, and they even customized the scent for me. My customers love the clean feel. Great value!",
    name: "Amaka E.",
    role: "Customer",
  },
  {
    id: 2,
    text: "Their cleaning service is top-notch and fits perfectly within my budget. My office looks spotless every time they visit. I appreciate their attention to detail and friendly approach!",
    name: "Tunde O.",
    role: "Customer",
  },
  {
    id: 3,
    text: "Super Cleaner did an amazing job fumigating my home. Their team was punctual, thorough, and very professional. I haven’t had any pest issues since. Highly recommended!",
    name: "Grace A.",
    role: "Customer",
  },
];

function CustomerReviews() {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <p className="text-center text-sm font-semibold mb-2 text-gray-600">
        Customer reviews
      </p>
      <h2 className="text-4xl font-bold text-center mb-10 text-black">
        What our customers are saying
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {reviews.map((review) => (
          <div
            key={review.id}
            className={`group p-6 shadow-md rounded-lg bg-white text-gray-800 hover:bg-blue-500 hover:text-white transition duration-300`}
          >
            <div className="text-3xl mb-4 group-hover:text-white text-blue-500 transition-colors">
              ❝
            </div>
            <p className="mb-6 text-sm">{review.text}</p>
            <div className="font-semibold">{review.name}</div>
            <div className="text-sm opacity-80">Customer</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CustomerReviews;
