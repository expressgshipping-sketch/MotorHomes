import { Briefcase, Users, Target, Award, Mail, Phone } from "lucide-react";

export default function CareersPage() {
  const vacancies = [
    {
      title: "Sales Executive",
      department: "Sales",
      type: "Full-time",
      location: "Newark, Nottinghamshire",
      description: "Join our sales team and help customers find their perfect motorhome or campervan. Previous sales experience in the automotive or leisure industry is preferred but not essential.",
    },
    {
      title: "Service Technician",
      department: "Service Centre",
      type: "Full-time",
      location: "Newark, Nottinghamshire",
      description: "We're looking for experienced technicians to join our 20-bay workshop. Must have experience with motorhomes or similar vehicles. Manufacturer training available.",
    },
    {
      title: "Customer Service Advisor",
      department: "Administration",
      type: "Full-time",
      location: "Newark, Nottinghamshire",
      description: "Provide excellent customer service across all departments. Handle enquiries, bookings, and general administration. Strong communication skills essential.",
    },
    {
      title: "Marketing Assistant",
      department: "Marketing",
      type: "Full-time / Part-time",
      location: "Newark, Nottinghamshire",
      description: "Support our marketing team with social media, content creation, and event coordination. Creative mindset and digital marketing knowledge required.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <div className="bg-secondary text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Careers</h1>
          <p className="text-xl text-gray-300">
            Join our team and be part of a successful family-run business
          </p>
        </div>
      </div>

      {/* Why Work With Us */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-secondary text-center">Why Work With Us?</h2>
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users size={32} className="text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Family Environment</h3>
            <p className="text-gray-600">
              We're a family-run business that treats every team member like family.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target size={32} className="text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Career Development</h3>
            <p className="text-gray-600">
              We invest in our team with training and opportunities for advancement.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award size={32} className="text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Competitive Benefits</h3>
            <p className="text-gray-600">
              We offer competitive salaries, pension schemes, and employee benefits.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Briefcase size={32} className="text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Industry Leader</h3>
            <p className="text-gray-600">
              Join a well-established, respected company in the motorhome industry.
            </p>
          </div>
        </div>

        {/* Current Vacancies */}
        <h2 className="text-3xl font-bold mb-8 text-secondary">Current Vacancies</h2>
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {vacancies.map((vacancy, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold">{vacancy.title}</h3>
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  {vacancy.type}
                </span>
              </div>
              <div className="space-y-2 text-sm text-gray-600 mb-4">
                <div className="flex items-center gap-2">
                  <Briefcase size={16} />
                  <span>{vacancy.department}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users size={16} />
                  <span>{vacancy.location}</span>
                </div>
              </div>
              <p className="text-gray-600 mb-6">{vacancy.description}</p>
              <button className="w-full bg-secondary hover:bg-secondary-light text-white px-6 py-3 rounded-lg font-medium transition">
                Apply Now
              </button>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold mb-6 text-secondary">Employee Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <Award className="text-primary flex-shrink-0 mt-1" size={20} />
              <div>
                <h3 className="font-semibold mb-1">Competitive Salary</h3>
                <p className="text-gray-600 text-sm">Market-competitive pay rates based on experience and role.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Award className="text-primary flex-shrink-0 mt-1" size={20} />
              <div>
                <h3 className="font-semibold mb-1">Pension Scheme</h3>
                <p className="text-gray-600 text-sm">Company pension contribution to help you save for the future.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Award className="text-primary flex-shrink-0 mt-1" size={20} />
              <div>
                <h3 className="font-semibold mb-1">Holiday Allowance</h3>
                <p className="text-gray-600 text-sm">Generous holiday allowance including bank holidays.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Award className="text-primary flex-shrink-0 mt-1" size={20} />
              <div>
                <h3 className="font-semibold mb-1">Training & Development</h3>
                <p className="text-gray-600 text-sm">Ongoing training opportunities and career progression.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Award className="text-primary flex-shrink-0 mt-1" size={20} />
              <div>
                <h3 className="font-semibold mb-1">Staff Discounts</h3>
                <p className="text-gray-600 text-sm">Discounts on products and services for employees.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Award className="text-primary flex-shrink-0 mt-1" size={20} />
              <div>
                <h3 className="font-semibold mb-1">Friendly Environment</h3>
                <p className="text-gray-600 text-sm">Supportive, team-oriented workplace culture.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Application Process */}
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6 text-secondary">Application Process</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">1</div>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Submit Application</h3>
                  <p className="text-gray-600 text-sm">Send your CV and cover letter to our HR team.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">2</div>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Initial Review</h3>
                  <p className="text-gray-600 text-sm">Our team reviews applications and selects candidates for interview.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">3</div>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Interview</h3>
                  <p className="text-gray-600 text-sm">Successful candidates are invited for an interview.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">4</div>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Offer & Onboarding</h3>
                  <p className="text-gray-600 text-sm">Successful candidates receive an offer and begin onboarding.</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6 text-secondary">Get in Touch</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Mail size={24} className="text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email Applications</h3>
                  <a href="mailto:motorhomessalesuk@gmail.com" className="text-gray-600 hover:text-primary">
                    motorhomessalesuk@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Phone size={24} className="text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Phone Enquiries</h3>
                  <a href="tel:+447412800685" className="text-gray-600 hover:text-primary">
                    +44 7412 800685
                  </a>
                </div>
              </div>

              <div className="bg-primary/10 border border-primary/20 rounded-lg p-6">
                <h3 className="font-semibold mb-2 text-primary">Speculative Applications</h3>
                <p className="text-gray-700 text-sm">
                  Don't see a suitable vacancy? We're always looking for talented individuals. 
                  Send your CV with a cover letter explaining what you could bring to our team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

