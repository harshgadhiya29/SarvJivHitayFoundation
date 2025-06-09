import React from 'react';
import Layout from '../components/layout/Layout';
import PageHero from '../components/common/PageHero';
import TeamSection from '../components/sections/TeamSection';

import bgimage from '../img/LOGOSJHF.png'; 

const AboutPage: React.FC = () => {
  return (
    <Layout>
      <div className="relative min-h-[40vh] mb-8">
        {/* Video Background */}
        <div className="absolute inset-0 overflow-hidden">
          <iframe
            src="https://www.youtube.com/embed/eE1UnJpYji4?autoplay=1&mute=1&controls=0&loop=1&playlist=eE1UnJpYji4&showinfo=0&rel=0&vq=hd2160&modestbranding=1&playsinline=1&enablejsapi=1&origin=https://sarvjivhitayfoundation.org"
            className="absolute w-[300%] h-[300%] top-[-100%] left-[-100%] scale-150"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              marginTop: '100px',
              transform: 'scale(1)',
              transformOrigin: 'center center',
              objectFit: 'cover'
            }}
          ></iframe>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 h-[40vh] flex items-center justify-center text-center">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white animate-slide-in-up">About Us</h1>
            <p className="text-lg md:text-xl text-white max-w-3xl mx-auto animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
              Our story, mission, and the people behind our work
            </p>
          </div>
        </div>
      </div>
      
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-black mb-6">Our Story</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-black">
                The Sarv Jiv Hitay Foundation was established in 2010 with a simple yet profound vision: 
                to create a world where all living beings can thrive in harmony. Our founder, Ananya Sharma, 
                witnessed firsthand the struggles of street animals and the deteriorating environmental 
                conditions in her hometown.
              </p>
              <p className="text-black">
                What began as a small local initiative has grown into a nationwide movement, with programs 
                spanning animal welfare, environmental conservation, community development, and sustainable 
                agriculture. Over the years, we have rescued thousands of animals, planted tens of thousands 
                of trees, and worked with hundreds of communities across India.
              </p>
              <p className="text-black">
                Today, the Sarv Jiv Hitay Foundation stands as a testament to the power of compassion and 
                collective action. We believe that by nurturing respect for all forms of life, we can create 
                a more harmonious and sustainable world for generations to come.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section bg-primary-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-black mb-6">Our Mission</h2>
              <div className="prose prose-lg">
                <p className="text-black">
                  At Sarv Jiv Hitay Foundation, our mission is to promote the welfare of all living beings 
                  through compassionate action, environmental stewardship, and community empowerment.
                </p>
                <p className="text-black">
                  We strive to create lasting positive change by:
                </p>
                <ul className="text-black">
                  <li>Providing care and protection for animals in need</li>
                  <li>Conserving and restoring natural habitats</li>
                  <li>Empowering communities through education and sustainable development</li>
                  <li>Promoting organic farming and sustainable agricultural practices</li>
                  <li>Advocating for policies that protect the rights of all living beings</li>
                </ul>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.pexels.com/photos/1483769/pexels-photo-1483769.jpeg?auto=compress&cs=tinysrgb&w=1200" 
                alt="Mission in action" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1 bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.pexels.com/photos/5721057/pexels-photo-5721057.jpeg?auto=compress&cs=tinysrgb&w=1200" 
                alt="Our values" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold text-black mb-6">Our Values</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">Compassion</h3>
                  <p className="text-black">
                    We believe in extending kindness and care to all living beings, recognizing their 
                    inherent worth and right to live with dignity.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">Sustainability</h3>
                  <p className="text-black">
                    We are committed to practices that meet present needs without compromising the 
                    ability of future generations to meet their own needs.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">Integrity</h3>
                  <p className="text-black">
                    We uphold the highest standards of honesty and ethical conduct in all our actions 
                    and relationships.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">Inclusivity</h3>
                  <p className="text-black">
                    We embrace diversity and seek to create spaces where all people feel welcomed, 
                    respected, and valued.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <TeamSection />
    </Layout>
  );
};

export default AboutPage;