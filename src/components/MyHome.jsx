import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const MyHome = () => {
    return (
        <div className="container">
            {/* Hero Section */}
            <header className="bg-primary text-white text-center py-5">
                <h1>Welcome to React.js Learning Hub</h1>
                <p>Your journey to mastering React starts here!</p>
            </header>

            {/* Carousel Section */}
            <div id="reactCarousel" className="carousel slide mt-4" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="image.png" className="d-block w-100" alt="Learn React Basics" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Learn React Basics</h5>
                            <p>Get started with the fundamental concepts of React.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="image.png" className="d-block w-100" alt="Explore Advanced React" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Explore Advanced React</h5>
                            <p>Dive into hooks, context API, and more.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="image.png" className="d-block w-100" alt="Build Real Projects" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Build Real Projects</h5>
                            <p>Apply your knowledge by creating real-world applications.</p>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#reactCarousel" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" style={{ backgroundColor: 'blue' }} aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#reactCarousel" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" style={{ backgroundColor: 'blue' }} aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>

            {/* Cards Section */}
            <div className="row mt-4">
                <div className="col-md-4">
                    <div className="card">
                        <img src="image.png" className="card-img-top" alt="React Basics" />
                        <div className="card-body">
                            <h5 className="card-title">React Basics</h5>
                            <p className="card-text">Learn the fundamental concepts of React, including components, state, and props to help your career.</p>
                            <a href="#" className="btn btn-primary">Start Learning</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <img src="image.png" className="card-img-top" alt="Advanced React" />
                        <div className="card-body">
                            <h5 className="card-title">Advanced React</h5>
                            <p className="card-text">Dive deeper into React with hooks, context API, and performance optimization techniques.</p>
                            <a href="#" className="btn btn-primary">Explore Now</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <img src="image.png" className="card-img-top" alt="Projects" />
                        <div className="card-body">
                            <h5 className="card-title">Projects</h5>
                            <p className="card-text">Apply your knowledge by building real-world projects and enhancing your portfolio.</p>
                            <a href="#" className="btn btn-primary">View Projects</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-light text-center py-4 mt-5">
                <p>&copy; {new Date().getFullYear()} React.js Learning Hub. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default MyHome;