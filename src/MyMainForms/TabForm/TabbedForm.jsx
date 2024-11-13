import React, { useState } from "react";
import Tab from "./Tab";
import TabContent from "./TabContent";

const TabbedForm = ({ activeTab, setActiveTab, handleSubmit }) => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    dob: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    studentId: '',
    program: '',
    yearLevel: '',
    gpa: '',
    hobbies: '',
    skills: '',
    notes: '',
  });

  const [errors, setErrors] = useState({
    firstname: '',
    email: '',
    studentId: '',
  });

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [field]: '',
    }));
  };

  const validateForm = () => {
    let validationErrors = {};

    if (!formData.firstname.trim()) {
      validationErrors.firstname = 'First Name is required.';
    }
    if (!formData.lastname.trim()) {
      validationErrors.lastname = 'Last Name is required.';
    }
    if (!formData.dob.trim()) {
      validationErrors.dob = 'Date of Birth is required.';
    }
    if (!formData.email.trim()) {
      validationErrors.email = 'Email is required.';
    }
    if (!formData.studentId.trim()) {
      validationErrors.studentId = 'Student ID is required.';
    }

    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      alert(`Submitted Data: ${JSON.stringify(formData, null, 2)}`);
      handleSubmit(formData);  // You can keep this for additional processing if needed
    } else {
      alert('Please fill in the required fields.');
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Student Registration Form</h1>
      <div style={styles.tabContainer}>
        <Tab name="Personal Information" isActive={activeTab === 'personal'} onClick={() => handleTabChange('personal')} />
        <Tab name="Contact Information" isActive={activeTab === 'contact'} onClick={() => handleTabChange('contact')} />
        <Tab name="Academic Information" isActive={activeTab === 'academic'} onClick={() => handleTabChange('academic')} />
        <Tab name="Additional Information" isActive={activeTab === 'additional'} onClick={() => handleTabChange('additional')} />
      </div>

      <form onSubmit={handleFormSubmit} style={styles.form}>
        <TabContent activeTab={activeTab} formData={formData} onChange={handleChange} errors={errors} />
        <div style={styles.errorContainer}>
          {errors.firstname && <p style={styles.errorText}>{errors.firstname}</p>}
          {errors.lastname && <p style={styles.errorText}>{errors.lastname}</p>}
          {errors.email && <p style={styles.errorText}>{errors.email}</p>}
          {errors.studentId && <p style={styles.errorText}>{errors.studentId}</p>}
        </div>
        <button type="submit" style={styles.submitButton}>Submit</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    margin: '40px auto',
    width: '80%',
    maxWidth: '800px',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  },
  header: {
    textAlign: 'center',
    marginBottom: '20px',
    fontSize: '24px',
    color: '#333',
  },
  tabContainer: {
    display: 'flex',
    borderBottom: '2px solid #ccc',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  submitButton: {
    padding: '10px 15px',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    backgroundColor: '#007BFF',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  errorContainer: {
    marginTop: '10px',
  },
  errorText: {
    color: 'red',
    fontSize: '14px',
    margin: '5px 0',
  },
};

export default TabbedForm;