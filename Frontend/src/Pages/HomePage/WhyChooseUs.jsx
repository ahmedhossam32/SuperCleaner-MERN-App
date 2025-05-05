import React from "react";

const whyData = [
  {
    id: 1,
    title: "Reliable and professional team",
    description:
      "Our skilled and experienced team is committed to delivering exceptional service.",
    icon: "📅",
  },
  {
    id: 2,
    title: "Affordable pricing",
    description:
      "Quality service doesn’t have to break the bank, we ensure you get the best value.",
    icon: "📱",
  },
  {
    id: 3,
    title: "Eco-friendly and safe solutions",
    description:
      "We prioritize using non-toxic, eco-friendly solutions to protect your health and the environment.",
    icon: "☕",
  },
];

function WhyChooseUs() {
  return (
    <section className="py-0 px-6  bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-12 text-black">
        Why Choose Us
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {whyData.map((item) => (
          <div
            key={item.id}
            className="bg-white border rounded-lg p-6 shadow-md hover:shadow-lg transition text-center"
          >
            <div className="text-4xl mb-4">{item.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyChooseUs;
