import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loding, setloding] = useState(true);
  const [reload, setReload] = useState(false);
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInWithEAndPd = (email, password) => {
    setloding(false);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateAUser = (displayName, photoURL) => {
    console.log(displayName, photoURL);
    return updateProfile(auth.currentUser, {
      displayName: `${displayName}`,
      photoURL: `${photoURL}`,
    })
      .then(() => {
        // Profile updated!
        // ...
        console.log();
      })
      .catch((error) => {
        // An error occurred
        // ...
        console.log(error);
      });
  };

  useEffect(() => {
    const connection = onAuthStateChanged(auth, (user) => {
      setloding(false);
      setUser(user);
    });
    return () => {
      return connection();
    };
  }, [reload]);
  const logout = () => {
    signOut(auth);
  };

  const authInfApi = {
    user,
    loding,
    createUser,
    signInWithEAndPd,
    updateAUser,
    logout,
    auth,
    // provider,
    setloding,
    setReload,
  };

  return (
    <AuthContext.Provider value={authInfApi}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
