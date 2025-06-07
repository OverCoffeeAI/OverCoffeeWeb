import React from 'react';
import logo from '/public/over_coffee_logo_1mb.jpg';
import './OverCoffeeLanding.css'

// Types
interface TestimonialData {
    quote: string;
    author: string;
    title: string;
}

interface FeatureData {
    icon: string;
    title: string;
    description: string;
}

const OverCoffeeLanding: React.FC = () => {
    // Features data
    const features: FeatureData[] = [
        {
            icon: 'bi-chat-dots',
            title: 'Guided Dialogues',
            description: 'AI-driven, empathetic conversations that help you explore feelings and find direction.'
        },
        {
            icon: 'bi-journal-text',
            title: 'Reflective Journaling',
            description: 'Prompts and exercises boost self-awareness—capture your thoughts in real time.'
        },
        {
            icon: 'bi-emoji-smile',
            title: 'Emotional Insights',
            description: 'Personalized reports show patterns and suggest next steps for mental well-being.'
        }
    ];

    // Testimonials data
    const testimonials: TestimonialData[] = [
        {
            quote: "It feels like talking to a close friend. It's a useful tool for the overthinker like myself.",
            author: 'Evin J.',
            title: 'College Student'
        },
        {
            quote: "I love the weekly reflection feature—it keeps me grounded, especially during stressful exam weeks.",
            author: 'Michaela N.',
            title: 'Graduate Student'
        },
        {
            quote: "The insights report gave me a clearer picture of my goals and feelings. Highly recommend!",
            author: 'Emily R.',
            title: 'Young Professional'
        }
    ];

    return (
        <>

            <div data-bs-spy="scroll" data-bs-target=".navbar">
                {/* Navbar */}
                <nav className="navbar fixed-top navbar-expand-lg bg-white shadow-sm">
                    <div className="container-fluid">
                        <a className="navbar-brand d-flex align-items-center" href="#home">
                            <img
                                src={logo}
                                alt="Over Coffee Logo"
                                width="50"
                                height="50"
                            />
                            <span className="ms-2">Over Coffee</span>
                        </a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <a className="nav-link active" href="#home">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="blog.html">Blog</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="Over-Coffee-AI.html">
                                        Over Coffee AI
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                {/* Hero Section */}
                <section id="home" className="hero-section d-flex align-items-center text-white">
                    <div className="container text-center">
                        <h1 className="display-4 fw-bold">Find Clarity Over Coffee</h1>
                        <p className="lead">
                            An empathetic, AI-powered reflection tool guiding you to purpose
                            and emotional insight.
                        </p>
                        <a href="#features" className="btn btn-brand btn-lg">Learn More</a>
                    </div>
                </section>

                {/* Features Section */}
                <section id="features" className="py-5">
                    <div className="container">
                        <div className="section-intro text-center">
                            <h2>Core Features</h2>
                            <div className="hline"></div>
                            <p>
                                Over Coffee turns introspection into action—journaling prompts,
                                guided conversations, and personalized insights.
                            </p>
                        </div>

                        <div className="row g-4">
                            {features.map((feature, index) => (
                                <div key={index} className="col-md-4 text-center">
                                    <i className={`bi ${feature.icon} feature-icon`}></i>
                                    <h5 className="mt-3">{feature.title}</h5>
                                    <p>{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Testimonials Section */}
                <section id="testimonials" className="py-5 testimonials-section">
                    <div className="container">
                        <div className="section-intro text-center">
                            <h2>What People Say</h2>
                            <div className="hline"></div>
                        </div>

                        <div className="row g-4">
                            {testimonials.map((testimonial, index) => (
                                <div key={index} className="col-md-4">
                                    <div className="card testimonial-card">
                                        <div className="card-body">
                                            <p>"{testimonial.quote}"</p>
                                            <footer className="blockquote-footer text-white">
                                                {testimonial.author}, <cite>{testimonial.title}</cite>
                                            </footer>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* About Section */}
                <section id="about" className="py-5">
                    <div className="container">
                        <div className="section-intro text-center">
                            <h2>About Over Coffee</h2>
                            <div className="hline"></div>
                            <p>
                                Over Coffee is designed for students and young adults seeking
                                emotional clarity and purpose. By blending AI-powered reflection
                                with human warmth, we encourage you to explore your thoughts,
                                journal meaningfully, and find actionable steps forward.
                            </p>
                        </div>

                        <div className="row align-items-center g-4">
                            <div className="col-md-6">
                                <img
                                    src="images/about-illustration.png"
                                    alt="About Over Coffee"
                                    className="img-fluid rounded"
                                />
                            </div>
                            <div className="col-md-6">
                                <p>
                                    We believe introspection shouldn't feel overwhelming. Over Coffee
                                    simplifies self-exploration into bite-size, daily prompts and
                                    empathetic chat sessions. Whether you're juggling coursework,
                                    part-time work, or new challenges, Over Coffee meets you where you
                                    are—no judgment, only guidance.
                                </p>
                                <p>
                                    Our mission is to foster mental-health awareness, encourage honest
                                    reflection, and help you connect with your true motivations—all
                                    through a friendly, conversational interface.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className="py-5">
                    <div className="container">
                        <div className="section-intro text-center">
                            <h2>Get in Touch</h2>
                            <div className="hline"></div>
                        </div>

                        <div className="row justify-content-center">
                            <div className="col-md-6">
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="nameInput" className="form-label">Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="nameInput"
                                            placeholder="Your name"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="emailInput" className="form-label">Email</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="emailInput"
                                            placeholder="you@example.com"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="messageInput" className="form-label">Message</label>
                                        <textarea
                                            className="form-control"
                                            id="messageInput"
                                            rows={4}
                                            placeholder="Your message..."
                                        ></textarea>
                                    </div>
                                    <div className="text-center">
                                        <button type="submit" className="btn btn-brand">
                                            Send Message
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer>
                    <div className="container text-center">
                        <img
                            src={logo}
                            alt="Over Coffee Logo"
                            width="120"
                            className="mb-2"
                        />
                        <p className="mb-0">© 2025 Over Coffee — All Rights Reserved.</p>
                        <div className="social-media-icons mt-2">
                            <a
                                href="https://www.linkedin.com/company/over-coffee"
                                aria-label="LinkedIn"
                            >
                                <i className="bi bi-linkedin"></i>
                            </a>
                            <a href="https://github.com/YourGithubHandle" aria-label="GitHub">
                                <i className="bi bi-github"></i>
                            </a>
                            <a href="https://twitter.com/over-coffee" aria-label="Twitter">
                                <i className="bi bi-twitter"></i>
                            </a>
                        </div>
                    </div>
                </footer>

                {/* Bootstrap JS */}
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
            </div>
        </>
    );
};

export default OverCoffeeLanding;