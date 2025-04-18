"use client"
import { useState, useContext, useEffect } from "react";
import { UserContext } from "@/context/UserContext";
import Axios from 'axios';
import define_data from '@/app/const';
import { useRouter } from "next/navigation"; // Import useRouter


Axios.defaults.baseURL = define_data.url;
const Contact = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { login} = useContext(UserContext);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // State for error message
  const router = useRouter(); // Initialize useRouter


  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const save = (e) => {
    e.preventDefault()
    const data = {
      name: name,
      password: password
    };
    Axios.post('/auth/update', data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("user")}`,
      }
    })
      .then((success) => {
        setErrorMessage(""); // Clear any previous error message
        login(success.data.token)
        router.push("/");
      })
      .catch((err) => {
        if (err.response && err.response.data && err.response.data.msg) {
          setErrorMessage(err.response.data.msg); // Set error message from server
        } else {
          setErrorMessage("An unexpected error occurred. Please try again."); // Fallback error message
        }
      });
  }

  useEffect(() => {
    // setName(user.user.username)
  }, [])

  return (
    <section id="contact" className="overflow-hidden py-2 md:py-2 lg:py-2">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="wow fadeInUp shadow-three dark:bg-gray-dark mb-12 rounded-sm bg-white px-8 py-1 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
              "
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                My Account
              </h2>
              {errorMessage && (
                <p className="mb-4 text-center text-sm text-red-500">
                  {errorMessage}
                </p>
              )}
              <form>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <img src="/images/back/3.jpg" alt="user" className="" />
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                 
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
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
                    <div className="w-full px-4 flex justify-center">
                      <button
                        className="shadow-submit dark:shadow-submit-dark rounded-sm bg-primary px-9 py-4 text-base font-medium text-white duration-300 hover:bg-primary/90 w-1/2"
                        onClick={(e) => save(e)}
                      >
                        Save
                      </button>
                    </div>
                  </div>                  
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
