import React, { useState } from 'react';

function App() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <div>
            {/* <!--====== NAVBAR NINE PART START ======--> */}
            <section className="navbar-area navbar-nine">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <nav className="navbar navbar-expand-lg">
                                <a className="navbar-brand" href="#">
                                    {/* <img src="/assets/images/white-logo.svg" alt="Logo" /> */}
                                    <h3 className="text-white">Samya <span style={{ color: '#FF9900' }}>Studio</span></h3>
                                </a>
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
                                            <a className="page-scroll active" href="#hero-area">Home</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="page-scroll" href="#services">Services</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="page-scroll" href="#founder">Founder</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="page-scroll" href="#projects">Projects</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="page-scroll" href="#contact">Contact</a>
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
                                    Samya Studio is a full-service IT Consultancy and Software Studio specializing in scalable web/mobile solutions and digital strategy.
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
                                        With over a decade of hands-on experience in the IT industry, Ian Yulianto founded Samya Studio with a singular mission: to bridge the gap between complex technology and business goals.
                                    </p>
                                    <p className="mt-3">
                                        From navigating intricate enterprise systems to launching agile startup MVPs, Ian brings 10+ years of engineering leadership to every project. He combines deep technical expertise with a strong grasp of business logic and ERP systems.
                                    </p>
                                    <div className="mt-4">
                                        <span className="badge me-2" style={{ backgroundColor: '#FF9900' }}>10+ Years Experience</span>
                                        <span className="badge bg-secondary me-2">Full-Stack Expertise</span>
                                        <span className="badge bg-dark">Business Logic & ERP</span>
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

            {/* <!-- Start Client Area --> */}
            <section id="clients" className="call-action">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xxl-6 col-xl-7 col-lg-8 col-md-9">
                            <div className="inner-content">
                                <h6 className="text-white mb-2">Featured Client</h6>
                                <h2 className="text-white mb-4">PT Santo Indonesia</h2>
                                <p className="text-white">
                                    "Samya Studio didn't just build our software; they understood our business. Their ability to translate our complex needs into a seamless digital experience was impressive. A true partner in our growth."
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

            <footer className="footer-area footer-eleven">
                <div className="footer-bottom">
                    <div className="container">
                        <div className="inner-content">
                            <div className="row align-items-center">
                                <div className="col-lg-12 col-12">
                                    <div className="copyright text-center">
                                        <p className="text-white">
                                            © 2026 Samya Studio. All Rights Reserved.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default App;
