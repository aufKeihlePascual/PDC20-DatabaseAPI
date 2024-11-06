import React from "react";
import { Route, Routes, Link }  from "react-router-dom";

import BasicForms from "./BasicForms";
import ControlledInput from "./ControlledInput";

const MyMainForms = () => {
    return (
        <div>
            <h1>React Forms App</h1>
            <nav>
                <ul>
                    <li><Link to="basic-form">Basic Form</Link></li>
                    <li><Link to="controlled-input">Controlled Input</Link></li>
                </ul>
            </nav>
            <Routes>
                <Route path="basic-form" element={ <BasicForms/> } />
                <Route path="controlled-input" element={ <ControlledInput /> } />
            </Routes>

        </div>
    );
};

export default MyMainForms;