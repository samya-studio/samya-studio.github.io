import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ERPNext() {
    return (
        <div>
            {/* <!--====== NAVBAR ======--> */}
            <section className="navbar-area navbar-nine">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <nav className="navbar navbar-expand-lg">
                                <Link className="navbar-brand" to="/">
                                    <h3 className="text-white">Samya <span style={{ color: '#FF9900' }}>Studio</span></h3>
                                </Link>
                                <div className="navbar-btn ms-auto">
                                    <a className="menu-bar" href="https://wa.me/628113078217?text=Hi%20Samya%20Studio%2C%20I%27d%20like%20to%20discuss%20ERPNext%20implementation" target="_blank" rel="noreferrer"><i className="lni lni-whatsapp"></i></a>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!--====== HERO SECTION ======--> */}
            <section className="header-area header-eight">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="header-content">
                                <h6 className="text-uppercase" style={{ color: '#FF9900', letterSpacing: '2px', marginBottom: '15px' }}>Enterprise Resource Planning</h6>
                                <h1>ERPNext: Modern, Open Source ERP</h1>
                                <p>
                                    ERPNext adalah solusi ERP lengkap yang mencakup Accounting, Inventory, HR, Manufacturing, CRM, dan lebih banyak lagi. Dibangun dengan teknologi modern dan 100% open source.
                                </p>
                                <div className="button">
                                    <a href="https://wa.me/628113078217?text=Hi%20Samya%20Studio%2C%20saya%20tertarik%20dengan%20ERPNext" className="btn primary-btn" target="_blank" rel="noreferrer">
                                        <i className="lni lni-whatsapp"></i> Konsultasi Gratis
                                    </a>
                                    <Link to="/" className="btn" style={{ marginLeft: '10px', border: '1px solid #fff', color: '#fff' }}>
                                        <i className="lni lni-arrow-left"></i> Kembali
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="header-image">
                                <img src="/assets/images/erpnext/erpnext2.webp" alt="ERPNext Interface" style={{ width: '100%', borderRadius: '12px', boxShadow: '0 20px 50px rgba(0,0,0,0.3)' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!--====== WHY ERPNEXT SECTION ======--> */}
            <section className="services-area services-eight" style={{ background: '#f8f9fa' }}>
                <div className="section-title-five">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="content">
                                    <h6>Mengapa ERPNext?</h6>
                                    <h2 className="fw-bold">Keunggulan ERPNext</h2>
                                    <p>
                                        Dibandingkan dengan ERP konvensional seperti SAP atau Oracle, ERPNext menawarkan fleksibilitas dan value yang lebih tinggi.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-services">
                                <div className="service-icon">
                                    <i className="lni lni-code"></i>
                                </div>
                                <div className="service-content">
                                    <h4>100% Open Source</h4>
                                    <p>Tidak ada vendor lock-in. Anda memiliki kontrol penuh atas sistem dan data Anda.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-services">
                                <div className="service-icon">
                                    <i className="lni lni-cog"></i>
                                </div>
                                <div className="service-content">
                                    <h4>Cepat Dikustomisasi</h4>
                                    <p>Framework fleksibel yang mudah diadaptasi sesuai proses bisnis unik Anda.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-services">
                                <div className="service-icon">
                                    <i className="lni lni-stats-up"></i>
                                </div>
                                <div className="service-content">
                                    <h4>Comprehensive Reports</h4>
                                    <p>Laporan Financial lengkap: P&L, Balance Sheet, Cash Flow, General Ledger, Trial Balance.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-services">
                                <div className="service-icon">
                                    <i className="lni lni-dollar"></i>
                                </div>
                                <div className="service-content">
                                    <h4>Cost-Effective</h4>
                                    <p>Biaya implementasi dan maintenance jauh lebih rendah dibanding ERP enterprise.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-services">
                                <div className="service-icon">
                                    <i className="lni lni-cloud"></i>
                                </div>
                                <div className="service-content">
                                    <h4>Cloud atau On-Premise</h4>
                                    <p>Pilih deployment sesuai kebutuhan: hosted cloud atau server internal Anda.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-services">
                                <div className="service-icon">
                                    <i className="lni lni-layers"></i>
                                </div>
                                <div className="service-content">
                                    <h4>All-in-One Suite</h4>
                                    <p>Satu platform untuk semua: Accounting, Inventory, HR, Manufacturing, CRM, Projects.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!--====== CORE MODULES SECTION ======--> */}
            <section className="about-area about-five">
                <div className="container">
                    <div className="section-title-five mb-5">
                        <div className="content text-center">
                            <h6>Core Modules</h6>
                            <h2 className="fw-bold">Modul Utama ERPNext</h2>
                            <p>
                                ERPNext mencakup semua modul yang dibutuhkan untuk menjalankan bisnis modern.
                            </p>
                        </div>
                    </div>

                    {/* Accounting Module */}
                    <div className="row align-items-center mb-5">
                        <div className="col-lg-6 col-12">
                            <img src="/assets/images/erpnext/erpnext3.png" alt="ERPNext Accounting" style={{ width: '100%', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.15)' }} />
                        </div>
                        <div className="col-lg-6 col-12">
                            <div className="about-five-content">
                                <h3 className="fw-bold">Accounting & Finance</h3>
                                <p>
                                    Modul akuntansi lengkap dengan Chart of Accounts, multi-currency support, dan integrasi langsung dengan modul lain.
                                </p>
                                <ul style={{ paddingLeft: '20px' }}>
                                    <li>General Ledger & Journal Entries</li>
                                    <li>Accounts Receivable & Payable</li>
                                    <li>Bank Reconciliation</li>
                                    <li>Tax Management & GST/VAT</li>
                                    <li>Budget Planning & Variance</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Financial Dashboard */}
                    <div className="row align-items-center mb-5 flex-lg-row-reverse">
                        <div className="col-lg-6 col-12">
                            <img src="/assets/images/erpnext/erpnext4.png" alt="ERPNext Dashboard" style={{ width: '100%', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.15)' }} />
                        </div>
                        <div className="col-lg-6 col-12">
                            <div className="about-five-content">
                                <h3 className="fw-bold">Financial Dashboard</h3>
                                <p>
                                    Dashboard real-time untuk memantau kesehatan finansial perusahaan dengan visualisasi yang informatif.
                                </p>
                                <ul style={{ paddingLeft: '20px' }}>
                                    <li>Profit & Loss Statement</li>
                                    <li>Balance Sheet</li>
                                    <li>Cash Flow Analysis</li>
                                    <li>Income vs Expense Trends</li>
                                    <li>Outstanding Bills & Payments</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Purchasing Module */}
                    <div className="row align-items-center mb-5">
                        <div className="col-lg-6 col-12">
                            <img src="/assets/images/erpnext/ERPNext1.png" alt="ERPNext Purchase Order" style={{ width: '100%', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.15)' }} />
                        </div>
                        <div className="col-lg-6 col-12">
                            <div className="about-five-content">
                                <h3 className="fw-bold">Buying & Procurement</h3>
                                <p>
                                    Kelola seluruh proses procurement dari request hingga payment dengan tracking lengkap.
                                </p>
                                <ul style={{ paddingLeft: '20px' }}>
                                    <li>Purchase Orders & Receipts</li>
                                    <li>Supplier Management</li>
                                    <li>Material Request</li>
                                    <li>Purchase Analytics</li>
                                    <li>Billing Status Tracking</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!--====== INDUSTRIES SECTION ======--> */}
            <section className="pricing-area pricing-fourteen" style={{ background: '#f8f9fa' }}>
                <div className="section-title-five">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="content">
                                    <h6>Industries</h6>
                                    <h2 className="fw-bold">Industri yang Dilayani</h2>
                                    <p>
                                        ERPNext cocok untuk berbagai jenis industri dengan konfigurasi yang dapat disesuaikan.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        {[
                            { title: "Manufacturing", desc: "Production planning, BOM, work orders, quality control.", icon: "lni-cogs" },
                            { title: "Retail & Distribution", desc: "POS, inventory management, multi-warehouse.", icon: "lni-cart" },
                            { title: "Services", desc: "Project management, timesheet, service billing.", icon: "lni-briefcase" },
                            { title: "Healthcare", desc: "Patient management, appointment, prescriptions.", icon: "lni-heart" },
                            { title: "Education", desc: "Student management, fee collection, LMS.", icon: "lni-graduation" },
                            { title: "Non-Profit", desc: "Grant management, donor tracking, fund accounting.", icon: "lni-users" }
                        ].map((industry, index) => (
                            <div key={index} className="col-lg-4 col-md-6 col-12 mb-4">
                                <div className="pricing-style-fourteen">
                                    <div className="table-head">
                                        <div className="icon mb-3">
                                            <i className={`lni ${industry.icon}`} style={{ fontSize: '40px', color: '#232F3E' }}></i>
                                        </div>
                                        <h6 className="title">{industry.title}</h6>
                                        <p>{industry.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* <!--====== IMPLEMENTATION PROCESS SECTION ======--> */}
            <section className="services-area services-eight">
                <div className="section-title-five">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="content">
                                    <h6>Proses Implementasi</h6>
                                    <h2 className="fw-bold">Bagaimana Samya Studio Membantu</h2>
                                    <p>
                                        Kami menyediakan layanan end-to-end untuk implementasi ERPNext yang sukses.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        {[
                            { step: "01", title: "Discovery & Planning", desc: "Analisis kebutuhan bisnis dan perencanaan roadmap implementasi." },
                            { step: "02", title: "Configuration", desc: "Setup modul, workflow, dan customization sesuai proses bisnis Anda." },
                            { step: "03", title: "Data Migration", desc: "Migrasi data dari sistem lama dengan validasi dan cleansing." },
                            { step: "04", title: "Training", desc: "Pelatihan user dan admin untuk operasional sehari-hari." },
                            { step: "05", title: "Go-Live Support", desc: "Pendampingan saat go-live untuk memastikan transisi lancar." },
                            { step: "06", title: "Ongoing Support", desc: "Maintenance, update, dan support berkelanjutan." }
                        ].map((item, index) => (
                            <div key={index} className="col-lg-4 col-md-6 mb-4">
                                <div className="single-services" style={{ position: 'relative' }}>
                                    <div style={{
                                        position: 'absolute',
                                        top: '-10px',
                                        left: '-10px',
                                        background: '#FF9900',
                                        color: '#fff',
                                        width: '40px',
                                        height: '40px',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontWeight: 'bold'
                                    }}>
                                        {item.step}
                                    </div>
                                    <div className="service-content" style={{ paddingTop: '20px' }}>
                                        <h4>{item.title}</h4>
                                        <p>{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* <!--====== CTA SECTION ======--> */}
            <section className="call-action">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xxl-6 col-xl-7 col-lg-8 col-md-9">
                            <div className="inner-content text-center">
                                <h6 className="text-white mb-2">Siap Memulai?</h6>
                                <h2 className="text-white mb-4">Konsultasi ERPNext Gratis</h2>
                                <p className="text-white mb-4">
                                    Hubungi kami untuk diskusi bagaimana ERPNext dapat membantu bisnis Anda. Tim kami siap memberikan demo dan proposal yang sesuai kebutuhan.
                                </p>
                                <a href="https://wa.me/628113078217?text=Hi%20Samya%20Studio%2C%20saya%20tertarik%20dengan%20implementasi%20ERPNext" className="btn primary-btn" target="_blank" rel="noreferrer" style={{ background: '#fff', color: '#232F3E' }}>
                                    <i className="lni lni-whatsapp" style={{ color: '#25D366' }}></i> Chat via WhatsApp
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!--====== FOOTER ======--> */}
            <footer style={{ background: '#1a1a2e', paddingTop: '40px' }}>
                <div className="container">
                    {/* Horizontal Line */}
                    <hr style={{ borderColor: 'rgba(255,255,255,0.1)', marginBottom: '30px' }} />

                    <div className="row align-items-center py-4">
                        <div className="col-lg-4 col-12 text-center text-lg-start mb-3 mb-lg-0">
                            <h4 className="text-white mb-0">Samya <span style={{ color: '#FF9900' }}>Studio</span></h4>
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
                                © 2026 Samya Studio. All Rights Reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default ERPNext;
