<template>
    <div id="app">
        <!-- Navbar -->
        <nav class="navbar navbar-expand-lg navbar-custom">
            <router-link class="navbar-brand d-flex align-items-center" to="/">
                <div class="brand-logo">M</div>
            </router-link>
            <button
                class="navbar-toggler"
                type="button"
                @click="toggleNav"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon">☰</span>
            </button>
            <div
                class="collapse navbar-collapse"
                :class="{ show: isNavOpen }"
                id="navbarNav"
            >
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a
                            class="nav-link"
                            href="#home"
                            @click="scrollToSection('home')"
                            >Home</a
                        >
                    </li>
                    <li class="nav-item">
                        <a
                            class="nav-link"
                            href="#about"
                            @click="scrollToSection('about')"
                            >About</a
                        >
                    </li>
                    <li class="nav-item">
                        <a
                            class="nav-link"
                            href="#services"
                            @click="scrollToSection('services')"
                            >Services</a
                        >
                    </li>
                    <li class="nav-item">
                        <a
                            class="nav-link"
                            href="#portfolio"
                            @click="scrollToSection('portfolio')"
                            >Portfolio</a
                        >
                    </li>
                </ul>
                <a
                    href="#contact"
                    class="btn btn-hire ms-3 right-50"
                    @click="scrollToSection('contact')"
                    >Hire Me</a
                >
            </div>
        </nav>

        <!-- Hero Section -->
        <section id="home" class="hero">
            <div class="container">
                <div class="hero-content" data-aos="fade-right">
                    <p class="tagline">
                        Full-Stack Developer • UI/UX Designer • Graphic Designer
                    </p>
                    <h1 class="title">Hi, I'm <span>Muhammad Umar</span></h1>
                    <h2 class="subtitle">
                        "For your business websites I create what you want to
                        convert"
                    </h2>
                    <p class="desc">
                        Web Development, Creative Design, and Digital Solutions
                        — all in one place. Guaranteed results with modern tech
                        stack including Laravel, Vue.js, and creative tools.
                    </p>

                    <div class="buttons">
                        <button
                            class="btn-primary"
                            @click="scrollToSection('portfolio')"
                        >
                            See Work
                        </button>
                        <a
                            href="#contact"
                            class="btn-link"
                            @click="scrollToSection('contact')"
                            >Free Consultation →</a
                        >
                    </div>

                    <div class="features">
                        <div class="feature">
                            <span class="icon">⚡</span>
                            <span>Fast Delivery</span>
                        </div>
                        <div class="feature">
                            <span class="icon">🎯</span>
                            <span>Conversion Focused</span>
                        </div>
                        <div class="feature">
                            <span class="icon">🛠️</span>
                            <span>After-Support</span>
                        </div>
                    </div>
                </div>

                <div
                    class="hero-card"
                    data-aos="fade-left"
                    data-aos-once="false"
                >
                    <div class="card">
                        <img src="/images/avatar.png" alt="Avatar">
                        <h3>Muhammad Umar</h3>
                        <p class="role">Full-Stack Dev & Designer</p>

                        <div class="stats">
                            <div class="stat">
                                <p>Projects</p>
                                <h4>50+</h4>
                            </div>
                            <div class="stat">
                                <p>Clients</p>
                                <h4>30+</h4>
                            </div>
                            <div class="stat">
                                <p>Experience</p>
                                <h4>3+yrs</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- About Section -->
        <section id="about" class="about-section">
            <div class="container">
                <p class="overline">ABOUT ME</p>
                <h2 class="section-title">
                    Full Stack Developer & Graphic Designer
                </h2>
                <p class="section-subtitle">
                    Blending code with creativity to deliver powerful solutions
                </p>

                <div class="about-content">
                    <div class="about-text" data-aos="fade-right">
                        <p>
                            I'm a Full Stack Developer & Graphic Designer,
                            blending code with creativity. I build clean,
                            user-friendly web apps from front-end to back-end. I
                            design bold, brand-focused visuals like logos, UI,
                            and marketing assets. Whether it's powerful
                            platforms or standout graphics — I deliver both.
                        </p>

                        <div class="skills-grid">
                            <div class="skill-category">
                                <h4>Development</h4>
                                <div class="skill-tags">
                                    <span class="tag">HTML/CSS</span>
                                    <span class="tag">JavaScript</span>
                                    <span class="tag">Vue.js</span>
                                    <span class="tag">Laravel</span>
                                    <span class="tag">Node.js</span>
                                </div>
                            </div>

                            <div class="skill-category">
                                <h4>Design</h4>
                                <div class="skill-tags">
                                    <span class="tag">UI/UX</span>
                                    <span class="tag">Logo Design</span>
                                    <span class="tag">Branding</span>
                                    <span class="tag">Marketing Assets</span>
                                </div>
                            </div>

                            <div class="skill-category">
                                <h4>Tools</h4>
                                <div class="skill-tags">
                                    <span class="tag">MS Office</span>
                                    <span class="tag">Adobe Suite</span>
                                    <span class="tag">Figma</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="about-image" data-aos="fade-left">
                        <div class="image-frame">
                            <img
                                src=""
                                alt="Developer"
                                className="image-placeholder"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Services Section -->
        <section id="services" class="services-section">
            <div class="container">
                <p class="overline">SERVICES</p>
                <h2 class="section-title">One-Stop Digital Solutions</h2>
                <p class="section-subtitle">
                    Web Dev, Design, Social Media and Marketing — all under one
                    roof
                </p>

                <div class="services-grid">
                    <div class="service-card" data-aos="fade-up-left">
                        <div class="icon">💻</div>
                        <h3>Web Development</h3>
                        <ul>
                            <li>Custom websites (Laravel/Vue)</li>
                            <li>Responsive & SEO-ready</li>
                            <li>Speed & security best practices</li>
                        </ul>
                    </div>

                    <div class="service-card" data-aos="fade-down-right">
                        <div class="icon"><i class="fa-solid fa-paint-brush"></i></div>
                        <h3>UI/UX Design</h3>
                        <ul>
                            <li>Modern interfaces</li>
                            <li>Design systems</li>
                            <li>Prototyping & wireframes</li>
                        </ul>
                    </div>

                    <div class="service-card" data-aos="fade-down-left">
                        <div class="icon"><i class="fa-solid fa-palette"></i></div>
                        <h3>Graphic Design</h3>
                        <ul>
                            <li>Logo & Brand Identity</li>
                            <li>Marketing materials</li>
                            <li>Social media graphics</li>
                        </ul>
                    </div>

                    <div class="service-card" data-aos="fade-up-right">
                        <div class="icon"><i class="fa-solid fa-code"></i></div>
                        <h3>Full Stack Solutions</h3>
                        <ul>
                            <li>Frontend & Backend</li>
                            <li>Database Design</li>
                            <li>API Development</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <!-- Portfolio Section -->
        <section id="portfolio" class="portfolio-section">
            <div class="container">
                <p class="overline">WORK</p>
                <h2 class="section-title">Recent Projects</h2>
                <p class="section-subtitle">
                    Each project focused on results and quality
                </p>

                <div class="grid">
                    <div data-aos="zoom-out-right" class="project-card">
                        <div class="preview">
                            <div class="preview-placeholder"></div>
                        </div>
                        <div class="content">
                            <span class="project-tag">Web Development</span>
                            <h3>AI Chatbot Module</h3>
                            <p>JavaScript + Node.js + AI Based</p>
                            <ul>
                                <li>+120% active users</li>
                                <li>&lt;1s load time</li>
                            </ul>
                        </div>
                    </div>

                    <div data-aos="zoom-out-left" class="project-card">
                        <div class="preview">
                            <div class="preview-placeholder"></div>
                        </div>
                        <div class="content">
                            <span class="project-tag">Branding</span>
                            <h3>MD Group's</h3>
                            <p>Complete brand identity and design system</p>
                            <ul>
                                <li>Clean identity</li>
                                <li>High recall</li>
                            </ul>
                        </div>
                    </div>

                    <div data-aos="zoom-out-right" class="project-card">
                        <div class="preview">
                            <div class="preview-placeholder"></div>
                        </div>
                        <div class="content">
                            <span class="project-tag">Web App</span>
                            <h3>Timmerman Platform</h3>
                            <p>
                                Full-stack application with Laravel and Vue.js
                            </p>
                            <ul>
                                <li>Responsive design</li>
                                <li>Real-time updates</li>
                            </ul>
                        </div>
                    </div>

                    <div data-aos="zoom-out-left" class="project-card">
                        <div class="preview">
                            <div class="preview-placeholder"></div>
                        </div>
                        <div class="content">
                            <span class="project-tag">UI/UX</span>
                            <h3>Finance Dashboard</h3>
                            <p>Design system with interactive prototype</p>
                            <ul>
                                <li>Handoff ready</li>
                                <li>Dev friendly</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Experience Section -->
        <section id="experience" class="experience-section">
            <div class="container">
                <p class="overline">EXPERIENCE</p>
                <h2 class="section-title">Professional Journey</h2>
                <p class="section-subtitle">My work history and achievements</p>

                <div class="timeline">
                    <div class="timeline-item" data-aos="fade-up">
                        <div class="timeline-dot"></div>
                        <div class="timeline-content">
                            <div class="timeline-date">July 2022 - Present</div>
                            <h3>Full Stack Web Developer & Graphic Designer</h3>
                            <h4>Timmerman Industries</h4>
                            <ul>
                                <li>
                                    Develop responsive websites using Laravel,
                                    HTML, CSS, JavaScript, and Vue.js
                                </li>
                                <li>
                                    Create branding materials including logos,
                                    brochures, and social media designs
                                </li>
                                <li>
                                    Lead and mentor junior developers and
                                    designers
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="timeline-item" data-aos="fade-up">
                        <div class="timeline-dot"></div>
                        <div class="timeline-content">
                            <div class="timeline-date">
                                July 2020 - Aug 2024
                            </div>
                            <h3>Front-End Web Developer</h3>
                            <h4>Timmerman Industries</h4>
                            <ul>
                                <li>
                                    Collaborated with UI/UX designers to build
                                    clean, modern interfaces
                                </li>
                                <li>
                                    Maintained company websites ensuring
                                    performance and optimization
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="timeline-item" data-aos="fade-up">
                        <div class="timeline-dot"></div>
                        <div class="timeline-content">
                            <div class="timeline-date">Aug 2023 - Jul 2025</div>
                            <h3>Junior Graphic Designer</h3>
                            <h4>Timmerman Industries</h4>
                            <ul>
                                <li>
                                    Supported senior designers in developing
                                    brand guidelines
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Education Section -->
        <section id="education" class="education-section">
            <div class="container">
                <p class="overline">EDUCATION</p>
                <h2 class="section-title">Academic Background</h2>
                <p class="section-subtitle">My educational qualifications</p>

                <div class="education-grid">
                    <div class="education-card" data-aos="fade-up">
                        <div class="education-icon"><i class="fa-solid fa-paint-brush"></i></div>
                        <h3>Graphic Design</h3>
                        <p class="education-place">
                            Intelliage Training Centre & Solution
                        </p>
                        <p class="education-date">2020 - 2023</p>
                    </div>

                    <div class="education-card" data-aos="fade-up">
                        <div class="education-icon"><i class="fa-solid fa-code"></i></div>
                        <h3>Web Development</h3>
                        <p class="education-place">
                            Intelliage Training Centre & Solution
                        </p>
                        <p class="education-date">2023 - 2024</p>
                    </div>

                    <div class="education-card" data-aos="fade-up">
                        <div class="education-icon"><i class="fa-solid fa-laptop-code"></i></div>
                        <h3>Software Engineering</h3>
                        <p class="education-place">
                            Intelliage Training Centre & Solution
                        </p>
                        <p class="education-date">2020 - 2024</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Contact Section -->
        <section id="contact" class="contact-section">
            <div class="container">
                <p class="overline">CONTACT</p>
                <h2 class="section-title">Get In Touch</h2>
                <p class="section-subtitle">Let's discuss your project</p>

                <div class="contact-content">
                    <div class="contact-info" data-aos="fade-right">
                        <div class="contact-item">
                            <div class="contact-icon"><i class="fa-solid fa-envelope"></i></div>
                            <div>
                                <h4>Email</h4>
                                <p>uj69461@gmail.com</p>
                                <p>info@intelliagetraining.com</p>
                            </div>
                        </div>

                        <div class="contact-item">
                            <div class="contact-icon"><i class="fa-solid fa-phone"></i></div>
                            <div>
                                <h4>Phone</h4>
                                <p>+923 141431442</p>
                                <p>+923 284684048</p>
                            </div>
                        </div>

                        <div class="contact-item">
                            <div class="contact-icon"><i class="fa-solid fa-location-dot"></i></div>
                            <div>
                                <h4>Location</h4>
                                <p>Kasure, Chunian, 55220</p>
                            </div>
                        </div>
                    </div>

                    <div class="contact-form" data-aos="fade-left">
                        <form @submit.prevent="submitForm">
                            <div class="form-group">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    v-model="form.name"
                                    required
                                />
                            </div>

                            <div class="form-group">
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    v-model="form.email"
                                    required
                                />
                            </div>

                            <div class="form-group">
                                <input
                                    type="text"
                                    placeholder="Subject"
                                    v-model="form.subject"
                                    required
                                />
                            </div>

                            <div class="form-group">
                                <textarea
                                    placeholder="Your Message"
                                    v-model="form.message"
                                    rows="5"
                                    required
                                ></textarea>
                            </div>

                            <button type="submit" class="btn-submit">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>

        <!-- Footer -->
        <footer class="footer">
            <div class="footer-container">
                <div class="footer-brand">
                    <h2 class="logo">M.D.Group's</h2>
                    <p class="tagline">
                        Full-Stack • UI/UX • Digital Solutions
                    </p>
                </div>

                <div class="footer-links">
    <h4>Quick Links</h4>

    <ul class="d-flex">
        <li>
            <a href="#home" @click="scrollToSection('home')">Home</a>
        </li>
        <li>
            <a href="#about" @click="scrollToSection('about')">About</a>
        </li>
        <li>
            <a href="#services" @click="scrollToSection('services')">Services</a>
        </li>
        <li>
            <a href="#portfolio" @click="scrollToSection('portfolio')">Portfolio</a>
        </li>
        <li>
            <a href="#contact" @click="scrollToSection('contact')">Contact</a>
        </li>
    </ul>
</div>
                <div class="footer-social">
                    <h4>Follow Us</h4>
                    <div class="social-icons">
                        <a href="#" class="social-icon"></a>
                        <a href="#" class="social-icon"></a>
                        <a href="#" class="social-icon"></a>
                        <a href="#" class="social-icon"></a>
                    </div>
                </div>
            </div>

            <div class="footer-bottom">
                <p>© 2024 M.D.Group's. All rights reserved.</p>
            </div>
        </footer>
    </div>
</template>

<script>
export default {
    name: "App",
    data() {
        return {
            isNavOpen: false,
            form: {
                name: "",
                email: "",
                subject: "",
                message: "",
            },
        };
    },
    mounted() {
        // Initialize AOS
        if (typeof window !== "undefined") {
            const AOS = require("aos");
            AOS.init({
                once: false,
                duration: 1000,
                easing: "ease-in-out",
                offset: 100,
            });
        }
    },
    methods: {
        toggleNav() {
            this.isNavOpen = !this.isNavOpen;
        },
        scrollToSection(sectionId) {
            this.isNavOpen = false;
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        },
        submitForm() {
            console.log("Form submitted:", this.form);
            alert("Thank you for your message! I will get back to you soon.");
            this.form = {
                name: "",
                email: "",
                subject: "",
                message: "",
            };
        },
    },
};
</script>

<style>
/* Reset and Base Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    background-color: #0a0a0a;
    color: #ffffff;
    line-height: 1.6;
    overflow-x: hidden;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Common Section Styles */
section {
    padding: 80px 0;
}

.overline {
    font-size: 13px;
    letter-spacing: 2px;
    color: #00bcd4;
    margin-bottom: 10px;
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;
}

.section-title {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 10px;
    text-align: center;
    background: linear-gradient(90deg, #00bcd4, #a855f7);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
}

.section-subtitle {
    color: #9ca3af;
    margin-bottom: 50px;
    text-align: center;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
}

/* Navbar Styles */
.navbar-custom {
    background-color: rgba(10, 10, 10, 0.95);
    backdrop-filter: blur(10px);
    padding: 1rem 2rem;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
    box-shadow: 0 2px 20px rgba(0, 188, 212, 0.1);
}

.navbar-brand {
    display: flex;
    align-items: center;
    color: #fff;
    text-decoration: none;
    font-weight: bold;
    font-size: 1.5rem;
}

.brand-logo {
    width: 40px;
    height: 40px;
    background: linear-gradient(135deg, #00bcd4, #a855f7);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: bold;
    margin-right: 10px;
}

.navbar-nav {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    align-items: center;
}

.nav-item {
    margin: 0 15px;
}

.nav-link {
    color: #fff;
    text-decoration: none;
    font-weight: 500;
    transition: all 0.3s ease;
    position: relative;
}

.nav-link:hover {
    color: #00bcd4;
}

.nav-link::after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #00bcd4, #a855f7);
    transition: width 0.3s ease;
}

.nav-link:hover::after {
    width: 100%;
}

.navbar-toggler {
    display: none;
    background: none;
    border: none;
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
}

.btn-hire {
    background: linear-gradient(90deg, #00bcd4, #a855f7);
    color: white;
    padding: 10px 25px;
    border-radius: 25px;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s ease;
    display: inline-block;
}

.btn-hire:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 188, 212, 0.4);
}

/* Hero Section */
.hero {
    background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%);
    padding: 120px 0 80px;
    min-height: 100vh;
    display: flex;
    align-items: center;
}

.hero .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: center;
}

.hero-content .tagline {
    text-align: left;
    font-size: 14px;
}

.hero-content .title {
    font-size: 3.5rem;
    font-weight: 800;
    line-height: 1.2;
    margin: 20px 0;
    text-align: left;
    background: linear-gradient(90deg, #ffffff, #00bcd4);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
}

.hero-content .title span {
    background: linear-gradient(90deg, #00bcd4, #a855f7);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
}

.hero-content .subtitle {
    font-size: 1.8rem;
    font-weight: 600;
    color: #ffffff;
    margin-bottom: 20px;
    text-align: left;
}

.hero-content .desc {
    color: #9ca3af;
    font-size: 1.1rem;
    margin-bottom: 30px;
    text-align: left;
    max-width: 500px;
}

.buttons {
    display: flex;
    gap: 20px;
    margin-bottom: 30px;
}

.btn-primary {
    background: linear-gradient(90deg, #00bcd4, #a855f7);
    color: white;
    border: none;
    padding: 15px 35px;
    border-radius: 30px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 1rem;
}

.btn-primary:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(0, 188, 212, 0.4);
}

.btn-link {
    color: #00bcd4;
    font-weight: 600;
    text-decoration: none;
    display: flex;
    align-items: center;
    font-size: 1rem;
    transition: all 0.3s ease;
}

.btn-link:hover {
    color: #a855f7;
    transform: translateX(5px);
}

.features {
    display: flex;
    gap: 30px;
}

.feature {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #9ca3af;
    font-size: 0.95rem;
}

.feature .icon {
    font-size: 1.2rem;
}

/* Hero Card */
.hero-card .card {
    background: linear-gradient(145deg, #1a1a2e, #16213e);
    color: #ffffff;
    border-radius: 20px;
    padding: 40px;
    text-align: center;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
    border: 2px solid rgba(0, 188, 212, 0.3);
    transition: all 0.3s ease;
}

.hero-card .card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 188, 212, 0.2);
    border-color: #00bcd4;
}

.avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: linear-gradient(135deg, #00bcd4, #a855f7);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 48px;
    margin: 0 auto 20px;
}

.hero-card h3 {
    font-size: 1.8rem;
    font-weight: 700;
    margin-bottom: 5px;
}

.hero-card .role {
    color: #00bcd4;
    font-size: 1rem;
    margin-bottom: 30px;
}

.stats {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
}

.stat {
    background: rgba(0, 188, 212, 0.1);
    border-radius: 12px;
    padding: 15px;
    border: 1px solid rgba(0, 188, 212, 0.2);
    transition: all 0.3s ease;
}

.stat:hover {
    background: rgba(0, 188, 212, 0.2);
    transform: translateY(-3px);
}

.stat p {
    color: #9ca3af;
    font-size: 0.9rem;
    margin-bottom: 5px;
}

.stat h4 {
    font-size: 1.5rem;
    font-weight: 700;
    color: #00bcd4;
}

/* About Section */
.about-section {
    background: #0a0a0a;
}

.about-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: center;
    margin-top: 40px;
}

.about-text p {
    font-size: 1.1rem;
    color: #d1d5db;
    margin-bottom: 30px;
    line-height: 1.8;
}

.skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 25px;
}

.skill-category h4 {
    color: #00bcd4;
    margin-bottom: 15px;
    font-size: 1.1rem;
}

.skill-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}

.tag {
    background: rgba(0, 188, 212, 0.1);
    border: 1px solid rgba(0, 188, 212, 0.3);
    color: #00bcd4;
    padding: 6px 15px;
    border-radius: 20px;
    font-size: 0.9rem;
    transition: all 0.3s ease;
}

.tag:hover {
    background: rgba(0, 188, 212, 0.2);
    transform: translateY(-2px);
}

.about-image {
    display: flex;
    justify-content: center;
    align-items: center;
}

.image-frame {
    width: 350px;
    height: 350px;
    border-radius: 20px;
    background: linear-gradient(145deg, #1a1a2e, #16213e);
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    box-shadow: 0 15px 35px rgba(0, 188, 212, 0.2);
    border: 2px solid rgba(0, 188, 212, 0.3);
}

.image-placeholder {
    font-size: 120px;
    background: linear-gradient(135deg, #00bcd4, #a855f7);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
}

/* Services Section */
.services-section {
    background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%);
}

.services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px;
    margin-top: 40px;
}

.service-card {
    background: linear-gradient(145deg, #1a1a2e, #16213e);
    border-radius: 16px;
    padding: 30px;
    text-align: center;
    border: 1px solid rgba(0, 188, 212, 0.2);
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
}

.service-card::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #00bcd4, #a855f7);
    transform: scaleX(0);
    transition: transform 0.3s ease;
}

.service-card:hover::before {
    transform: scaleX(1);
}

.service-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 35px rgba(0, 188, 212, 0.2);
    border-color: #00bcd4;
}

.service-card .icon {
    font-size: 48px;
    margin-bottom: 20px;
    display: block;
}

.service-card h3 {
    font-size: 1.4rem;
    margin-bottom: 20px;
    color: #ffffff;
}

.service-card ul {
    list-style: none;
    padding: 0;
}

.service-card ul li {
    color: #9ca3af;
    margin-bottom: 10px;
    position: relative;
    padding-left: 20px;
}

.service-card ul li::before {
    content: "▶";
    position: absolute;
    left: 0;
    color: #00bcd4;
    font-size: 0.7rem;
}

/* Portfolio Section */
.portfolio-section {
    background: #0a0a0a;
}

.grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 30px;
    margin-top: 40px;
}

.project-card {
    background: linear-gradient(145deg, #1a1a2e, #16213e);
    border-radius: 16px;
    overflow: hidden;
    border: 1px solid rgba(0, 188, 212, 0.2);
    transition: all 0.3s ease;
}

.project-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 35px rgba(0, 188, 212, 0.2);
    border-color: #00bcd4;
}

.preview {
    background: linear-gradient(135deg, #2a2a3e, #1a1a2e);
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
}

.preview::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 188, 212, 0.1);
    opacity: 0;
    transition: opacity 0.3s ease;
}

.project-card:hover .preview::after {
    opacity: 1;
}

.preview-placeholder {
    font-size: 80px;
    color: #00bcd4;
}

.content {
    padding: 25px;
}

.project-tag {
    display: inline-block;
    background: rgba(0, 188, 212, 0.1);
    color: #00bcd4;
    padding: 5px 15px;
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: 600;
    margin-bottom: 15px;
}

.project-card h3 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #ffffff;
    margin-bottom: 10px;
}

.project-card p {
    color: #9ca3af;
    font-size: 1rem;
    margin-bottom: 20px;
}

.project-card ul {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    list-style: none;
    padding: 0;
    margin: 0;
}

.project-card ul li {
    background: rgba(0, 188, 212, 0.1);
    color: #00bcd4;
    padding: 5px 12px;
    border-radius: 8px;
    font-size: 0.85rem;
    border: 1px solid rgba(0, 188, 212, 0.2);
}

/* Experience Section */
.experience-section {
    background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%);
}

.timeline {
    position: relative;
    max-width: 900px;
    margin: 50px auto;
}

.timeline::before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 100%;
    background: linear-gradient(to bottom, #00bcd4, #a855f7);
}

.timeline-item {
    position: relative;
    margin-bottom: 50px;
    width: 100%;
}

.timeline-dot {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #00bcd4;
    border: 4px solid #0a0a0a;
    z-index: 1;
    box-shadow: 0 0 20px rgba(0, 188, 212, 0.5);
}

.timeline-content {
    background: linear-gradient(145deg, #1a1a2e, #16213e);
    border-radius: 12px;
    padding: 25px;
    width: 45%;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(0, 188, 212, 0.2);
    transition: all 0.3s ease;
}

.timeline-content:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0, 188, 212, 0.2);
}

.timeline-item:nth-child(odd) .timeline-content {
    margin-left: auto;
}

.timeline-date {
    color: #00bcd4;
    font-weight: 600;
    margin-bottom: 10px;
    font-size: 0.9rem;
}

.timeline-content h3 {
    font-size: 1.3rem;
    margin-bottom: 5px;
    color: #ffffff;
}

.timeline-content h4 {
    color: #a855f7;
    font-weight: 500;
    margin-bottom: 15px;
}

.timeline-content ul {
    list-style-type: none;
    padding-left: 0;
}

.timeline-content ul li {
    position: relative;
    padding-left: 20px;
    margin-bottom: 8px;
    color: #9ca3af;
}

.timeline-content ul li::before {
    content: "▶";
    position: absolute;
    left: 0;
    color: #00bcd4;
    font-size: 0.7rem;
}

/* Education Section */
.education-section {
    background: #0a0a0a;
}

.education-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
    margin-top: 40px;
}

.education-card {
    background: linear-gradient(145deg, #1a1a2e, #16213e);
    border-radius: 16px;
    padding: 30px;
    text-align: center;
    border: 1px solid rgba(0, 188, 212, 0.2);
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
}

.education-card::before {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(
        circle,
        rgba(0, 188, 212, 0.1) 0%,
        transparent 70%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
}

.education-card:hover::before {
    opacity: 1;
}

.education-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 35px rgba(0, 188, 212, 0.2);
    border-color: #00bcd4;
}

.education-icon {
    font-size: 60px;
    margin-bottom: 20px;
    display: block;
}

.education-card h3 {
    font-size: 1.4rem;
    margin-bottom: 10px;
    color: #ffffff;
}

.education-place {
    color: #00bcd4;
    margin-bottom: 5px;
    font-weight: 500;
}

.education-date {
    color: #9ca3af;
    font-size: 0.9rem;
}

/* Contact Section */
.contact-section {
    background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%);
}

.contact-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    margin-top: 40px;
}

.contact-item {
    display: flex;
    align-items: flex-start;
    margin-bottom: 30px;
    background: rgba(0, 188, 212, 0.05);
    padding: 20px;
    border-radius: 12px;
    border: 1px solid rgba(0, 188, 212, 0.1);
    transition: all 0.3s ease;
}

.contact-item:hover {
    background: rgba(0, 188, 212, 0.1);
    transform: translateX(5px);
}

.contact-icon {
    font-size: 30px;
    margin-right: 20px;
    color: #00bcd4;
    min-width: 30px;
}

.contact-item h4 {
    font-size: 1.1rem;
    margin-bottom: 5px;
    color: #ffffff;
}

.contact-item p {
    color: #9ca3af;
    margin: 0;
}

.contact-form {
    background: linear-gradient(145deg, #1a1a2e, #16213e);
    border-radius: 16px;
    padding: 30px;
    border: 1px solid rgba(0, 188, 212, 0.2);
}

.form-group {
    margin-bottom: 20px;
}

.form-group input,
.form-group textarea {
    width: 100%;
    background: rgba(0, 188, 212, 0.05);
    border: 1px solid rgba(0, 188, 212, 0.2);
    border-radius: 8px;
    padding: 15px;
    color: white;
    font-size: 1rem;
    transition: all 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
    outline: none;
    border-color: #00bcd4;
    background: rgba(0, 188, 212, 0.1);
    box-shadow: 0 0 0 2px rgba(0, 188, 212, 0.2);
}

.form-group input::placeholder,
.form-group textarea::placeholder {
    color: #6b7280;
}

.btn-submit {
    background: linear-gradient(90deg, #00bcd4, #a855f7);
    color: white;
    border: none;
    padding: 15px 30px;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    width: 100%;
    font-size: 1rem;
}

.btn-submit:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(0, 188, 212, 0.4);
}

/* Footer */
.footer {
    background: #0a0a0a;
    padding: 60px 20px 20px;
    border-top: 1px solid rgba(0, 188, 212, 0.2);
}

.footer-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 40px;
    max-width: 1200px;
    margin: 0 auto 40px;
}

.footer-brand .logo {
    font-size: 1.8rem;
    font-weight: bold;
    background: linear-gradient(90deg, #00bcd4, #a855f7);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    margin-bottom: 10px;
}

.footer-brand .tagline {
    color: #9ca3af;
    font-size: 0.9rem;
}

.footer-links h4,
.footer-social h4 {
    font-size: 1.1rem;
    margin-bottom: 15px;
    color: #ffffff;
}

.footer-links ul {
    list-style: none;
    padding: 0;
}

.footer-links ul li {
    margin-bottom: 10px;
}

.footer-links ul.d-flex {
    display: flex;
    gap: 15px;
    list-style: none;
    padding: 0;
    margin: 0;
    flex-wrap: wrap; /* responsive ke liye */
}

.footer-links ul.d-flex li a {
    text-decoration: none;
    color: #fff;
}

.footer-links ul li a {
    color: #9ca3af;
    text-decoration: none;
    transition: all 0.3s ease;
    display: inline-block;
}

.footer-links ul li a:hover {
    color: #00bcd4;
    transform: translateX(5px);
}

.footer-social .social-icons {
    display: flex;
    gap: 15px;
}

.social-icon {
    color: #9ca3af;
    font-size: 1.5rem;
    transition: all 0.3s ease;
}

.social-icon:hover {
    color: #00bcd4;
    transform: translateY(-3px);
}

.footer-bottom {
    text-align: center;
    padding-top: 20px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    color: #6b7280;
    font-size: 0.9rem;
}

/* Responsive Design */
@media (max-width: 992px) {
    .hero .container,
    .about-content,
    .contact-content {
        grid-template-columns: 1fr;
        gap: 40px;
    }

    .timeline::before {
        left: 30px;
    }

    .timeline-dot {
        left: 30px;
    }

    .timeline-content {
        width: calc(100% - 80px);
        margin-left: 60px !important;
    }

    .navbar-nav {
        display: none;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: rgba(10, 10, 10, 0.98);
        flex-direction: column;
        padding: 20px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    }

    .navbar-nav.show {
        display: flex;
    }

    .navbar-toggler {
        display: block;
    }

    .nav-item {
        margin: 10px 0;
    }
}

@media (max-width: 768px) {
    .hero-content .title {
        font-size: 2.5rem;
    }

    .hero-content .subtitle {
        font-size: 1.4rem;
    }

    .section-title {
        font-size: 2rem;
    }

    .grid {
        grid-template-columns: 1fr;
    }

    .education-grid {
        grid-template-columns: 1fr;
    }

    .services-grid {
        grid-template-columns: 1fr;
    }

    .stats {
        grid-template-columns: 1fr;
        gap: 10px;
    }

    .features {
        flex-direction: column;
        gap: 15px;
    }

    .buttons {
        flex-direction: column;
        gap: 15px;
    }

    section {
        padding: 60px 0;
    }
}

@media (max-width: 576px) {
    .container {
        padding: 0 15px;
    }

    .hero-content .title {
        font-size: 2rem;
    }

    .hero-content .subtitle {
        font-size: 1.2rem;
    }

    .image-frame {
        width: 280px;
        height: 280px;
    }
}
</style>
