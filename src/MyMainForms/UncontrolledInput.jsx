import React, {useRef} from "react";

const UncontrolledInput = () => {
    const phoneRef = useRef();
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(`Phone Number: ${phoneRef.current.value}`);
    };
  
    return (
      <div style={styles.container}>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="text"
            ref={phoneRef}
            placeholder="Enter your phone number"
            style={styles.input}
          />
          <button type="submit" style={styles.button}>
            Submit
          </button>
        </form>
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
    form: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'stretch',  
      width: '100%',
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
  };
  
  export default UncontrolledInput;