import { createContext, useContext, useState } from "react";

// Create AuthContext
export const AuthContext = createContext();

// Create a function AuthProvider
export default function AuthProvider({ children }) {
  // Get Users from localStorage
  const initialAuthUser = localStorage.getItem("Users");

  // State for authUser
  const [authUser, setAuthUser] = useState(
    initialAuthUser ? JSON.parse(initialAuthUser) : null
  );

  return (
    <AuthContext.Provider value={[authUser, setAuthUser]}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook to use AuthContext
export const useAuth = () => useContext(AuthContext);
