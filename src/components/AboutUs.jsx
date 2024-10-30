import React from "react";

const AboutUs = () => {
    return (
        <div className="container mt-5">
            {/* Hero Section */}
            <header className="bg-info text-white text-center py-5">
                <h1>About Us</h1>
                <p>Empowering developers through learning and community.</p>
            </header>

            {/* Mission Section */}
            <div className="mt-4">
                <h2>Our Mission</h2>
                <p>
                    At React.js Learning Hub, our mission is to provide a comprehensive platform for learning React.js. We aim to simplify the learning process and empower developers to build powerful applications using this popular JavaScript library.
                </p>
            </div>

            {/* Team Section */}
            <div className="mt-5">
                <h2>Meet the Team</h2>
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <img src="https://via.placeholder.com/300?text=Team+Member" className="card-img-top" alt="Team Member 1" />
                            <div className="card-body">
                                <h5 className="card-title">Don David</h5>
                                <p className="card-text">Frontend Developer and React Enthusiast.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <img src="https://via.placeholder.com/300?text=Team+Member" className="card-img-top" alt="Team Member 2" />
                            <div className="card-body">
                                <h5 className="card-title">Mark Santos</h5>
                                <p className="card-text">Backend Developer and JavaScript Expert.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <img src="https://via.placeholder.com/300?text=Team+Member" className="card-img-top" alt="Team Member 3" />
                            <div className="card-body">
                                <h5 className="card-title">Keihle Pascual</h5>
                                <p className="card-text">UI/UX Designer passionate about user experience.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Community Section */}
            <div className="mt-5">
                <h2>Join Our Community</h2>
                <p>
                    We believe in the power of community. Join our forums and discussion groups to connect with other learners, share your projects, and seek help when needed. Together, we can grow and excel in our coding journey!
                </p>
            </div>

            {/* Footer */}
            <footer className="bg-light text-center py-4 mt-5">
                <p>&copy; {new Date().getFullYear()} React.js Learning Hub. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default AboutUs;