import React, { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const authInfApi = {
    createUser,
  };

  return (
    <AuthContext.Provider value={authInfApi}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
