import React from 'react';
import BreadcrumbNav from '../components/shared/BreadcrumbNav';
import { Briefcase, MapPin, Clock, IndianRupee } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const CareersPage: React.FC = () => {
  const { t } = useLanguage();
  
  const openings = [
    {
      id: 1,
      title: 'Sales Manager',
      location: 'Kochi, Kerala',
      type: 'Full-time',
      salary: '5-8 LPA',
      description: 'Looking for an experienced Sales Manager to lead our B2B sales team.',
      requirements: [
        'Minimum 5 years of experience in industrial sales',
        'Strong leadership and communication skills',
        'Experience in team management',
        'Knowledge of industrial tools and equipment'
      ]
    },
    {
      id: 2,
      title: 'Technical Support Engineer',
      location: 'Trivandrum, Kerala',
      type: 'Full-time',
      salary: '3-5 LPA',
      description: 'Seeking a Technical Support Engineer to assist customers with product inquiries.',
      requirements: [
        'Degree in Mechanical/Electrical Engineering',
        'Good knowledge of industrial tools',
        'Strong problem-solving skills',
        'Excellent customer service skills'
      ]
    },
    {
      id: 3,
      title: 'Inventory Manager',
      location: 'Calicut, Kerala',
      type: 'Full-time',
      salary: '4-6 LPA',
      description: 'Looking for an Inventory Manager to oversee warehouse operations.',
      requirements: [
        'Experience in inventory management',
        'Knowledge of warehouse management systems',
        'Strong organizational skills',
        'Team management experience'
      ]
    }
  ];

  const benefits = [
    'Competitive salary package',
    'Health insurance coverage',
    'Professional development opportunities',
    'Performance bonuses',
    'Flexible work hours',
    'Career growth opportunities'
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <BreadcrumbNav 
        items={[
          { name: 'Home', href: '/' },
          { name: 'Careers' }
        ]} 
      />

      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Join Our Team</h1>
        <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Build your career with Yarimart and be part of our mission to provide quality industrial solutions
        </p>
      </div>

      {/* Benefits Section */}
      <div className="bg-primary-50 dark:bg-primary-900/20 rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-bold mb-6 dark:text-white">Why Join Yarimart?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
              <p className="text-gray-800 dark:text-gray-200">{benefit}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Current Openings */}
      <div>
        <h2 className="text-2xl font-bold mb-8 dark:text-white">Current Openings</h2>
        <div className="space-y-6">
          {openings.map((job) => (
            <div key={job.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{job.title}</h3>
                  <div className="mt-2 flex flex-wrap gap-4">
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <MapPin className="w-4 h-4 mr-1" />
                      {job.location}
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <Clock className="w-4 h-4 mr-1" />
                      {job.type}
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <IndianRupee className="w-4 h-4 mr-1" />
                      {job.salary}
                    </div>
                  </div>
                </div>
                <button className="bg-primary-600 dark:bg-primary-700 text-white px-6 py-2 rounded-md hover:bg-primary-700 dark:hover:bg-primary-600 transition">
                  Apply Now
                </button>
              </div>

              <p className="mt-4 text-gray-600 dark:text-gray-300">{job.description}</p>

              <div className="mt-4">
                <h4 className="font-semibold text-gray-900 dark:text-white">Requirements:</h4>
                <ul className="mt-2 space-y-2 dark:text-gray-300">
                  {job.requirements.map((req, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Application Process */}
      <div className="mt-12 bg-gray-50 dark:bg-gray-800/50 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-6 dark:text-white">Application Process</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-primary-100 dark:bg-primary-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-primary-600 dark:text-primary-400 font-bold">1</span>
            </div>
            <h3 className="font-semibold mb-2 dark:text-white">Submit Application</h3>
            <p className="text-gray-600 dark:text-gray-400">Apply online with your resume and cover letter</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-primary-100 dark:bg-primary-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-primary-600 dark:text-primary-400 font-bold">2</span>
            </div>
            <h3 className="font-semibold mb-2 dark:text-white">Interview Process</h3>
            <p className="text-gray-600 dark:text-gray-400">Multiple rounds of interviews with the team</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-primary-100 dark:bg-primary-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-primary-600 dark:text-primary-400 font-bold">3</span>
            </div>
            <h3 className="font-semibold mb-2 dark:text-white">Offer & Onboarding</h3>
            <p className="text-gray-600 dark:text-gray-400">Receive offer and join our team</p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-bold mb-4 dark:text-white">Questions?</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Contact our HR team for any queries about our openings or application process
        </p>
        <a
          href="mailto:careers@yarimart.com"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 dark:bg-primary-700 dark:hover:bg-primary-600"
        >
          <Briefcase className="w-5 h-5 mr-2" />
          Contact HR
        </a>
      </div>
    </div>
  );
};

export default CareersPage;