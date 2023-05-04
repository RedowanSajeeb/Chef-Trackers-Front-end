import React, { createContext } from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const providergit = new GithubAuthProvider();


const AuthProvider = ({ children }) => {
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };


  const signInWithEAndPd = (email,password) =>{
     return signInWithEmailAndPassword(auth,email,password)
  }

  const scontinuewithGoogle = () =>{

    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(user);
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage,errorCode);
        // ...
      });

  }

  const continuewithGithubGit = () =>{
     signInWithPopup(auth, providergit)
       .then((result) => {
         // This gives you a GitHub Access Token. You can use it to access the GitHub API.
         const credential = GithubAuthProvider.credentialFromResult(result);
         const token = credential.accessToken;

         // The signed-in user info.
         const user = result.user;
         // IdP data available using getAdditionalUserInfo(result)
         // ...
         console.log(user);
       })
       .catch((error) => {
         // Handle Errors here.
         const errorCode = error.code;
         const errorMessage = error.message;
        console.log(errorMessage,errorCode);
         // ...
       });
  }



  const authInfApi = {
    createUser,
    signInWithEAndPd,
    scontinuewithGoogle,
    continuewithGithubGit,
  };

  return (
    <AuthContext.Provider value={authInfApi}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
