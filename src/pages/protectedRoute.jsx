import { Navigate } from 'react-router-dom';
import { useEffect, useState } from "react";


const ProtectedRoute = ({ children }) => {

  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem('isAuthenticated'));

  useEffect(() => {

    const handleStorageChange = (event) => {
      if (event.key === 'isAuthenticated') {
        setIsAuthenticated(event.newValue);
      }
    };

    // Listen for storage changes when the component mounts
    window.addEventListener('storage', handleStorageChange);

    // Cleanup the event listener when the component unmounts
    window.removeEventListener('storage', handleStorageChange);

  }, []);


  if (isAuthenticated !== 'true') {
    // Redirect to login page if the user is not authenticated
    return <Navigate to="/login" replace={true} />;
  }

  // Render the children if authenticated
  return children;
};

export default ProtectedRoute;
