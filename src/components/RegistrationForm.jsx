// src/components/RegistrationForm.jsx
import React, { useState } from "react";
import TabbedForm from "../MyMainForms/TabForm/TabbedForm";
import { Link } from "react-router-dom";

const RegistrationForm = () => {
  const [activeTab, setActiveTab] = useState(0);

  // State for each section of the form
  const [personalInfo, setPersonalInfo] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    gender: "",
  });

  const [contactInfo, setContactInfo] = useState({
    email: "",
    phone: "",
    address: "",
    city: "",
  });

  const [academicInfo, setAcademicInfo] = useState({
    studentId: "",
    program: "",
    yearLevel: "",
    gpa: "",
  });

  const [additionalDetails, setAdditionalDetails] = useState({
    hobbies: "",
    skills: "",
    otherNotes: "",
  });

  const handleInputChange = (e, section) => {
    const { name, value } = e.target;

    if (section === "personal") {
      setPersonalInfo((prev) => ({ ...prev, [name]: value }));
    } else if (section === "contact") {
      setContactInfo((prev) => ({ ...prev, [name]: value }));
    } else if (section === "academic") {
      setAcademicInfo((prev) => ({ ...prev, [name]: value }));
    } else if (section === "additional") {
      setAdditionalDetails((prev) => ({ ...prev, [name]: value }));
    }
  };

  const validateFields = () => {
    let isValid = true;
    if (!personalInfo.firstName || !contactInfo.email || !academicInfo.studentId) {
      isValid = false;
    }
    return isValid;
  };

  // Handle form submission
  const handleSubmit = () => {
    if (!validateFields()) {
      alert("Please fill out all required fields.");
      return;
    }

    const formData = {
      personalInfo,
      contactInfo,
      academicInfo,
      additionalDetails,
    };
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="registration-form">
      <TabbedForm
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        personalInfo={personalInfo}
        contactInfo={contactInfo}
        academicInfo={academicInfo}
        additionalDetails={additionalDetails}
        handleInputChange={handleInputChange}
      />
      
    </div>
  );
};

export default RegistrationForm;