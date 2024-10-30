import React from "react";

const ContactUs = () => {
    return (
        <div className="container mt-5">
            {/* Hero Section */}
            <header className="bg-success text-white text-center py-5">
                <h1>Contact Us</h1>
                <p>We'd love to hear from you!</p>
            </header>

            {/* Contact Form Section */}
            <div className="mt-4">
                <h2>Get in Touch</h2>
                <form>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="name">Name</label>
                            <input type="text" className="form-control" id="name" placeholder="Your Name" required />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="email">Email</label>
                            <input type="email" className="form-control" id="email" placeholder="Your Email" required />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea className="form-control" id="message" rows="5" placeholder="Your Message" required></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
            </div>

            {/* Contact Information Section */}
            <div className="mt-5">
                <h2>Contact Information</h2>
                <p>If you have any questions, feel free to reach out to us:</p>
                <ul className="list-unstyled bg-light p-3 rounded shadow">
                    <li><strong>Email:</strong> support@reactlearninghub.com</li>
                    <li><strong>Phone:</strong> +1 (234) 567-8901</li>
                    <li><strong>Address:</strong> 123 React Lane, Code City, ST 12345</li>
                </ul>
            </div>

            {/* Social Media Section */}
            <div className="mt-5">
                <h2>Follow Us</h2>
                <p>Stay connected with us through social media:</p>
                <ul className="list-inline">
                    <li className="list-inline-item">
                        <a href="https://facebook.com" className="btn btn-outline-light">Facebook</a>
                    </li>
                    <li className="list-inline-item">
                        <a href="https://twitter.com" className="btn btn-outline-info">Twitter</a>
                    </li>
                    <li className="list-inline-item">
                        <a href="https://linkedin.com" className="btn btn-outline-secondary">LinkedIn</a>
                    </li>
                </ul>
            </div>

            {/* Footer */}
            <footer className="bg-dark text-center text-light py-4 mt-5">
                <p>&copy; {new Date().getFullYear()} React.js Learning Hub. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default ContactUs;