import React from "react";

// activeTab defines the name
// after the &&, it's the content
const TabContent = ({ activeTab, formData, onChange }) => {
  return (
    <div style={styles.container}>
      {activeTab === "personal" && (
        <div>
          <h2 style={styles.header}>Personal Information</h2>
          <div style={styles.formGroup}>
            <label style={styles.label}>
              First Name:
              <input
                type="text"
                value={formData.firstname}
                onChange={(e) => onChange("firstname", e.target.value)}
                placeholder="Enter your first name"
                style={styles.input}
              />
            </label>
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>
              Last Name:
              <input
                type="text"
                value={formData.lastname}
                onChange={(e) => onChange("lastname", e.target.value)}
                placeholder="Enter your lastname"
                style={styles.input}
              />
            </label>
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>
              Date of Birth:
              <input
                type="date"
                value={formData.dob}
                onChange={(e) => onChange("dob", e.target.value)}
                placeholder="Enter your birthdate"
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

          <div style={styles.formGroup}>
            <label style={styles.label}>
              Address:
              <input
                type="text"
                value={formData.address}
                onChange={(e) => onChange("address", e.target.value)}
                placeholder="Enter your address"
                style={styles.input}
              />
            </label>
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>
              City:
              <input
                type="text"
                value={formData.city}
                onChange={(e) => onChange("city", e.target.value)}
                placeholder="Enter your city"
                style={styles.input}
              />
            </label>
          </div>

        </div>
      )}

      {activeTab === "academic" && (
        <div>
          <h2 style={styles.header}>Academic Information</h2>
          <div style={styles.formGroup}>
            <label style={styles.label}>
              Student ID:
              <input
                type="text"
                value={formData.studentId}
                onChange={(e) => onChange("studentId", e.target.value)}
                placeholder="Enter your student ID"
                style={styles.input}
              />
            </label>
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>
              Program:
              <input
                type="text"
                value={formData.program}
                onChange={(e) => onChange("program", e.target.value)}
                placeholder="Enter your program"
                style={styles.input}
              />
            </label>
          </div>
          
          <div style={styles.formGroup}>
            <label style={styles.label}>
              Year Level:
              <input
                type="text"
                value={formData.yearLevel}
                onChange={(e) => onChange("yearLevel", e.target.value)}
                placeholder="Enter your year level"
                style={styles.input}
              />
            </label>
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>
              GPA:
              <input
                type="number"
                value={formData.gpa}
                onChange={(e) => onChange("gpa", e.target.value)}
                placeholder="Enter your GPA"
                style={styles.input}
                step="0.1"
                min="0.0"
                max="4.0"
              />
            </label>
          </div>
        </div>
      )}

      {activeTab === "additional" && (
        <div>
          <h2 style={styles.header}>Additional Details</h2>
          <div style={styles.formGroup}>
            <label style={styles.label}>
              Hobbies:
              <input
                type="text"
                value={formData.hobbies}
                onChange={(e) => onChange("hobbies", e.target.value)}
                placeholder="Enter your hobbies"
                style={styles.input}
              />
            </label>
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>
              Skills:
              <input
                type="text"
                value={formData.skills}
                onChange={(e) => onChange("skills", e.target.value)}
                placeholder="Enter your skills"
                style={styles.input}
              />
            </label>
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>
              Other Notes:
              <textarea
                value={formData.notes}
                onChange={(e) => onChange("notes", e.target.value)}
                placeholder="Enter any other notes"
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
