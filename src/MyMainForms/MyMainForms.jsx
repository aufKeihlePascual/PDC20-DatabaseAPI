import React from "react";
import { Route, Routes, Link }  from "react-router-dom";

import BasicForms from "./BasicForms";

const MyMainForms = () => {
    return (
        <div>
            <h1>React Forms App</h1>
            <nav>
                <ul>
                    <li><Link to="basic-form">Basic Form</Link></li>
                </ul>
            </nav>
            <Routes>
                <Route path="basic-form" element={ <BasicForms/> } />
            </Routes>

        </div>
    );
};

export default MyMainForms;