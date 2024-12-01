import React from 'react';
import { Div } from '../Common/Index';
import { Contact, ContactForm } from '../ui/Index';

export const ContactUs = () => {
  return (
    <Div className="text-white grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 px-4 md:px-6 lg:px-20 mb-10">
      {/* Contact Section */}
      <Div className="flex items-center justify-center bg-secondary rounded-2xl md:rounded-r-none w-full p-2 sm:p-4">
        <Contact />
      </Div>

      {/* Contact Form Section */}
      <Div className="bg-base-100 shadow-xl py-4 sm:bg-transparent  rounded-2xl md:rounded-l-none w-full">
        <ContactForm />
      </Div>
    </Div>
  );
};
