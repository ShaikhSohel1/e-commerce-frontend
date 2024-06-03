import React from 'react';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import isAuthenticated from '../authAPI';
import { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

const Protected = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn !== "true") {
      navigate('/login');
    }
  }, [navigate]);

  return <Outlet/>;
};

export default Protected;