"use client";
import { useFormik } from "formik";
import * as Yup from "yup";

import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGoogle,
  FaRegEnvelope,
} from "react-icons/fa";

import { MdLockOutline } from "react-icons/md";

const Login = () => {
  const loginValidationScheme = Yup.object().shape({
    email: Yup.string().required("Email is required").email("Email in Invalid"),
    password: Yup.string().required("Password is required"),
  });

  const loginForm = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm();
    },
    validationSchema: loginValidationScheme,
  });

  return (
    <>
      <div className="flex fle-col items-center justify-center min-h-screen py-2 bg-gray-100">
        <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
          <div className="bg-white rounded-2xl shadow-2xl flex max-w-4xl">
            {/* form */}

            <div className="p-10">
              <h2 className="text-3xl font-bold text-cyan-950 mb-2">LOGIN</h2>
              <div className="border-2 w-10 border-cyan-950 inline-block mb-2"></div>
              {/* Social Icons */}
              <div className="flex justify-center my-2">
                <a
                  href="#"
                  className="border-2 border-gray-200 rounded-full p-3 mx-1"
                >
                  <FaFacebookF className="text-sm" />
                </a>
                <a
                  href="#"
                  className="border-2 border-gray-200 rounded-full p-3 mx-1"
                >
                  <FaLinkedinIn className="text-sm" />
                </a>
                <a
                  href="#"
                  className="border-2 border-gray-200 rounded-full p-3 mx-1"
                >
                  <FaGoogle className="text-sm" />
                </a>
              </div>

              <p className="text-gray-400 my-3">or use your email account</p>

              <div className="flex flex-col items-center  ">
                <div className="bg-gray-100 w-64 p-2 flex items-center mb-2">
                  <FaRegEnvelope className="text-gray-400 mr-2" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="bg-gray-100 outline-none text-sm flex-1"
                  />
                </div>
              </div>

              <div className="flex flex-col items-center  ">
                <div className="bg-gray-100 w-64 p-2 flex items-center mb-2">
                  <MdLockOutline className="text-gray-400 mr-2" />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="bg-gray-100 outline-none text-sm flex-1"
                  />
                </div>
                <div className="flex justify-between w-64 mb-5">
                  <lable className="flex items-center text-xs">
                    <input
                      type="checkbox"
                      name="remember"
                      className=" mr-1 bg-white"
                    />{" "}
                    Remember me
                  </lable>
                  <a href="#" className="text-xs ">
                    Forgot Password?
                  </a>
                </div>
              </div>
              <a
                href="#"
                className="border-2 border-cyan-950 text-cyan-950 rounded-full  py-2 px-12 inline-block font-semibold hover:bg-cyan-950 hover:text-white "
              >
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
