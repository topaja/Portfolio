import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { contact } from "../assets/assets";


const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .sendForm(
        "service_mvssm3q", // Service ID
        "template_md3rbi9", // Template ID
        form.current,
        "owL_dpKspQSvmValM" // Public Key
      )
      .then(
        (result) => {
          setStatus("Message sent successfully!");
          form.current.reset();
          // Clear the success message after 3 seconds
          setTimeout(() => {
            setStatus("");
          }, 3000);
        },
        (error) => {
          setStatus("Failed to send message. Please try again.");
          // Clear the error message after 3 seconds
          setTimeout(() => {
            setStatus("");
          }, 3000);
        }
      );
  };

  return (
    <>
      <div className="px-4 lg:px-8 py-16 md:mx-[10%] mx-[4%]">
        <div className="flex flex-col items-center">
          <p className="font-primary text-xs sm:text-sm text-light-text pr-4">
            Get in Touch
          </p>
          <div className="flex items-center justify-center w-full gap-6">
            <div className="max-[420px]:w-10 w-20 sm:w-30 bg-light-primary h-1 mt-2 rounded"></div>
            <p className="text-light-primary font-secondary font-bold text-[18px] sm:text-[22px] w-fit">
              Contact Me
            </p>
            <div className="max-[420px]:w-10 w-20 sm:w-30 bg-light-primary h-1 mr-3 mt-2 rounded"></div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 items-center mt-10">
          <div className="w-full md:w-1/2 flex justify-center">
            <img src={contact} alt="image" className="w-[75%] sm:w-[95%]" />
          </div>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="w-full md:w-1/2 lg:w-2/5"
          >
            <input
              type="text"
              name="user_name"
              placeholder="Full Name"
              required
              className="w-full p-2 border-gray-300 border-2 rounded-lg mb-6 text-md text-light-text pl-4 focus:border-dark-primary focus:outline-none"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Email Address"
              required
              className="w-full p-2 border-gray-300 border-2 rounded-lg mb-6 text-md text-light-text pl-4 focus:border-dark-primary focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              className="w-full px-2 pt-6 h-25 border-gray-300 border-2 rounded-lg mb-4 text-md text-light-text pl-4 focus:border-dark-primary focus:outline-none"
            ></textarea>
            <button
              type="submit"
              className="cursor-pointer w-1/4 px-4 py-2 font-primary bg-light-primary text-white rounded-lg hover:bg-black ease-in-out duration-300 text-sm lg:text-md"
            >
              Submit
            </button>
            {status && <p className="mt-4 text-sm text-center">{status}</p>}
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
