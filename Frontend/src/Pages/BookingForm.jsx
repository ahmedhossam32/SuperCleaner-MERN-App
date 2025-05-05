import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import backgroundImage from "../assets/image1aboutus.jpeg";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("* Name is required"),
  email: Yup.string().email("* Invalid email").required("* Email is required"),
  phone: Yup.string().required("* Phone number is required"),
  address: Yup.string().required("* Address is required"),
  serviceType: Yup.string().required("* Service type is required"),
  date: Yup.string().required("* Date is required"),
  time: Yup.string().required("* Time is required"),
});

const BookingForm = () => {
  const [confirmation, setConfirmation] = useState(null);
  const navigate = useNavigate();

  const generateBookingId = () => Math.floor(1000 + Math.random() * 9000);

  return (
    <div
      className="min-h-screen bg-cover bg-center relative"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-white/30 backdrop-blur-sm z-0"></div>

      <div className="relative z-10">
        <Header />

        <Formik
          initialValues={{
            name: "",
            email: "",
            phone: "",
            address: "",
            serviceType: "",
            date: "",
            time: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            const token = localStorage.getItem("token");

            if (!token) {
              alert("Please log in to submit a booking.");
              navigate("/login");
              return;
            }

            const bookingId = generateBookingId();
            const bookingData = { ...values, bookingId };

            fetch("http://localhost:3000/api/bookings", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
              body: JSON.stringify(bookingData),
            })
              .then((res) => {
                if (!res.ok) throw new Error("Failed to submit booking");
                return res.json();
              })
              .then(() => {
                setConfirmation(bookingData);
                resetForm();
              })
              .catch((err) => {
                console.error(err);
                alert(
                  "Error submitting booking. Please ensure you are logged in."
                );
              });
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="text-center py-10">
                <h1 className="text-3xl font-bold text-black">
                  Book a Cleaning Service
                </h1>
              </div>

              <div className="flex justify-center px-4">
                <div className="bg-white/90 backdrop-blur-md p-8 rounded-lg shadow-lg w-full max-w-xl space-y-6">
                  {["name", "email", "phone", "address", "date", "time"].map(
                    (field) => (
                      <div
                        key={field}
                        className="flex flex-col sm:flex-row items-start sm:items-center"
                      >
                        <label
                          htmlFor={field}
                          className="w-32 font-medium mb-2 sm:mb-0"
                        >
                          {field.charAt(0).toUpperCase() + field.slice(1)}:
                        </label>
                        <div className="w-full">
                          <Field
                            type={
                              field === "date"
                                ? "date"
                                : field === "time"
                                ? "time"
                                : "text"
                            }
                            id={field}
                            name={field}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                          />
                          <ErrorMessage
                            name={field}
                            component="div"
                            className="text-red-500 text-sm mt-1"
                          />
                        </div>
                      </div>
                    )
                  )}

                  <div className="flex flex-col sm:flex-row items-start sm:items-center">
                    <label
                      htmlFor="serviceType"
                      className="w-32 font-medium mb-2 sm:mb-0"
                    >
                      Service Type:
                    </label>
                    <div className="w-full">
                      <Field
                        as="select"
                        id="serviceType"
                        name="serviceType"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      >
                        <option value="">Select a service type</option>
                        <option value="Home/Office Cleaning">
                          Home/Office Cleaning
                        </option>
                        <option value="Car Cleaning">Car Cleaning</option>
                        <option value="Laundary Service">
                          Laundary Service
                        </option>
                        <option value="Ironing">Ironing</option>
                        <option value="Window Cleaning">Window Cleaning</option>
                        <option value="Roof Cleaning">Roof Cleaning</option>
                      </Field>
                      <ErrorMessage
                        name="serviceType"
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>
                  </div>

                  <div className="text-center pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-green-600 text-white font-semibold px-8 py-3 rounded-full hover:bg-green-700 transition duration-300"
                    >
                      Submit Booking
                    </button>
                  </div>
                </div>
              </div>
            </Form>
          )}
        </Formik>

        {confirmation && (
          <div className="max-w-xl mx-auto mt-10 bg-white/90 p-6 rounded-lg shadow text-center border border-green-100">
            <h2 className="text-xl font-semibold text-green-700 mb-4">
              Thank you for your booking!
            </h2>
            <p className="mb-1">
              Booking ID: <strong>{confirmation.bookingId}</strong>
            </p>
            <p className="mb-1">Name: {confirmation.name}</p>
            <p className="mb-1">Email: {confirmation.email}</p>
            <p className="mb-1">Phone: {confirmation.phone}</p>
            <p className="mb-1">Address: {confirmation.address}</p>
            <p className="mb-1">Service Type: {confirmation.serviceType}</p>
            <p className="mb-1">Date: {confirmation.date}</p>
            <p className="mb-1">Time: {confirmation.time}</p>
          </div>
        )}

        <Footer />
      </div>
    </div>
  );
};

export default BookingForm;
