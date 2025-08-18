'use client';

import React, { useState } from 'react';
import { MapPin, Mail, Phone, Github, Linkedin } from 'lucide-react';
import { ContactItem, SocialIcon } from './ContactItem';
import { SectionHeader } from './SectionHeader';
import { UpworkIcon } from './ui/UpworkIcon';
import { Input } from './ui/Input';
import Button from './ui/Button';

interface FormData {
  fullName: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  subject?: string;
  message?: string;
}

// Main ContactSection Component
const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const updateFormField = (field: keyof FormData) => (value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Handle success
      console.log('Form submitted:', formData);
      alert('Message sent successfully!');

      // Reset form
      setFormData({
        fullName: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="dark:bg-background bg-[#1A202C] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 space-y-4 text-center md:mb-16">
          <div className="inline-block">
            <p className="text-primary text-sm uppercase md:text-base">CONTACT US</p>
          </div>
          <h2 className="text-3xl leading-tight font-semibold text-white sm:text-4xl md:text-5xl xl:text-6xl">
            Get in touch
          </h2>

          <p className="text-center text-xs text-white md:text-sm">
            Have a project in mind? We'd love to hear from you
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Left Side */}
          <div className="space-y-12">
            {/* Contact Information */}
            <div>
              <h3 className="mb-8 text-2xl font-bold text-white">Contact Information</h3>
              <div className="space-y-6">
                <ContactItem
                  icon={MapPin}
                  text="123 Innovation Street, Tech Valley, CA 94043, USA"
                  type="address"
                />
                <ContactItem icon={Mail} text="info@kiglance.com" type="email" />
                <ContactItem icon={Phone} text="(+250) 780000000" type="phone" />
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="mb-8 text-2xl font-bold text-white">Follow Us</h3>
              <div className="flex items-center gap-4">
                <SocialIcon icon={UpworkIcon} href="https://upwork.com" />
                <SocialIcon icon={Linkedin} href="https://linkedin.com" />
                <SocialIcon icon={Github} href="https://github.com" />
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div>
            <div className="space-y-6">
              {/* Name and Email Row */}
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <Input
                  label="Full Name"
                  name="fullName"
                  placeholder="Full Name"
                  required
                  value={formData.fullName}
                  onChange={updateFormField('fullName')}
                  error={errors.fullName}
                />
                <Input
                  label="Email Address"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                  value={formData.email}
                  onChange={updateFormField('email')}
                  error={errors.email}
                />
              </div>

              {/* Subject */}
              <Input
                label="Subject"
                name="subject"
                placeholder="Project Inquiry"
                required
                value={formData.subject}
                onChange={updateFormField('subject')}
                error={errors.subject}
              />

              {/* Message */}
              <Input
                label="Message"
                name="message"
                type="textarea"
                placeholder="Tell us about your project..."
                required
                value={formData.message}
                onChange={updateFormField('message')}
                error={errors.message}
              />

              {/* Submit Button */}
              <Button onClick={handleSubmit} disabled={isSubmitting} className="w-full">
                {isSubmitting ? 'Sending Message...' : 'Send Message'}
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-800" />
      </div>
    </section>
  );
};

export default ContactSection;
