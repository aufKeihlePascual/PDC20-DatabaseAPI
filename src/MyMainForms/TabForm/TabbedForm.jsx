import React, { useState } from "react";
import Tab from "./Tab";
import TabContent from "./TabContent";

const TabbedForm = () => {
    const [activeTab, setActiveTab] = useState('basic');
    
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        email: '',
        phone: '',
        username: '',
        password: '',
    });
    
    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    // Shadow copy to preserve previous data
    const handleChange = (field, value) => {
        setFormData((prevData) => ({
            ...prevData,
            [field]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Submitted Data: ${JSON.stringify(formData, null, 2)}`);
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.header}>Tabbed Form with Shared State</h1>
            
            <div style={styles.tabContainer}>
                <Tab
                    name="Basic Information"
                    isActive={activeTab === 'basic'}
                    onClick={() => handleTabChange('basic')}
                />
                <Tab
                    name="Contact Information"
                    isActive={activeTab === 'contact'}
                    onClick={() => handleTabChange('contact')}
                />
                <Tab
                    name="Account Information"
                    isActive={activeTab === 'account'}
                    onClick={() => handleTabChange('account')}
                />
            </div>

            <form onSubmit={handleSubmit} style={styles.form}>
                <TabContent
                    activeTab={activeTab}
                    formData={formData}
                    onChange={handleChange}
                />
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
        backgroundColor: '#007BFF',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '16px',
        transition: 'background-color 0.3s ease',
    },
};

export default TabbedForm;
