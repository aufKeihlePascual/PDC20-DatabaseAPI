import React, {useState} from "react";

// This is a good example for validating if a user's email fits the requirements

const ControlledInput = () => {
    const [email, setEmail] = useState('');
  
    const handleChange = (e) => {
      setEmail(e.target.value);
      console.log("Current Email:", e.target.value);
    };
  
    return (
      <div style={styles.container}>
        <input
          type="email"
          value={email}
          onChange={handleChange}
          placeholder="Enter your email"
          style={styles.input}
        />
      </div>
    );
  };
  
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '300px', 
      margin: 'auto',
      marginTop: '50px',
    },
    input: {
      padding: '10px',
      fontSize: '16px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      width: '100%', 
    },
  };
  
  export default ControlledInput;