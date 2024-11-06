import React, {useState} from "react";

const BasicForms = () => {
    const [name, setName] = useState('');
  
    const handleChange = (event) => {
      setName(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      alert(`Submitted Name: ${name}`);
    };
  
    return (
      <div style={styles.container}>
        <form onSubmit={handleSubmit} style={styles.form}>
          <label htmlFor="name" style={styles.label}>Enter your name:</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={handleChange}
            placeholder="Your name"
            style={styles.input}
          />
          <button type="submit" style={styles.button}>Submit</button>
        </form>
  
        {name && <p style={styles.nameDisplay}>Your name is: <strong>{name}</strong></p>}
      </div>
    );
  };
  
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f9f9f9',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      width: '300px',
      margin: 'auto',
      marginTop: '50px',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'stretch', 
      width: '100%',
    },
    label: {
      fontSize: '16px',
      marginBottom: '8px',
      color: '#333',
    },
    input: {
      padding: '10px',
      fontSize: '16px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      width: '100%',  
      marginBottom: '12px',
    },
    button: {
      padding: '10px',
      fontSize: '16px',
      backgroundColor: '#007BFF',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      width: '100%', 
    },
    nameDisplay: {
      marginTop: '20px',
      fontSize: '16px',
      color: '#555',
    },
  };
  
  export default BasicForms;