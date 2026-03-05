import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import ERPNext from './pages/ERPNext';

function App() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    const scrollToSection = (e, id) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsNavOpen(false); // close mobile menu after clicking
        }
    };

    return (
        <Routes>
            <Route path="/erpnext" element={<ERPNext />} />
            <Route path="/" element={
                <div>
                    {/* <!--====== NAVBAR NINE PART START ======--> */}
                    <section className="navbar-area navbar-nine">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <nav className="navbar navbar-expand-lg">
                                        <Link className="navbar-brand" to="/">
                                            {/* <img src="/assets/images/white-logo.svg" alt="Logo" /> */}
                                            <h3 className="text-white">Samya <span style={{ color: '#FF9900' }}>Studio</span></h3>
                                        </Link>
                                        <button
                                            className="navbar-toggler"
                                            type="button"
                                            onClick={toggleNav}
                                            aria-label="Toggle navigation"
                                        >
                                            <span className="toggler-icon"></span>
                                            <span className="toggler-icon"></span>
                                            <span className="toggler-icon"></span>
                                        </button>

                                        <div className={`collapse navbar-collapse sub-menu-bar ${isNavOpen ? 'show' : ''}`} id="navbarNine">
                                            <ul className="navbar-nav me-auto">
                                                <li className="nav-item">
                                                    <a className="page-scroll active" href="#hero-area" onClick={(e) => scrollToSection(e, 'hero-area')}>Home</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="page-scroll" href="#services" onClick={(e) => scrollToSection(e, 'services')}>Services</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="page-scroll" href="#founder" onClick={(e) => scrollToSection(e, 'founder')}>Founder</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="page-scroll" href="#projects" onClick={(e) => scrollToSection(e, 'projects')}>Projects</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="page-scroll" href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>Contact</a>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="navbar-btn d-none d-lg-inline-block">
                                            <a className="menu-bar" href="https://wa.me/628113078217?text=Hi%20Samya%20Studio%2C%20I%27d%20like%20to%20discuss%20a%20project" target="_blank" rel="noreferrer"><i className="lni lni-whatsapp"></i></a>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* <!--====== NAVBAR NINE PART ENDS ======--> */}

                    {/* <!-- Start header Area --> */}
                    <section id="hero-area" className="header-area header-eight">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-12 col-12">
                                    <div className="header-content">
                                        <h1>Where Craft meets Code. <br />We Build Quality Software.</h1>
                                        <p>
                                            Samya IT Studio is a full-service IT Consultancy and Software Studio specializing in scalable web/mobile solutions and digital strategy.
                                        </p>
                                        <div className="button">
                                            <a href="https://wa.me/628113078217?text=Hi%20Samya%20Studio%2C%20I%27d%20like%20to%20discuss%20a%20project" className="btn primary-btn" target="_blank" rel="noreferrer">
                                                <i className="lni lni-whatsapp"></i> Chat on WhatsApp
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-12">
                                    <div className="header-image">
                                        <img src="/assets/images/Hero.png" alt="Hero" style={{ width: '100%', height: '400px', objectFit: 'cover', objectPosition: 'center top', borderRadius: '8px' }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* <!-- End header Area --> */}

                    {/* <!-- ===== service-area start ===== --> */}
                    <section id="services" className="services-area services-eight">
                        <div className="section-title-five">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="content">
                                            <h6>Services</h6>
                                            <h2 className="fw-bold">Consultancy & Studio</h2>
                                            <p>
                                                From strategic digital transformation to hands-on software development, we provide end-to-end solutions.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                {/* Consultancy */}
                                <div className="col-lg-4 col-md-6">
                                    <div className="single-services">
                                        <div className="service-icon">
                                            <i className="lni lni-consulting"></i>
                                        </div>
                                        <div className="service-content">
                                            <h4>Digital Strategy</h4>
                                            <p>Digital Transformation Strategy enabling your business to thrive in the modern era.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="single-services">
                                        <div className="service-icon">
                                            <i className="lni lni-search-alt"></i>
                                        </div>
                                        <div className="service-content">
                                            <h4>Tech Audit</h4>
                                            <p>Architecture Review and Technology Audits to ensure scalability and security.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="single-services">
                                        <div className="service-icon">
                                            <i className="lni lni-blackboard"></i>
                                        </div>
                                        <div className="service-content">
                                            <h4>Training & Ops</h4>
                                            <p>Workshops on IT Development & Ops to upskill your internal teams.</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Studio */}
                                <div className="col-lg-4 col-md-6">
                                    <div className="single-services">
                                        <div className="service-icon">
                                            <i className="lni lni-website"></i>
                                        </div>
                                        <div className="service-content">
                                            <h4>Web & Mobile</h4>
                                            <p>Custom Website and Mobile App creation tailored to your brand.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="single-services">
                                        <div className="service-icon">
                                            <i className="lni lni-layers"></i>
                                        </div>
                                        <div className="service-content">
                                            <h4>ERP Implementation</h4>
                                            <p>Specialized in ERPNext implementation to streamline business logic.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="single-services">
                                        <div className="service-icon">
                                            <i className="lni lni-ux"></i>
                                        </div>
                                        <div className="service-content">
                                            <h4>Product Design</h4>
                                            <p>UI/UX Design and Custom MVP Development for startups.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* <!-- ===== service-area end ===== --> */}

                    {/* <!--====== FOUNDER PART START ======--> */}
                    <section id="founder" className="about-area about-five">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-12">
                                    <div className="about-image-five">
                                        <svg className="shape" width="106" height="134" viewBox="0 0 106 134" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="1.66654" cy="1.66679" r="1.66667" fill="#DADADA" />
                                            <circle cx="1.66654" cy="16.3335" r="1.66667" fill="#DADADA" />
                                            <circle cx="1.66654" cy="31.0001" r="1.66667" fill="#DADADA" />
                                            <circle cx="1.66654" cy="45.6668" r="1.66667" fill="#DADADA" />
                                            <circle cx="1.66654" cy="60.3335" r="1.66667" fill="#DADADA" />
                                            <circle cx="1.66654" cy="88.6668" r="1.66667" fill="#DADADA" />
                                            <circle cx="1.66654" cy="117.667" r="1.66667" fill="#DADADA" />
                                            <circle cx="1.66654" cy="74.6668" r="1.66667" fill="#DADADA" />
                                            <circle cx="1.66654" cy="103" r="1.66667" fill="#DADADA" />
                                            <circle cx="1.66654" cy="132" r="1.66667" fill="#DADADA" />
                                            <circle cx="16.3333" cy="1.66679" r="1.66667" fill="#DADADA" />
                                            <circle cx="16.3333" cy="16.3335" r="1.66667" fill="#DADADA" />
                                            <circle cx="16.3333" cy="31.0001" r="1.66667" fill="#DADADA" />
                                            <circle cx="16.3333" cy="45.6668" r="1.66667" fill="#DADADA" />
                                            <circle cx="16.333" cy="60.3335" r="1.66667" fill="#DADADA" />
                                            <circle cx="16.333" cy="88.6668" r="1.66667" fill="#DADADA" />
                                            <circle cx="16.333" cy="117.667" r="1.66667" fill="#DADADA" />
                                            <circle cx="16.333" cy="74.6668" r="1.66667" fill="#DADADA" />
                                            <circle cx="16.333" cy="103" r="1.66667" fill="#DADADA" />
                                            <circle cx="16.333" cy="132" r="1.66667" fill="#DADADA" />
                                            <circle cx="30.9998" cy="1.66679" r="1.66667" fill="#DADADA" />
                                            <circle cx="74.6665" cy="1.66679" r="1.66667" fill="#DADADA" />
                                            <circle cx="30.9998" cy="16.3335" r="1.66667" fill="#DADADA" />
                                            <circle cx="74.6665" cy="16.3335" r="1.66667" fill="#DADADA" />
                                            <circle cx="30.9998" cy="31.0001" r="1.66667" fill="#DADADA" />
                                            <circle cx="74.6665" cy="31.0001" r="1.66667" fill="#DADADA" />
                                            <circle cx="30.9998" cy="45.6668" r="1.66667" fill="#DADADA" />
                                            <circle cx="74.6665" cy="45.6668" r="1.66667" fill="#DADADA" />
                                            <circle cx="31" cy="60.3335" r="1.66667" fill="#DADADA" />
                                            <circle cx="74.6668" cy="60.3335" r="1.66667" fill="#DADADA" />
                                            <circle cx="31" cy="88.6668" r="1.66667" fill="#DADADA" />
                                            <circle cx="74.6668" cy="88.6668" r="1.66667" fill="#DADADA" />
                                            <circle cx="31" cy="117.667" r="1.66667" fill="#DADADA" />
                                            <circle cx="74.6668" cy="117.667" r="1.66667" fill="#DADADA" />
                                            <circle cx="31" cy="74.6668" r="1.66667" fill="#DADADA" />
                                            <circle cx="74.6668" cy="74.6668" r="1.66667" fill="#DADADA" />
                                            <circle cx="31" cy="103" r="1.66667" fill="#DADADA" />
                                            <circle cx="74.6668" cy="103" r="1.66667" fill="#DADADA" />
                                            <circle cx="31" cy="132" r="1.66667" fill="#DADADA" />
                                            <circle cx="74.6668" cy="132" r="1.66667" fill="#DADADA" />
                                            <circle cx="45.6665" cy="1.66679" r="1.66667" fill="#DADADA" />
                                            <circle cx="89.3333" cy="1.66679" r="1.66667" fill="#DADADA" />
                                            <circle cx="45.6665" cy="16.3335" r="1.66667" fill="#DADADA" />
                                            <circle cx="89.3333" cy="16.3335" r="1.66667" fill="#DADADA" />
                                            <circle cx="45.6665" cy="31.0001" r="1.66667" fill="#DADADA" />
                                            <circle cx="89.3333" cy="31.0001" r="1.66667" fill="#DADADA" />
                                            <circle cx="45.6665" cy="45.6668" r="1.66667" fill="#DADADA" />
                                            <circle cx="89.3333" cy="45.6668" r="1.66667" fill="#DADADA" />
                                            <circle cx="45.6665" cy="60.3335" r="1.66667" fill="#DADADA" />
                                            <circle cx="89.3333" cy="60.3335" r="1.66667" fill="#DADADA" />
                                            <circle cx="45.6665" cy="88.6668" r="1.66667" fill="#DADADA" />
                                            <circle cx="89.3333" cy="88.6668" r="1.66667" fill="#DADADA" />
                                            <circle cx="45.6665" cy="117.667" r="1.66667" fill="#DADADA" />
                                            <circle cx="89.3333" cy="117.667" r="1.66667" fill="#DADADA" />
                                            <circle cx="45.6665" cy="74.6668" r="1.66667" fill="#DADADA" />
                                            <circle cx="89.3333" cy="74.6668" r="1.66667" fill="#DADADA" />
                                            <circle cx="45.6665" cy="103" r="1.66667" fill="#DADADA" />
                                            <circle cx="89.3333" cy="103" r="1.66667" fill="#DADADA" />
                                            <circle cx="45.6665" cy="132" r="1.66667" fill="#DADADA" />
                                            <circle cx="89.3333" cy="132" r="1.66667" fill="#DADADA" />
                                            <circle cx="60.3333" cy="1.66679" r="1.66667" fill="#DADADA" />
                                            <circle cx="104" cy="1.66679" r="1.66667" fill="#DADADA" />
                                            <circle cx="60.3333" cy="16.3335" r="1.66667" fill="#DADADA" />
                                            <circle cx="104" cy="16.3335" r="1.66667" fill="#DADADA" />
                                            <circle cx="60.3333" cy="31.0001" r="1.66667" fill="#DADADA" />
                                            <circle cx="104" cy="31.0001" r="1.66667" fill="#DADADA" />
                                            <circle cx="60.3333" cy="45.6668" r="1.66667" fill="#DADADA" />
                                            <circle cx="104" cy="45.6668" r="1.66667" fill="#DADADA" />
                                            <circle cx="60.333" cy="60.3335" r="1.66667" fill="#DADADA" />
                                            <circle cx="104" cy="60.3335" r="1.66667" fill="#DADADA" />
                                            <circle cx="60.333" cy="88.6668" r="1.66667" fill="#DADADA" />
                                            <circle cx="104" cy="88.6668" r="1.66667" fill="#DADADA" />
                                            <circle cx="60.333" cy="117.667" r="1.66667" fill="#DADADA" />
                                            <circle cx="104" cy="117.667" r="1.66667" fill="#DADADA" />
                                            <circle cx="60.333" cy="74.6668" r="1.66667" fill="#DADADA" />
                                            <circle cx="104" cy="74.6668" r="1.66667" fill="#DADADA" />
                                            <circle cx="60.333" cy="103" r="1.66667" fill="#DADADA" />
                                            <circle cx="104" cy="103" r="1.66667" fill="#DADADA" />
                                            <circle cx="60.333" cy="132" r="1.66667" fill="#DADADA" />
                                            <circle cx="104" cy="132" r="1.66667" fill="#DADADA" />
                                        </svg>
                                        {/* Founder Image */}
                                        <img
                                            src="/assets/images/Gemini_Generated_Image_jwkb8pjwkb8pjwkb.png"
                                            alt="Ian Yulianto - Founder"
                                            style={{ width: '100%', height: '450px', objectFit: 'cover', objectPosition: 'center 20%', borderRadius: '8px' }}
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-12">
                                    <div className="about-five-content">
                                        <h6 className="small-title text-lg">MEET THE FOUNDER</h6>
                                        <h2 className="main-title fw-bold">Ian Yulianto</h2>
                                        <div className="about-five-tab">
                                            <p>
                                                With over a decade of hands-on experience in the IT industry, Ian Yulianto founded Samya IT Studio with a singular mission: to bridge the gap between complex technology and business goals.
                                            </p>
                                            <p className="mt-3">
                                                From navigating intricate enterprise systems to launching agile startup MVPs, Ian brings 10+ years of engineering leadership to every project. He combines deep technical expertise with a strong grasp of business logic and ERP systems.
                                            </p>
                                            <div className="mt-4">
                                                <span className="badge me-2" style={{ backgroundColor: '#FF9900' }}>10+ Years Experience</span>
                                                <span className="badge bg-secondary me-2">Full-Stack Expertise</span>
                                                <span className="badge bg-dark">Business Logic & ERP</span>
                                            </div>
                                            <div className="mt-4">
                                                <a href="https://www.linkedin.com/in/ianyulianto" target="_blank" rel="noreferrer" className="btn primary-btn">
                                                    <i className="lni lni-linkedin-original"></i> Connect on LinkedIn
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* <!--====== FOUNDER PART ENDS ======--> */}

                    {/* <!-- Start Projects Area --> */}
                    <section id="projects" className="pricing-area pricing-fourteen">
                        <div className="section-title-five">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="content">
                                            <h6>Portfolio</h6>
                                            <h2 className="fw-bold">Projects Showcase</h2>
                                            <p>
                                                A selection of our capabilities and past deliverables.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                {[
                                    { title: "Website", desc: "High-performance, responsive corporate sites and web apps.", icon: "lni-website" },
                                    { title: "Payment Gateway", desc: "Secure and seamless transaction handling integration.", icon: "lni-credit-cards" },
                                    { title: "WhatsApp Integration", desc: "Automated notifications, bots, and customer engagement.", icon: "lni-whatsapp" },
                                    { title: "ERPNext Customization", desc: "Tailored workflows and modules for business operations.", icon: "lni-cog" },
                                    { title: "Mobile App", desc: "Native or Cross-platform solutions for iOS & Android.", icon: "lni-mobile" },
                                    { title: "IT Ops Training", desc: "Workshops on DevOps, deployment, and best practices.", icon: "lni-blackboard" }
                                ].map((project, index) => (
                                    <div key={index} className="col-lg-4 col-md-6 col-12 mb-4">
                                        <div className="pricing-style-fourteen">
                                            <div className="table-head">
                                                <div className="icon mb-3">
                                                    <i className={`lni ${project.icon}`} style={{ fontSize: '40px', color: '#232F3E' }}></i>
                                                </div>
                                                <h6 className="title">{project.title}</h6>
                                                <p>{project.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                    {/* <!--/ End Projects Area --> */}

                    {/* <!-- Start ERPNext Preview --> */}
                    <section className="about-area about-five" style={{ background: '#f8f9fa' }}>
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-12">
                                    <div className="about-image-five">
                                        <img
                                            src="/assets/images/erpnext/erpnext4.png"
                                            alt="ERPNext Dashboard"
                                            style={{ width: '100%', borderRadius: '12px', boxShadow: '0 15px 40px rgba(0,0,0,0.15)' }}
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-12">
                                    <div className="about-five-content">
                                        <img src="/assets/images/erpnext/logo-erpnext.webp" alt="ERPNext Logo" style={{ height: '40px', marginBottom: '15px' }} />
                                        <h6 className="small-title text-lg" style={{ color: '#FF9900' }}>ERP SOLUTION</h6>
                                        <h2 className="main-title fw-bold">ERPNext Implementation</h2>
                                        <p>
                                            Kami adalah partner implementasi ERPNext dengan pengalaman dalam berbagai industri. ERPNext adalah solusi ERP modern, open-source, yang mencakup Accounting, Inventory, HR, Manufacturing, dan CRM.
                                        </p>
                                        <div className="mt-3">
                                            <span className="badge me-2" style={{ backgroundColor: '#232F3E', padding: '8px 12px' }}>Open Source</span>
                                            <span className="badge me-2" style={{ backgroundColor: '#FF9900', padding: '8px 12px' }}>Cost-Effective</span>
                                            <span className="badge" style={{ backgroundColor: '#232F3E', padding: '8px 12px' }}>All-in-One</span>
                                        </div>
                                        <div className="mt-4">
                                            <Link to="/erpnext" className="btn primary-btn">
                                                Pelajari ERPNext <i className="lni lni-arrow-right"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* <!-- End ERPNext Preview --> */}

                    {/* <!-- Start Client Area --> */}
                    <section id="clients" className="call-action" style={{ marginTop: '80px' }}>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-xxl-6 col-xl-7 col-lg-8 col-md-9">
                                    <div className="inner-content">
                                        <h6 className="text-white mb-2">Featured Client</h6>
                                        <h2 className="text-white mb-4">PT Santo Indonesia</h2>
                                        <p className="text-white">
                                            "Samya IT Studio didn't just build our software; they understood our business. Their ability to translate our complex needs into a seamless digital experience was impressive. A true partner in our growth."
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* <!-- End Client Area --> */}

                    {/* <!-- ========================= contact-section start ========================= --> */}
                    <section id="contact" className="contact-section">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-4">
                                    <div className="contact-item-wrapper">
                                        <div className="row">
                                            <div className="col-12 col-md-6 col-xl-12">
                                                <div className="contact-item">
                                                    <div className="contact-icon">
                                                        <i className="lni lni-whatsapp"></i>
                                                    </div>
                                                    <div className="contact-content">
                                                        <h4>WhatsApp</h4>
                                                        <p>08113078217</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-6 col-xl-12">
                                                <div className="contact-item">
                                                    <div className="contact-icon">
                                                        <i className="lni lni-envelope"></i>
                                                    </div>
                                                    <div className="contact-content">
                                                        <h4>Email</h4>
                                                        <p>samya.studio.id@gmail.com</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-8">
                                    <div className="contact-form-wrapper">
                                        <div className="row">
                                            <div className="col-xl-10 col-lg-8 mx-auto">
                                                <div className="section-title text-center">
                                                    <span> Get in Touch </span>
                                                    <h2>
                                                        Ready to Get Started?
                                                    </h2>
                                                    <p>
                                                        Let's build something great together.
                                                        We leverage AI as a foundational element of our development process to deliver faster, smarter, and deeper solutions.
                                                    </p>
                                                    <div className="mt-4">
                                                        <a href="https://wa.me/628113078217?text=Hi%20Samya%20Studio%2C%20I%27d%20like%20to%20discuss%20a%20project" className="btn primary-btn" target="_blank" rel="noreferrer">
                                                            <i className="lni lni-whatsapp"></i> Chat on WhatsApp
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* <!-- ========================= contact-section end ========================= --> */}

                    {/* Spacer before footer */}
                    <div style={{ height: '60px', background: '#fff' }}></div>

                    {/* <!--====== FOOTER ======--> */}
                    <footer style={{ background: '#1a1a2e', paddingTop: '40px' }}>
                        <div className="container">
                            {/* Horizontal Line */}
                            <hr style={{ borderColor: 'rgba(255,255,255,0.1)', marginBottom: '30px' }} />

                            <div className="row align-items-center py-4">
                                <div className="col-lg-4 col-12 text-center text-lg-start mb-3 mb-lg-0">
                                    <h4 className="text-white mb-0">Samya <span style={{ color: '#FF9900' }}>Studio</span></h4>
                                    <p className="text-white mt-1" style={{ fontSize: '13px', opacity: 0.7 }}>IT Consultancy & Software Studio</p>
                                </div>
                                <div className="col-lg-4 col-12 text-center mb-3 mb-lg-0">
                                    <div className="d-flex justify-content-center gap-3">
                                        <a href="https://wa.me/628113078217" target="_blank" rel="noreferrer" style={{ color: '#fff', fontSize: '20px' }}>
                                            <i className="lni lni-whatsapp"></i>
                                        </a>
                                        <a href="https://www.linkedin.com/in/ianyulianto" target="_blank" rel="noreferrer" style={{ color: '#fff', fontSize: '20px' }}>
                                            <i className="lni lni-linkedin-original"></i>
                                        </a>
                                        <a href="mailto:samya.studio.id@gmail.com" style={{ color: '#fff', fontSize: '20px' }}>
                                            <i className="lni lni-envelope"></i>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-12 text-center text-lg-end">
                                    <p className="text-white mb-0" style={{ opacity: 0.7, fontSize: '14px' }}>
                                        © 2026 Samya IT Studio. All Rights Reserved.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            } />
        </Routes>
    );
}

export default App;
