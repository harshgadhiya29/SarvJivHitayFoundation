import React from 'react';
import Layout from '../components/layout/Layout';
import PageHero from '../components/common/PageHero';
import ContactForm from '../components/ui/ContactForm';
import { siteConfig } from '../constants/siteConfig';
import { Mail, Phone, MapPin, Instagram, Youtube } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <Layout>
      <PageHero 
        title="Contact Us" 
        subtitle="Get in touch with our team to learn more about our work or how you can get involved"
        backgroundImage="https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />
      
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-medium mb-6">Get In Touch</h2>
              <p className="text-neutral-600 mb-8">
                We'd love to hear from you. Whether you have a question about our work, 
                volunteer opportunities, or anything else, our team is ready to answer 
                all your questions.
              </p>
              
              <ContactForm />
            </div>
            
            <div>
              <h2 className="text-2xl md:text-3xl font-medium mb-6">Contact Information</h2>
              <div className="bg-neutral-50 p-6 rounded-lg shadow-sm mb-8">
                <ul className="space-y-6">
                  <li className="flex">
                    <div className="bg-primary-100 rounded-full p-3 mr-4">
                      <Mail className="w-6 h-6 text-primary-700" />
                    </div>
                    <div>
                      <h3 className="font-medium text-neutral-900 mb-1">Email</h3>
                      <a href={`mailto:${siteConfig.contactInfo.email}`} className="text-primary-600 hover:underline">
                        {siteConfig.contactInfo.email}
                      </a>
                    </div>
                  </li>
                  
                  <li className="flex">
                    <div className="bg-primary-100 rounded-full p-3 mr-4">
                      <Phone className="w-6 h-6 text-primary-700" />
                    </div>
                    <div>
                      <h3 className="font-medium text-neutral-900 mb-1">Phone</h3>
                      <a href={`tel:${siteConfig.contactInfo.phone}`} className="text-primary-600 hover:underline">
                        {siteConfig.contactInfo.phone}
                      </a>
                    </div>
                  </li>
                  
                  <li className="flex">
                    <div className="bg-primary-100 rounded-full p-3 mr-4">
                      <MapPin className="w-6 h-6 text-primary-700" />
                    </div>
                    <div>
                      <h3 className="font-medium text-neutral-900 mb-1">Address</h3>
                      <p className="text-neutral-600">
                        {siteConfig.contactInfo.address}
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <h3 className="text-xl font-medium mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a 
                  href={siteConfig.social.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-neutral-100 text-neutral-700 hover:bg-pink-100 hover:text-pink-700 transition-colors p-3 rounded-full"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a 
                  href={siteConfig.social.youtube} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-neutral-100 text-neutral-700 hover:bg-red-100 hover:text-red-700 transition-colors p-3 rounded-full"
                  aria-label="YouTube"
                >
                  <Youtube size={20} />
                </a>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-medium mb-4">Our Location</h3>
                <div className="rounded-lg overflow-hidden shadow-md">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.1067559647613!2d77.20657731503602!3d28.529050982459945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1df6b93818d7%3A0xf134d73427a5f851!2sConnaught%20Place%2C%20New%20Delhi%2C%20Delhi%20110001!5e0!3m2!1sen!2sin!4v1622537497705!5m2!1sen!2sin" 
                    width="100%" 
                    height="300" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy"
                    title="Office Location"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;