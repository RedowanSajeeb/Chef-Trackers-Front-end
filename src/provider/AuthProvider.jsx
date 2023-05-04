import React, { createContext, useEffect, useState } from "react";
import {  createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword,  signOut,  updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);




const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loding, setloding] = useState(true);
  const [reload,setReload] = useState(false)
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };


  const signInWithEAndPd = (email,password) =>{
      setloding(false)
     return signInWithEmailAndPassword(auth,email,password)
  }

  // const scontinuewithGoogle = () =>{

  //   signInWithPopup(auth, provider)
  //    setloding(false)
  //     .then((result) => {
  //       // This gives you a Google Access Token. You can use it to access the Google API.
  //       const credential = GoogleAuthProvider.credentialFromResult(result);
  //       const token = credential.accessToken;
  //       // The signed-in user info.
  //       const user = result.user;
  //       console.log(user);
  //       // IdP data available using getAdditionalUserInfo(result)
  //       // ...
  //     })
  //     .catch((error) => {
  //       // Handle Errors here.
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       console.log(errorMessage,errorCode);
  //       // ...
  //     });

  // }

  // const continuewithGithubGit = () =>{
  //    signInWithPopup(auth, providergit)
  //      setloding(false)
  //      .then((result) => {
  //        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
  //        const credential = GithubAuthProvider.credentialFromResult(result);
  //        const token = credential.accessToken;

  //        // The signed-in user info.
  //        const user = result.user;
  //        // IdP data available using getAdditionalUserInfo(result)
  //        // ...
  //        console.log(user);
  //      })
  //      .catch((error) => {
  //        // Handle Errors here.
  //        const errorCode = error.code;
  //        const errorMessage = error.message;
  //       console.log(errorMessage,errorCode);
  //        // ...
  //      });
  // }

const updateAUser = (displayName, photoURL) => {
  console.log(displayName,photoURL);
    return updateProfile(auth.currentUser, {
    displayName: `${displayName}`,
    photoURL: `${photoURL}`,
  })
    // .then(() => {
    //   // Profile updated!
    //   // ...
    //   console.log();
    // })
    // .catch((error) => {
    //   // An error occurred
    //   // ...
    //   console.log(error);
    // });
};


  useEffect(()=>{

    const connection = onAuthStateChanged(auth,(user)=>{
      setloding(false)      
      setUser(user)
 
    })
    return ()=>{
      return connection()
    }

  },[reload])
const logout = () =>{
  signOut(auth)
}

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
    setReload
  };

  return (
    <AuthContext.Provider value={authInfApi}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
