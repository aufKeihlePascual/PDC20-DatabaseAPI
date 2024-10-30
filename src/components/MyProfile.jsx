import React from "react";

const MyProfile = () => {
    return (
        <div className="container mt-5">
            {/* Profile Header */}
            <div className="bg-primary text-white text-center py-4">
                <h1>Your Profile</h1>
                <p>Update your information below</p>
            </div>

            {/* Profile Overview */}
            <div className="row mt-4">
                <div className="col-md-4">
                    <div className="card mb-4 text-center">
                        <div className="card-body">
                            <img
                                src="user.png"
                                alt="Profile"
                                className="img-fluid rounded-circle mb-3"
                            />
                            <h3>Keihle Pascual</h3>
                            <p className="text-muted">keihlepascual@auf.edu.ph</p>
                            <p className="text-muted">Bio: Passionate React developer and learner.</p>
                            <button className="btn btn-outline-primary">Edit Profile</button>
                        </div>
                    </div>
                </div>

                {/* Portfolio Section */}
                <div className="col-md-8">
                    <h2>Portfolio</h2>
                    <p>Here are some of my recent projects:</p>
                    <div className="list-group mb-4">
                        <a href="#" className="list-group-item list-group-item-action">
                            <h5>Project 1: Awesome React App</h5>
                            <p>A brief description of what this project does.</p>
                        </a>
                        <a href="#" className="list-group-item list-group-item-action">
                            <h5>Project 2: Another Cool Project</h5>
                            <p>A brief description of what this project does.</p>
                        </a>
                        <a href="#" className="list-group-item list-group-item-action">
                            <h5>Project 3: My Portfolio Website</h5>
                            <p>A brief description of what this project does.</p>
                        </a>
                    </div>

                    {/* Featured Projects Section */}
                    <h2>Featured Projects</h2>
                    <div className="row">
                        {/* Featured Project 1 */}
                        <div className="col-md-4 mb-4">
                            <div className="bg-light p-3 border rounded">
                                <img src="https://via.placeholder.com/300x200" className="img-fluid mb-2" alt="Featured Project 1" />
                                <h5>Featured Project 1</h5>
                                <p>A brief description of this featured project.</p>
                                <a href="#" className="btn btn-primary">View Project</a>
                            </div>
                        </div>
                        {/* Featured Project 2 */}
                        <div className="col-md-4 mb-4">
                            <div className="bg-light p-3 border rounded">
                                <img src="https://via.placeholder.com/300x200" className="img-fluid mb-2" alt="Featured Project 2" />
                                <h5>Featured Project 2</h5>
                                <p>A brief description of this featured project.</p>
                                <a href="#" className="btn btn-primary">View Project</a>
                            </div>
                        </div>
                        {/* Featured Project 3 */}
                        <div className="col-md-4 mb-4">
                            <div className="bg-light p-3 border rounded">
                                <img src="https://via.placeholder.com/300x200" className="img-fluid mb-2" alt="Featured Project 3" />
                                <h5>Featured Project 3</h5>
                                <p>A brief description of this featured project.</p>
                                <a href="#" className="btn btn-primary">View Project</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-dark text-center text-light py-4 mt-5">
                <p>&copy; {new Date().getFullYear()} React.js Learning Hub. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default MyProfile;