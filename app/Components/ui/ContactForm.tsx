import React from 'react';
import { FiMail } from 'react-icons/fi'; // Importing an icon
import { Div } from '../Common/Index';

export const ContactForm = () => {
  return (
    <Div className="p-6 sm:p-8 md:p-12 rounded-lg shadow-lg max-w-md md:max-w-2xl mx-auto bg-secondary text-neutral">
      {/* Header Section */}
      <Div className="text-center mb-6">
        <FiMail className="text-accent text-4xl inline-block mb-2" />
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary">
          Get in Touch
        </h2>
        <p className="text-xs sm:text-sm text-neutral mt-2">
          We'd love to hear from you! Fill out the form below to reach us.
        </p>
      </Div>

      {/* Form Section */}
      <form className="space-y-4">
        {/* Full Name */}
        <Div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-neutral mb-2"
          >
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full p-3 border border-neutral rounded-md shadow-sm bg-base-100 text-neutral focus:ring-primary focus:border-primary"
            placeholder="John Doe"
          />
        </Div>

        {/* Email Address */}
        <Div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-neutral mb-2"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full p-3 border border-neutral rounded-md shadow-sm bg-base-100 text-neutral focus:ring-primary focus:border-primary"
            placeholder="example@email.com"
          />
        </Div>

        {/* Message */}
        <Div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-neutral mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="w-full p-3 border border-neutral rounded-md shadow-sm bg-base-100 text-neutral focus:ring-primary focus:border-primary"
            placeholder="Write your message here..."
          />
        </Div>

        {/* Submit Button */}
        <Div className="text-center">
          <button
            type="submit"
            className="w-full bg-primary text-base-100 p-3 rounded-md font-semibold hover:bg-accent transition-colors duration-300 flex items-center justify-center gap-2"
          >
            <FiMail className="text-lg" />
            Send Message
          </button>
        </Div>
      </form>
    </Div>
  );
};
