import React from "react";

const Contact = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <h2 className="text-2xl font-bold text-indigo-600 text-center">
        Contact Me
      </h2>
      <div className="flex flex-col sm:flex-row justify-between items-center mt-8 max-w-4xl mx-auto">
        <div className="flex flex-col items-center">
          <p className="text-gray-600">LinkedIn</p>
          <p className="text-gray-600">Email</p>
          <p className="text-gray-600">GitHub</p>
        </div>
        <form className="mt-8 sm:mt-0 w-full sm:w-1/2">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-2 border rounded-md mb-4"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-2 border rounded-md mb-4"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-2 border rounded-md mb-4"
          ></textarea>
          <button className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
