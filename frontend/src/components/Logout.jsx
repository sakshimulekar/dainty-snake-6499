import React from 'react'
import axios from 'axios';
const Logout = () => {
  const handleLogout = async () => {
    try {
      const response = await axios.get('http://localhost:8080/users/logout');

      // Clear the token from local storage or session storage
      localStorage.removeItem('token');

      console.log(response.data.msg);
      // Redirect the user to the login page
      //window.location.href = '/login';
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Logout

