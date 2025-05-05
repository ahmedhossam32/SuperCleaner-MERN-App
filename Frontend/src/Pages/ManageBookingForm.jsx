import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const validationSchema = Yup.object().shape({
  date: Yup.string().required("Date is required"),
  time: Yup.string().required("Time is required"),
  address: Yup.string().required("Address is required"),
  specialRequests: Yup.string(),
});

const ManageBookingForm = () => {
  const [bookingId, setBookingId] = useState("");
  const [confirmationMessage, setConfirmationMessage] = useState("");
  const isEditable = bookingId.trim() !== "";

  const handleCancelBooking = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please log in first.");
      return;
    }

    if (isEditable) {
      try {
        const response = await fetch(
          `http://localhost:3000/api/bookings/byBookingId/${bookingId}`,
          {
            method: "DELETE",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to cancel booking");
        }

        setConfirmationMessage(`Booking with ID ${bookingId} was cancelled.`);
        setBookingId(""); // Reset field
      } catch (error) {
        console.error(error);
        alert("Error cancelling booking. Please try again.");
      }
    } else {
      setConfirmationMessage("Enter a valid booking ID before cancelling.");
    }
  };

  return (
    <>
      <Header />
      <div className="max-w-3xl mx-auto p-5">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Manage Your Booking
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Please enter your booking ID and modify your booking details below.
        </p>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Booking ID
          </label>
          <input
            type="text"
            placeholder="Enter your booking ID to continue"
            value={bookingId}
            onChange={(e) => {
              setBookingId(e.target.value);
              setConfirmationMessage("");
            }}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
          />
          {!isEditable && (
            <p className="text-red-500 text-sm mt-1">
              Please enter your booking ID to edit the booking.
            </p>
          )}
        </div>

        <Formik
          initialValues={{
            date: "",
            time: "",
            address: "",
            specialRequests: "",
          }}
          validationSchema={validationSchema}
          onSubmit={async (values, { resetForm }) => {
            if (!isEditable) {
              setConfirmationMessage("Please enter a valid booking ID.");
              return;
            }

            const token = localStorage.getItem("token");
            if (!token) {
              alert("Please log in first.");
              return;
            }

            try {
              const response = await fetch(
                `http://localhost:3000/api/bookings/byBookingId/${bookingId}`,
                {
                  method: "PUT",
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                  },
                  body: JSON.stringify({
                    date: values.date,
                    time: values.time,
                    address: values.address,
                    specialRequest: values.specialRequests,
                  }),
                }
              );

              if (!response.ok) throw new Error("Failed to update booking");

              const data = await response.json();
              setConfirmationMessage("Booking updated successfully.");
              resetForm();
            } catch (error) {
              console.error(error);
              alert("Error updating booking. Please try again.");
            }
          }}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Date
                  </label>
                  <Field
                    name="date"
                    type="date"
                    disabled={!isEditable}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                  />
                  <ErrorMessage
                    name="date"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Time
                  </label>
                  <Field
                    name="time"
                    type="time"
                    disabled={!isEditable}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                  />
                  <ErrorMessage
                    name="time"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Service Address
                  </label>
                  <Field
                    name="address"
                    type="text"
                    disabled={!isEditable}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                  />
                  <ErrorMessage
                    name="address"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Special Requests
                  </label>
                  <Field
                    name="specialRequests"
                    as="textarea"
                    rows="3"
                    disabled={!isEditable}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                  />
                  <ErrorMessage
                    name="specialRequests"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
              </div>

              <div className="flex justify-between space-x-4 pt-4">
                <button
                  type="button"
                  onClick={handleCancelBooking}
                  disabled={!isEditable}
                  className="w-1/2 bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-4 rounded-md transition-colors"
                >
                  Cancel Booking
                </button>
                <button
                  type="submit"
                  disabled={!isEditable || isSubmitting}
                  className={`w-1/2 font-bold py-3 px-4 rounded-md transition-colors ${
                    isEditable
                      ? "bg-green-600 hover:bg-green-700 text-white"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
                >
                  Save Changes
                </button>
              </div>

              {confirmationMessage && (
                <div className="mt-6 bg-green-50 border border-green-200 p-4 rounded text-green-700 text-center font-medium">
                  {confirmationMessage}
                </div>
              )}
            </Form>
          )}
        </Formik>
      </div>
      <Footer />
    </>
  );
};

export default ManageBookingForm;
