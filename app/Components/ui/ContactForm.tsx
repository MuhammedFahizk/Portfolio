import React, { useState, ChangeEvent, FormEvent } from 'react';
import { FiMail } from 'react-icons/fi';
import { Div } from '../Common/Index';
import emailjs from '@emailjs/browser';
import { TbLoaderQuarter } from 'react-icons/tb';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean | null>(null); // Track success or error

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true); // Start loading

    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '';
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '';
    const userID = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '';

    try {
      const emailParams = {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      };

      const res = await emailjs.send(serviceID, templateID, emailParams, userID);

      if (res.status === 200) {
        setSuccess(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
        console.log('Message sent successfully!');
      } else {
        setSuccess(false);
        console.error('Failed to send message. Please try again later.');
      }
    } catch (error) {
      setSuccess(false);
      console.error('Failed to send message. Please try again later.', error);
    } finally {
      setIsSubmitting(false); // Stop loading
    }
  };

  return (
    <Div className="p-6 sm:p-8 md:p-12 rounded-lg shadow-lg max-w-md md:max-w-2xl mx-auto bg-secondary text-neutral">
      {/* Header Section */}
      <Div className="text-center mb-6">
        <FiMail className="text-accent text-4xl inline-block mb-2" />
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary">Get in Touch</h2>
        <p className="text-xs sm:text-sm text-neutral mt-2">
          We&apos;d love to hear from you! Fill out the form below to reach us.
        </p>
      </Div>

      {/* Form Section */}
      <form className="space-y-3" onSubmit={handleSubmit}>
        {/* Full Name */}
        <Div>
          <label htmlFor="name" className="block text-sm font-medium text-neutral mb-1">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border border-neutral rounded-md shadow-sm bg-base-100 text-neutral focus:ring-primary focus:border-primary"
            placeholder="John Doe"
            required
          />
        </Div>

        {/* Email Address */}
        <Div>
          <label htmlFor="email" className="block text-sm font-medium text-neutral mb-1">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border border-neutral rounded-md shadow-sm bg-base-100 text-neutral focus:ring-primary focus:border-primary"
            placeholder="example@email.com"
            required
          />
        </Div>

        {/* Subject */}
        <Div>
          <label htmlFor="subject" className="block text-sm font-medium text-neutral mb-1">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full p-3 border border-neutral rounded-md shadow-sm bg-base-100 text-neutral focus:ring-primary focus:border-primary"
            placeholder="Subject of your message"
            required
          />
        </Div>

        {/* Message */}
        <Div>
          <label htmlFor="message" className="block text-sm font-medium text-neutral mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={2}
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border border-neutral rounded-md shadow-sm bg-base-100 text-neutral focus:ring-primary focus:border-primary"
            placeholder="Write your message here..."
            required
          />
        </Div>

        {/* Submit Button */}
        <Div className="text-center">
          <button
            type="submit"
            className={`w-full bg-primary text-base-100 p-3 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''} rounded-md font-semibold hover:bg-accent transition-colors duration-300 flex items-center justify-center gap-2`}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span className="animate-spin text-lg">
                <TbLoaderQuarter />
              </span>
            ) : (
              <FiMail className="text-lg" />
            )}
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </Div>
      </form>

      {/* Success/Error Message */}
      {success === true && (
        <p className="text-green-500 text-center mt-4">Message sent successfully!</p>
      )}
      {success === false && (
        <p className="text-red-500 text-center mt-4">Failed to send message. Please try again.</p>
      )}
    </Div>
  );
};
