"use client";

import { useState } from "react";
import { openContactEmail } from "@/lib/contact";
import { Wrench, Calendar, Clock, CheckCircle, Phone, Mail } from "lucide-react";

export default function ServicingPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    vehicle: "",
    registration: "",
    serviceType: "",
    preferredDate: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    openContactEmail("Motorhome service request", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const services = [
    {
      icon: <Wrench size={32} />,
      title: "Routine Servicing",
      description: "Comprehensive servicing to keep your vehicle in perfect condition and maintain warranty requirements.",
    },
    {
      icon: <Calendar size={32} />,
      title: "MOT Testing",
      description: "Full MOT testing service for motorhomes and campervans with competitive pricing.",
    },
    {
      icon: <Clock size={32} />,
      title: "Repairs & Maintenance",
      description: "Expert repairs for all makes and models, from minor fixes to major overhauls.",
    },
    {
      icon: <CheckCircle size={32} />,
      title: "Habitation Checks",
      description: "Thorough inspection of living areas, gas, electrical, and water systems.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <div className="bg-secondary text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Servicing & Repairs</h1>
          <p className="text-xl text-gray-300">
            Expert care for your motorhome or campervan in our 20-bay workshop
          </p>
        </div>
      </div>

      {/* Services Overview */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Why Choose Our Service Centre */}
        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold mb-6 text-secondary">Why Choose Our Service Centre</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-start gap-3">
              <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
              <div>
                <h3 className="font-semibold mb-1">Manufacturer Approved</h3>
                <p className="text-gray-600 text-sm">We're approved by major manufacturers to carry out warranty work.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
              <div>
                <h3 className="font-semibold mb-1">Experienced Technicians</h3>
                <p className="text-gray-600 text-sm">Our team has years of experience with all major motorhome brands.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
              <div>
                <h3 className="font-semibold mb-1">20-Bay Workshop</h3>
                <p className="text-gray-600 text-sm">Large capacity means shorter waiting times for your service.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
              <div>
                <h3 className="font-semibold mb-1">Genuine Parts</h3>
                <p className="text-gray-600 text-sm">We only use genuine manufacturer parts for repairs.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
              <div>
                <h3 className="font-semibold mb-1">Transparent Pricing</h3>
                <p className="text-gray-600 text-sm">No hidden costs - we provide detailed quotes before any work begins.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
              <div>
                <h3 className="font-semibold mb-1">Convenient Location</h3>
                <p className="text-gray-600 text-sm">Easy access with ample parking for motorhomes of all sizes.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Booking Form */}
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6 text-secondary">Book a Service</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <p className="text-sm text-gray-600">Your email app will open with your service request ready to send.</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Your phone number"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="vehicle" className="block text-sm font-medium text-gray-700 mb-2">
                    Vehicle Make/Model *
                  </label>
                  <input
                    type="text"
                    id="vehicle"
                    name="vehicle"
                    required
                    value={formData.vehicle}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="e.g., Frankia I 7400"
                  />
                </div>
                <div>
                  <label htmlFor="registration" className="block text-sm font-medium text-gray-700 mb-2">
                    Registration Number
                  </label>
                  <input
                    type="text"
                    id="registration"
                    name="registration"
                    value={formData.registration}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="AB12 CDE"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-2">
                  Service Type *
                </label>
                <select
                  id="serviceType"
                  name="serviceType"
                  required
                  value={formData.serviceType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="">Select service type</option>
                  <option value="routine">Routine Service</option>
                  <option value="mot">MOT Test</option>
                  <option value="repair">Repair</option>
                  <option value="habitation">Habitation Check</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Date
                </label>
                <input
                  type="date"
                  id="preferredDate"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                  placeholder="Any specific requirements or concerns..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-semibold transition"
              >
                Book Service
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-secondary">Contact Service Centre</h2>
            
            <div className="space-y-6 mb-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Phone size={24} className="text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Service Team</h3>
                  <a href="tel:+447412800685" className="text-gray-600 hover:text-primary">
                    +44 7412 800685
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Mail size={24} className="text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <a href="mailto:motorhomessalesuk@gmail.com" className="text-gray-600 hover:text-primary">
                    motorhomessalesuk@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h3 className="font-semibold mb-4 text-secondary">Service Centre Opening Hours</h3>
              <div className="space-y-2 text-gray-600">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>8:30am - 5:30pm</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>9:00am - 12:00pm</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="font-semibold mb-2 text-red-700">Breakdown Assistance</h3>
              <p className="text-gray-600 text-sm mb-3">
                If you experience a breakdown, please contact our emergency line during business hours.
              </p>
              <a href="tel:+447412800685" className="text-red-700 font-medium hover:underline">
                Emergency: +44 7412 800685
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

