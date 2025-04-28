import React from 'react';
import Layout from '../components/layout/Layout';
import PageHero from '../components/common/PageHero';
import TeamSection from '../components/sections/TeamSection';

const AboutPage: React.FC = () => {
  return (
    <Layout>
      <PageHero 
        title="About Us" 
        subtitle="Our story, mission, and the people behind our work"
        backgroundImage="https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=1920"
        height="md"
      />
      
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-medium mb-6">Our Story</h2>
            <div className="prose prose-lg max-w-none">
              <p>
                The Sarv Jiv Hitay Foundation was established in 2010 with a simple yet profound vision: 
                to create a world where all living beings can thrive in harmony. Our founder, Ananya Sharma, 
                witnessed firsthand the struggles of street animals and the deteriorating environmental 
                conditions in her hometown.
              </p>
              <p>
                What began as a small local initiative has grown into a nationwide movement, with programs 
                spanning animal welfare, environmental conservation, community development, and sustainable 
                agriculture. Over the years, we have rescued thousands of animals, planted tens of thousands 
                of trees, and worked with hundreds of communities across India.
              </p>
              <p>
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
              <h2 className="text-3xl font-medium mb-6">Our Mission</h2>
              <div className="prose prose-lg">
                <p>
                  At Sarv Jiv Hitay Foundation, our mission is to promote the welfare of all living beings 
                  through compassionate action, environmental stewardship, and community empowerment.
                </p>
                <p>
                  We strive to create lasting positive change by:
                </p>
                <ul>
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
              <h2 className="text-3xl font-medium mb-6">Our Values</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-medium text-primary-700 mb-2">Compassion</h3>
                  <p className="text-neutral-600">
                    We believe in extending kindness and care to all living beings, recognizing their 
                    inherent worth and right to live with dignity.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-primary-700 mb-2">Sustainability</h3>
                  <p className="text-neutral-600">
                    We are committed to practices that meet present needs without compromising the 
                    ability of future generations to meet their own needs.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-primary-700 mb-2">Integrity</h3>
                  <p className="text-neutral-600">
                    We uphold the highest standards of honesty and ethical conduct in all our actions 
                    and relationships.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-primary-700 mb-2">Inclusivity</h3>
                  <p className="text-neutral-600">
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