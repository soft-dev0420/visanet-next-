"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter
import Axios from "axios";
import define_data from '../const'; // Import the define_data module

Axios.defaults.baseURL = define_data.url;

const SignupPage = () => {
  const [fullname, setFullname] = useState("");
  const [email, setFullemail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState(""); // State for error message
  const router = useRouter(); // Initialize useRouter

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const signUp = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    const data = {
      email: email,
      password: password,
      username: fullname,
    };

    Axios.post("/auth/signup", data)
      .then((success) => {
        console.log(success);
        setErrorMessage(""); // Clear any previous error message
        router.push("/signin"); // Redirect to the Sign In page
      })
      .catch((err) => {
        if (err.response && err.response.data && err.response.data.msg) {
          setErrorMessage(err.response.data.msg); // Set error message from server
        } else {
          setErrorMessage("An unexpected error occurred. Please try again."); // Fallback error message
        }
      });
  };

  return (
    <>
      <section className="relative z-10 overflow-hidden pb-16 pt-36 md:pb-20 lg:pb-28 lg:pt-[180px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="shadow-three mx-auto max-w-[500px] rounded bg-white px-6 py-10 dark:bg-dark sm:p-[60px]">
                <h3 className="mb-3 text-center text-2xl font-bold text-black dark:text-white sm:text-3xl">
                  Create your account
                </h3>
                
                {errorMessage && (
                  <p className="mb-4 text-center text-sm text-red-500">
                    {errorMessage}
                  </p>
                )}
                <form>
                  <div className="mb-8">
                    <label
                      htmlFor="name"
                      className="mb-3 block text-sm text-dark dark:text-white"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={fullname}
                      onChange={(e) => setFullname(e.target.value)}
                      placeholder="Enter your full name"
                      className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                    />
                  </div>
                  <div className="mb-8">
                    <label
                      htmlFor="email"
                      className="mb-3 block text-sm text-dark dark:text-white"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={email}
                      onChange={(e) => setFullemail(e.target.value)}
                      placeholder="Enter your Email"
                      className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                    />
                  </div>
                  <div className="mb-8">
                    <label
                      htmlFor="password"
                      className="mb-3 block text-sm text-dark dark:text-white"
                    >
                      Password
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your Password"
                        className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                      />
                      <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-body-color hover:text-primary"
                      >
                        {showPassword ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M3.98 8.223C5.78 5.532 8.74 3.75 12 3.75c3.26 0 6.22 1.782 8.02 4.473a11.954 11.954 0 011.98 3.777 11.954 11.954 0 01-1.98 3.777C18.22 18.468 15.26 20.25 12 20.25c-3.26 0-6.22-1.782-8.02-4.473A11.954 11.954 0 012 12c0-1.364.35-2.65.98-3.777z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M3.98 8.223C5.78 5.532 8.74 3.75 12 3.75c3.26 0 6.22 1.782 8.02 4.473a11.954 11.954 0 011.98 3.777 11.954 11.954 0 01-1.98 3.777C18.22 18.468 15.26 20.25 12 20.25c-3.26 0-6.22-1.782-8.02-4.473A11.954 11.954 0 012 12c0-1.364.35-2.65.98-3.777z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M2.25 2.25l19.5 19.5"
                            />
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>
                  <div className="mb-6">
                    <button
                      className="shadow-submit dark:shadow-submit-dark flex w-full items-center justify-center rounded-sm bg-primary px-9 py-4 text-base font-medium text-white duration-300 hover:bg-primary/90"
                      onClick={(e) => signUp(e)}
                    >
                      Sign up
                    </button>
                  </div>
                </form>
                <p className="text-center text-base font-medium text-body-color">
                  Already using Startup?{" "}
                  <Link href="/signin" className="text-primary hover:underline">
                    Sign in
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignupPage;