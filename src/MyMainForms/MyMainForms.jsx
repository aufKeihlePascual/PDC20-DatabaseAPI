import React from "react";
import { Route, Routes, Link }  from "react-router-dom";

import BasicForms from "./BasicForms";
import ControlledInput from "./ControlledInput";
import UncontrolledInput from "./UncontrolledInput";
import TabbedForm from "./TabForm/TabbedForm";
import RegistrationForm from "../components/RegistrationForm";

const MyMainForms = () => {
    return (
        <div>
            <h1>React Forms App</h1>
            <nav>
                <ul>
                    <li><Link to="basic-form">Basic Form</Link></li>
                    <li><Link to="controlled-input">Controlled Input</Link></li>
                    <li><Link to="uncontrolled-input">Uncontrolled Input</Link></li>
                    <li><Link to="registration-form">Registration Form</Link></li>
                </ul>
            </nav>
            <Routes>
                <Route path="basic-form" element = { <BasicForms/> } />
                <Route path="controlled-input" element = { <ControlledInput /> } />
                <Route path="uncontrolled-input" element = { <UncontrolledInput /> } />
                <Route path="registration-form" element = { <RegistrationForm/> } />
            </Routes>

        </div>
    );
};

export default MyMainForms;