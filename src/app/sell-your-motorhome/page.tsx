"use client";

import { useState } from "react";
import { openContactEmail } from "@/lib/contact";
import { DollarSign, Calendar, Car, CheckCircle, Phone, Mail } from "lucide-react";

export default function SellYourMotorhomePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    vehicleMake: "",
    vehicleModel: "",
    year: "",
    registration: "",
    mileage: "",
    condition: "",
    additionalInfo: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    openContactEmail("Motorhome valuation request", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const benefits = [
    {
      icon: <DollarSign size={32} />,
      title: "Competitive Prices",
      description: "We offer fair market valuations based on current market conditions and vehicle condition.",
    },
    {
      icon: <Calendar size={32} />,
      title: "Quick Valuation",
      description: "Get your valuation within 24 hours of submitting your details.",
    },
    {
      icon: <Car size={32} />,
      title: "Hassle-Free Process",
      description: "We handle all the paperwork and make the selling process simple and stress-free.",
    },
    {
      icon: <CheckCircle size={32} />,
      title: "Trusted Dealer",
      description: "With over 30 years of experience, we're a trusted name in the motorhome industry.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <div className="bg-secondary text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Sell Your Motorhome</h1>
          <p className="text-xl text-gray-300">
            Get a competitive valuation for your motorhome or campervan today
          </p>
        </div>
      </div>

      {/* Benefits */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* How It Works */}
        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold mb-6 text-secondary">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
              <h3 className="font-semibold mb-2">Submit Details</h3>
              <p className="text-gray-600 text-sm">Fill out our valuation form with your vehicle information.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
              <h3 className="font-semibold mb-2">Get Valuation</h3>
              <p className="text-gray-600 text-sm">Receive a competitive valuation within 24 hours.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
              <h3 className="font-semibold mb-2">Accept Offer</h3>
              <p className="text-gray-600 text-sm">If you're happy with the price, accept our offer.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
              <h3 className="font-semibold mb-2">Get Paid</h3>
              <p className="text-gray-600 text-sm">We handle the paperwork and you get paid quickly.</p>
            </div>
          </div>
        </div>

        {/* Valuation Form */}
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6 text-secondary">Get Your Free Valuation</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <p className="text-sm text-gray-600">Your email app will open with your valuation request ready to send.</p>
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
                  <label htmlFor="vehicleMake" className="block text-sm font-medium text-gray-700 mb-2">
                    Vehicle Make *
                  </label>
                  <select
                    id="vehicleMake"
                    name="vehicleMake"
                    required
                    value={formData.vehicleMake}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">Select make</option>
                    <option value="frankia">Frankia</option>
                    <option value="auto-sleepers">Auto-Sleepers</option>
                    <option value="knaus">Knaus</option>
                    <option value="pilote">Pilote</option>
                    <option value="weinsberg">Weinsberg</option>
                    <option value="globecar">Globecar</option>
                    <option value="yucon">Yucon</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="vehicleModel" className="block text-sm font-medium text-gray-700 mb-2">
                    Vehicle Model *
                  </label>
                  <input
                    type="text"
                    id="vehicleModel"
                    name="vehicleModel"
                    required
                    value={formData.vehicleModel}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="e.g., I 7400"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="year" className="block text-sm font-medium text-gray-700 mb-2">
                    Year *
                  </label>
                  <input
                    type="number"
                    id="year"
                    name="year"
                    required
                    min="1990"
                    max={new Date().getFullYear() + 1}
                    value={formData.year}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="e.g., 2020"
                  />
                </div>
                <div>
                  <label htmlFor="registration" className="block text-sm font-medium text-gray-700 mb-2">
                    Registration *
                  </label>
                  <input
                    type="text"
                    id="registration"
                    name="registration"
                    required
                    value={formData.registration}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="AB12 CDE"
                  />
                </div>
                <div>
                  <label htmlFor="mileage" className="block text-sm font-medium text-gray-700 mb-2">
                    Mileage
                  </label>
                  <input
                    type="number"
                    id="mileage"
                    name="mileage"
                    value={formData.mileage}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="e.g., 25000"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="condition" className="block text-sm font-medium text-gray-700 mb-2">
                  Overall Condition *
                </label>
                <select
                  id="condition"
                  name="condition"
                  required
                  value={formData.condition}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="">Select condition</option>
                  <option value="excellent">Excellent</option>
                  <option value="good">Good</option>
                  <option value="fair">Fair</option>
                  <option value="poor">Poor</option>
                </select>
              </div>

              <div>
                <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Information
                </label>
                <textarea
                  id="additionalInfo"
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                  placeholder="Any additional details about your vehicle, modifications, service history, etc..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-semibold transition"
              >
                Get Free Valuation
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-secondary">Contact Our Valuation Team</h2>
            
            <div className="space-y-6 mb-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Phone size={24} className="text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
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

            {/* What We Buy */}
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h3 className="font-semibold mb-4 text-secondary">What We Buy</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-primary" />
                  Motorhomes (all makes and models)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-primary" />
                  Campervans
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-primary" />
                  New and used vehicles
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-primary" />
                  Single vehicles or part-exchange
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-primary" />
                  Any age or condition considered
                </li>
              </ul>
            </div>

            {/* Why Sell to Us */}
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-6">
              <h3 className="font-semibold mb-4 text-primary">Why Sell to Us?</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-primary flex-shrink-0 mt-0.5" />
                  <span>No advertising fees or waiting for buyers</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-primary flex-shrink-0 mt-0.5" />
                  <span>Secure payment guaranteed</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-primary flex-shrink-0 mt-0.5" />
                  <span>We handle all paperwork</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-primary flex-shrink-0 mt-0.5" />
                  <span>Free collection from your location</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

