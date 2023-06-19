import React, { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Add your authentication check logic here
    const checkAuthentication = () => {
      
      const token = localStorage.getItem('token');
      if (token) {
        setIsAuth(true);
      } else {
        setIsAuth(false);
      }
    };

    checkAuthentication();
  }, [isAuth]);

  if (isAuth) {
    return <>{children}</>;
  }
else {
    console.log(location)
    return <Navigate state={location.pathname} to="/login" replace />;
  }
};

export default PrivateRoute;


// import React, { useEffect, useState } from 'react';
// import {useHistory , useLocation } from 'react-router-dom';

// const PrivateRoute = ({ children }) => {
//   const [isAuth, setIsAuth] = useState(false);
//   const history = useHistory();
//   const location = useLocation();

//   useEffect(() => {
//     // Add your authentication check logic here
//     const checkAuthentication = () => {
//       // Check if the user is authenticated
//       // You can use your own authentication mechanism, such as checking a token in local storage
//       const token = localStorage.getItem('token');
//       if (token) {
//         setIsAuth(true);
//       } else {
//         setIsAuth(false);
//       }
//     };

//     checkAuthentication();
//   }, []);

//   useEffect(() => {
//     if (!isAuth) {
//       // Save the current location to redirect the user back after successful login
//       history.push({
//         pathname: '/login',
//         state: { from: location.pathname },
//       });
//     }
//   }, [isAuth, history, location.pathname]);

//   if (isAuth) {
//     return <>{children}</>;
//   } else {
//     return null; // Render nothing if not authenticated
//   }
// };

// export default PrivateRoute;
// import React, { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';

// const PrivateRoute = ({ children }) => {
//   const [isAuth, setIsAuth] = useState(false);
//   const location = useLocation();

//   useEffect(() => {
//     // Add your authentication check logic here
//     const checkAuthentication = () => {
//       // Check if the user is authenticated
//       // You can use your own authentication mechanism, such as checking a token in local storage
//       const token = localStorage.getItem('token');
//       if (token) {
//         setIsAuth(true);
//       } else {
//         setIsAuth(false);
//       }
//     };

//     checkAuthentication();
//   }, []);

//   useEffect(() => {
//     if (!isAuth) {
//       // Save the current location to localStorage
//       localStorage.setItem('prevLocation', location.pathname);
//     }
//   }, [isAuth, location.pathname]);

//   const handleLoginSuccess = () => {
//     const prevLocation = localStorage.getItem('prevLocation');
//     if (prevLocation) {
//       // Redirect to the previous location
//       window.location.href = prevLocation;
//       localStorage.removeItem('prevLocation');
//     } else {
//       // Redirect to the default location after login
//       window.location.href = '/';
//     }
//   };

//   if (isAuth) {
//     return <>{children}</>;
//   } else {
//     return null; // Render nothing if not authenticated
//   }
// };

// export default PrivateRoute;
