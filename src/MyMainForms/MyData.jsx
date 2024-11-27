import React, {useState, useEffect} from "react";
import '../data.css';

function MyData() {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);
    
    //functions to fetch data using API
    const fetchUsers = async () => {
        try {
            const response = await fetch('http://localhost/pdc20-tabbedregistration/get_user.php', {
                method: 'GET',
                // headers: {
                //     'Content-Type': 'application/json', #removed because of the header already input in the get_user.php
                // }
            });
            
            if (!response.ok) {
                throw new Error(`Error: ${response.status} - ${response.statusText}`);
            }

            const data = await response.json();
            setUsers(data);

        } catch (err) {
            setError(err.message);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return(
        <div style={{padding: '15px'}}>
            <h1>User List</h1>

            {error && <p style={{color: 'red'}}> Error: {error} </p>}
            {users.length > 0 ? (
                <table className="user-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Birthdate</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Address</th>
                            <th>City</th>
                            <th>Student ID</th>
                            <th>Program</th>
                            <th>Yr Level</th>
                            <th>GPA</th>
                            <th>Hobbies</th>
                            <th>Skills</th>
                            <th>Others</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.ID}>
                                <td>{user.first_name} {user.last_name}</td>
                                <td>{user.dob}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>{user.address}</td>
                                <td>{user.city}</td>
                                <td>{user.studentID}</td>
                                <td>{user.program}</td>
                                <td>{user.yearLevel}</td>
                                <td>{user.gpa}</td>
                                <td>{user.hobbies}</td>
                                <td>{user.skills}</td>
                                <td>{user.otherNotes}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No users found.</p>
            )}
        </div>
    ); 
}

export default MyData;