import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import facebookIcon from "../assets/facebook.png";
import instagramIcon from "../assets/instagram.png";
import twitterIcon from "../assets/twitter.png";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string()
    .matches(/^[0-9]{10,15}$/, "Enter a valid phone number")
    .required("Phone number is required"),
  message: Yup.string().required("Message is required"),
});

function ContactForm() {
  const [submittedData, setSubmittedData] = useState(null);

  return (
    <>
      <Header />
      <section className="bg-white py-12 px-4" id="contact">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Contact Us
            </h2>
            <p className="text-gray-600 mb-6">
              Our friendly team would love to hear from you.
            </p>

            <div className="mb-4">
              <p className="font-semibold">📧 Email</p>
              <p className="text-green-600">contact@supercleaner.com</p>
            </div>

            <div className="mb-4">
              <p className="font-semibold">📞 Phone</p>
              <p className="text-green-600">01234567890</p>
            </div>

            <div className="mb-4">
              <p className="font-semibold">🕒 Office Hours</p>
              <p className="text-gray-600">Mon - Fri: 9am - 5pm</p>
              <p className="text-gray-600">Saturday: 10am - 2pm</p>
              <p className="text-gray-600">Sunday: Closed</p>
            </div>

            <div className="mt-6">
              <p className="font-semibold mb-2">Follow us</p>
              <div className="flex space-x-4">
                <img src={facebookIcon} alt="Facebook" className="w-6 h-6" />
                <img src={instagramIcon} alt="Instagram" className="w-6 h-6" />
                <img src={twitterIcon} alt="Twitter" className="w-6 h-6" />
              </div>
            </div>
          </div>

          <div>
            <Formik
              initialValues={{ name: "", email: "", phone: "", message: "" }}
              validationSchema={validationSchema}
              onSubmit={(values, { resetForm }) => {
                fetch("http://localhost:3000/api/contact", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(values),
                })
                  .then((res) => {
                    if (!res.ok) {
                      throw new Error("Failed to send message");
                    }
                    return res.json();
                  })
                  .then((data) => {
                    setSubmittedData(values);
                    resetForm();
                  })
                  .catch((error) => {
                    console.error("Error:", error);
                    alert("Something went wrong. Please try again later.");
                  });
              }}
            >
              {({ isSubmitting }) => (
                <Form className="space-y-4">
                  {["name", "email", "phone", "message"].map((field) => (
                    <div key={field}>
                      <Field
                        as={field === "message" ? "textarea" : "input"}
                        name={field}
                        type={field === "email" ? "email" : "text"}
                        placeholder={`Your ${
                          field.charAt(0).toUpperCase() + field.slice(1)
                        }`}
                        className="w-full p-3 border rounded"
                        rows={field === "message" ? 5 : undefined}
                      />
                      <ErrorMessage
                        name={field}
                        component="div"
                        className="text-red-500 text-sm"
                      />
                    </div>
                  ))}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition"
                  >
                    Send Message
                  </button>
                </Form>
              )}
            </Formik>

            {submittedData && (
              <div className="mt-8 bg-green-50 border border-green-200 p-4 rounded">
                <h3 className="text-xl font-semibold text-green-700 mb-2">
                  Thank you for contacting us!
                </h3>
                <p>
                  <strong>Name:</strong> {submittedData.name}
                </p>
                <p>
                  <strong>Email:</strong> {submittedData.email}
                </p>
                <p>
                  <strong>Phone:</strong> {submittedData.phone}
                </p>
                <p>
                  <strong>Message:</strong> {submittedData.message}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default ContactForm;
