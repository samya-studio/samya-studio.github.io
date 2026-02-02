import React, { useState, useEffect } from 'react';
import {
  Monitor,
  Smartphone,
  Settings,
  Cpu,
  ArrowRight,
  Code2,
  Zap,
  ShieldCheck,
  MessageSquare,
  ChevronRight
} from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'fixed glass py-4 m-4' : 'absolute bg-transparent py-6'}`}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--aws-orange)' }}>
          SAMYA<span style={{ color: 'white' }}>STUDIO</span>
        </div>
        <div style={{ display: 'flex', gap: '2rem' }}>
          {['About', 'Services', 'Projects', 'Contact'].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} style={{ color: 'white', textDecoration: 'none', fontWeight: 500, fontSize: '0.9rem', opacity: 0.8 }}>{item}</a>
          ))}
        </div>
      </div>
    </nav>
  );
};

const Hero = () => (
  <section className="container" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '80px' }}>
    <div style={{ display: 'flex', gap: '4rem', alignItems: 'center', flexWrap: 'wrap' }}>
      <div style={{ flex: '1', minWidth: '300px' }}>
        <div style={{ color: 'var(--aws-orange)', fontWeight: 600, marginBottom: '1rem', letterSpacing: '0.1em' }}>PRECISION ENGINEERING</div>
        <h1 style={{ fontSize: '4.5rem', lineHeight: 1.1, marginBottom: '2rem' }}>
          Crafting <span className="text-gradient">Premium</span> Digital Solutions
        </h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '3rem', maxWidth: '600px' }}>
          We build high-performance web experiences, seamless mobile applications, and robust ERP systems tailored for modern enterprises.
        </p>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <a href="#contact" className="btn-primary">Get Started</a>
          <a href="#services" style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 500 }}>
            Our Services <ArrowRight size={20} />
          </a>
        </div>
      </div>
      <div style={{ flex: '1', minWidth: '300px', display: 'flex', justifyContent: 'center', position: 'relative' }}>
        {/* SVG Placeholder for Hero */}
        <div className="glass" style={{ width: '100%', height: '400px', padding: '2rem', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(45deg, rgba(255,153,0,0.1) 0%, transparent 100%)' }} />
          <svg width="300" height="300" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="100" r="80" stroke="var(--aws-orange)" strokeWidth="2" strokeDasharray="10 5" opacity="0.3" />
            <rect x="60" y="60" width="80" height="80" rx="12" stroke="white" strokeWidth="2" />
            <path d="M40 100 L160 100" stroke="var(--aws-orange)" strokeWidth="1" opacity="0.2" />
            <path d="M100 40 L100 160" stroke="var(--aws-orange)" strokeWidth="1" opacity="0.2" />
            <circle cx="100" cy="100" r="4" fill="var(--aws-orange)" />
            <path d="M80 85 L120 85" stroke="white" strokeWidth="2" strokeLinecap="round" />
            <path d="M80 100 L110 100" stroke="white" strokeWidth="2" strokeLinecap="round" />
            <path d="M80 115 L100 115" stroke="white" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
      </div>
    </div>
  </section>
);

const ServiceCard = ({ icon: Icon, title, description }) => (
  <div className="glass" style={{ padding: '2.5rem', transition: 'all 0.4s ease', cursor: 'default' }}>
    <div style={{ background: 'rgba(255, 153, 0, 0.1)', width: '60px', height: '60px', borderRadius: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'var(--aws-orange)', marginBottom: '1.5rem' }}>
      <Icon size={32} />
    </div>
    <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{title}</h3>
    <p style={{ color: 'var(--text-secondary)' }}>{description}</p>
  </div>
);

const App = () => {
  return (
    <div style={{ background: 'radial-gradient(circle at top right, rgba(255, 153, 0, 0.05), transparent 600px)' }}>
      <Navbar />
      <main>
        <Hero />

        <section id="about" style={{ padding: '4rem 0' }}>
          <div className="container">
            <div className="glass" style={{ padding: '4rem', display: 'flex', gap: '4rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <div style={{ flex: '1', minWidth: '300px' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Who We <span style={{ color: 'var(--aws-orange)' }}>Are</span></h2>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
                  Samya Studio is a forward-thinking software house dedicated to transforming complex business needs into elegant digital solutions.
                </p>
                <p style={{ color: 'var(--text-secondary)' }}>
                  We bridge the gap between heavy industrial requirements and modern, user-centric design. Our philosophy is simple: <strong>Software should be powerful, yet invisible.</strong>
                </p>
              </div>
              <div style={{ flex: '1', minWidth: '300px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                <div>
                  <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--aws-orange)' }}>3+</div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Core Technologies</div>
                </div>
                <div>
                  <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--aws-orange)' }}>100%</div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Client Satisfaction</div>
                </div>
                <div>
                  <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--aws-orange)' }}>Agile</div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Rapid Iteration</div>
                </div>
                <div>
                  <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--aws-orange)' }}>AI</div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Integrated Workflows</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services">
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
              <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Our Core <span style={{ color: 'var(--aws-orange)' }}>Expertise</span></h2>
              <p style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--text-secondary)' }}>
                We combine industry-leading cloud principles with cutting-edge development to deliver scalable, secure, and beautiful software.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              <ServiceCard
                icon={Monitor}
                title="Website Builder"
                description="Custom, SEO-optimized, and high-conversion websites built with modern frameworks to tell your brand's story."
              />
              <ServiceCard
                icon={Smartphone}
                title="Custom Applications"
                description="Native and cross-platform mobile apps focused on exceptional UI/UX and seamless performance."
              />
              <ServiceCard
                icon={Settings}
                title="ERP Solutions"
                description="Specialized ERPNext implementation and customization to streamline your business operations and data."
              />
            </div>
          </div>
        </section>

        <section id="ai-focus" className="glass" style={{ margin: '4rem 2rem', border: 'none', background: 'var(--aws-blue-dark)' }}>
          <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '4rem', flexWrap: 'wrap-reverse', padding: '4rem' }}>
            <div style={{ flex: '1', minWidth: '300px' }}>
              <div style={{ color: 'var(--aws-orange)', fontWeight: 600, marginBottom: '1rem' }}>FUTURE-READY</div>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Intelligence in Every Line of Code</h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                We don't just build software; we integrate Artificial Intelligence into your workflows. From automated data insights to intelligent user interfaces, we ensure your studio stays ahead of the curve.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Cpu size={18} color="var(--aws-orange)" /> Smart Automation</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Zap size={18} color="var(--aws-orange)" /> Fast Implementation</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Code2 size={18} color="var(--aws-orange)" /> AI-Driven Dev</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><ShieldCheck size={18} color="var(--aws-orange)" /> Secure Ethics</div>
              </div>
            </div>
            <div style={{ flex: '1', minWidth: '300px', textAlign: 'center' }}>
              <IconGrid />
            </div>
          </div>
        </section>

        <section id="projects">
          <div className="container">
            <h2 style={{ fontSize: '3rem', marginBottom: '4rem' }}>Featured <span style={{ color: 'var(--aws-orange)' }}>Work</span></h2>
            <div className="glass" style={{ overflow: 'hidden', display: 'flex', flexWrap: 'wrap' }}>
              <div style={{ flex: '1.2', minWidth: '350px', padding: '4rem' }}>
                <div style={{ marginBottom: '1.5rem' }}>
                  <span style={{ background: 'rgba(255, 153, 0, 0.1)', color: 'var(--aws-orange)', padding: '0.4rem 1rem', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 600 }}>MANUFACTURING & INDUSTRIAL</span>
                </div>
                <h3 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>PT Santo Indonesia</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                  An Innovation Packaging System for robotic line, bottle, cup, pouch, and conveyor lines. We transformed their industrial presence with a state-of-the-art digital interface.
                </p>
                <div style={{ marginBottom: '2.5rem' }}>
                  <div style={{ fontWeight: 600, marginBottom: '1rem' }}>Scope of Work:</div>
                  <ul style={{ listStyle: 'none', opacity: 0.8 }}>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}><ChevronRight size={16} color="var(--aws-orange)" /> UI/UX Industrial Design</li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}><ChevronRight size={16} color="var(--aws-orange)" /> Advanced Catalog System</li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}><ChevronRight size={16} color="var(--aws-orange)" /> Multi-Platform Accessibility</li>
                  </ul>
                </div>
              </div>
              <div style={{ flex: '1', minWidth: '350px', background: 'rgba(255,255,255,0.02)', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '2rem' }}>
                <div className="glass" style={{ width: '80%', height: '300px', transform: 'perspective(1000px) rotateY(-15deg)', boxShadow: '20px 20px 60px rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="var(--aws-orange)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer id="contact" style={{ padding: '6rem 0', textAlign: 'center', borderTop: '1px solid var(--glass-border)' }}>
          <div className="container">
            <h2 style={{ fontSize: '3rem', marginBottom: '2rem' }}>Ready to <span className="text-gradient">Elevate?</span></h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
              Let's build something extraordinary together. Whether it's a website, app, or ERP system, we have the tools and expertise.
            </p>
            <a href="mailto:contact@samyastudio.com" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.8rem' }}>
              <MessageSquare size={20} /> Contact Us
            </a>
            <div style={{ marginTop: '5rem', opacity: 0.5, fontSize: '0.8rem' }}>
              &copy; {new Date().getFullYear()} SAMYA STUDIO. All Rights Reserved.
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

const IconGrid = () => (
  <div style={{ position: 'relative', height: '300px', width: '300px', margin: '0 auto' }}>
    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '250px', height: '250px', border: '1px solid rgba(255,153,0,0.1)', borderRadius: '50%' }}></div>
    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '180px', height: '180px', border: '1px solid rgba(255,153,0,0.1)', borderRadius: '50%' }}></div>
    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: 'var(--aws-orange)', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '0 0 30px rgba(255,153,0,0.4)', zIndex: 2 }}>
      <Cpu size={30} color="white" />
    </div>
    <div style={{ position: 'absolute', top: '10%', left: '50%', transform: 'translateX(-50%)' }}><Zap color="var(--aws-orange)" size={24} /></div>
    <div style={{ position: 'absolute', bottom: '10%', left: '50%', transform: 'translateX(-50%)' }}><Code2 color="var(--aws-orange)" size={24} /></div>
    <div style={{ position: 'absolute', top: '50%', right: '10%', transform: 'translateY(-50%)' }}><ShieldCheck color="var(--aws-orange)" size={24} /></div>
    <div style={{ position: 'absolute', top: '50%', left: '10%', transform: 'translateY(-50%)' }}><MessageSquare color="var(--aws-orange)" size={24} /></div>
  </div>
);

export default App;
