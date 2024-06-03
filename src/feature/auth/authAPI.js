const isAuthenticated = () => {
    // For demo purposes, let's assume the user is logged in if a certain condition is met
    // In a real application, you would check cookies, local storage, or a context value
    return localStorage.getItem("isLoggedIn") === "true";
  };

  export default isAuthenticated;