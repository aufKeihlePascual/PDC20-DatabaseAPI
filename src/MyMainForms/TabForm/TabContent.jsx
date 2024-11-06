import React from "react";

// activeTab defines the name
// after the &&, it's the content
const TabContent = ({ activeTab, formData, onChange }) => {
  return (
    <div style={styles.container}>
      {activeTab === "basic" && (
        <div>
          <h2 style={styles.header}>Basic Information</h2>
          <div style={styles.formGroup}>
            <label style={styles.label}>
              Name:
              <input
                type="text"
                value={formData.name}
                onChange={(e) => onChange("name", e.target.value)}
                placeholder="Enter your name"
                style={styles.input}
              />
            </label>
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>
              Age:
              <input
                type="text"
                value={formData.age}
                onChange={(e) => onChange("age", e.target.value)}
                placeholder="Enter your age"
                style={styles.input}
              />
            </label>
          </div>
        </div>
      )}

      {activeTab === "contact" && (
        <div>
          <h2 style={styles.header}>Contact Information</h2>
          <div style={styles.formGroup}>
            <label style={styles.label}>
              Email:
              <input
                type="email"
                value={formData.email}
                onChange={(e) => onChange("email", e.target.value)}
                placeholder="Enter your email"
                style={styles.input}
              />
            </label>
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>
              Phone:
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => onChange("phone", e.target.value)}
                placeholder="Enter your phone"
                style={styles.input}
              />
            </label>
          </div>
        </div>
      )}

      {activeTab === "account" && (
        <div>
          <h2 style={styles.header}>Account Information</h2>
          <div style={styles.formGroup}>
            <label style={styles.label}>
              Username:
              <input
                type="text"
                value={formData.username}
                onChange={(e) => onChange("username", e.target.value)}
                placeholder="Enter your username"
                style={styles.input}
              />
            </label>
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>
              Password:
              <input
                type="password"
                value={formData.password}
                onChange={(e) => onChange("password", e.target.value)}
                placeholder="Enter your password"
                style={styles.input}
              />
            </label>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
  },
  header: {
    fontSize: "20px",
    color: "#333",
    marginBottom: "15px",
  },
  formGroup: {
    marginBottom: "15px",
  },
  label: {
    display: "block",
    fontSize: "16px",
    fontWeight: "bold",
    marginBottom: "8px",
    color: "#555",
  },
  input: {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    marginTop: "5px",
    boxSizing: "border-box", 
    transition: "border-color 0.3s ease",
  },
};

export default TabContent;
