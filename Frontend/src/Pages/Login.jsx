import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import authBackground from "../assets/loginbackk.jpg";

const AuthPage = () => {
  const [isLogin, setIsLogin] = React.useState(true);
  const navigate = useNavigate();

  const loginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().min(6, "Too short!").required("Required"),
  });

  const signupSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().min(6, "Too short!").required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Required"),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const endpoint = isLogin ? "/api/auth/login" : "/api/auth/register";
      const payload = isLogin
        ? { email: values.email, password: values.password }
        : { name: values.name, email: values.email, password: values.password };

      const response = await fetch(`http://localhost:3000${endpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("Request failed");

      const data = await response.json();

      if (isLogin) {
        localStorage.setItem("token", data.token);
        alert("Login successful!");
        navigate("/");
      } else {
        alert("Account created successfully!");
        setIsLogin(true);
      }
    } catch (err) {
      alert("Error: " + err.message);
    }
    setSubmitting(false);
  };

  return (
    <>
      <Header />
      <div
        className="relative min-h-screen bg-cover bg-center flex items-center justify-center px-4 py-12"
        style={{ backgroundImage: `url(${authBackground})` }}
      >
        <div className="absolute inset-0 bg-black opacity-40 z-0" />
        <div className="relative z-10 bg-white/85 p-8 shadow-lg rounded-lg w-full max-w-md border border-green-100">
          <h2 className="text-center text-3xl font-extrabold text-gray-800 mb-6">
            {isLogin ? "Sign in to your account" : "Create a new account"}
          </h2>

          <Formik
            initialValues={{
              name: "",
              email: "",
              password: "",
              confirmPassword: "",
            }}
            validationSchema={isLogin ? loginSchema : signupSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-6">
                {!isLogin && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Full Name
                    </label>
                    <Field
                      name="name"
                      type="text"
                      className="mt-1 w-full px-3 py-2 border rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <Field
                    name="email"
                    type="email"
                    className="mt-1 w-full px-3 py-2 border rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <Field
                    name="password"
                    type="password"
                    className="mt-1 w-full px-3 py-2 border rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                {!isLogin && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Confirm Password
                    </label>
                    <Field
                      name="confirmPassword"
                      type="password"
                      className="mt-1 w-full px-3 py-2 border rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                    />
                    <ErrorMessage
                      name="confirmPassword"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-2 px-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-md shadow transition"
                >
                  {isSubmitting
                    ? "Processing..."
                    : isLogin
                    ? "Sign in"
                    : "Sign up"}
                </button>
              </Form>
            )}
          </Formik>

          <div className="mt-6 text-center">
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-green-600 hover:underline text-sm"
            >
              {isLogin
                ? "Create a new account"
                : "Already have an account? Sign in"}
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AuthPage;
