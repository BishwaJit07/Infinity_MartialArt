import { useState } from "react";
import { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

import { useEffect } from "react";
import app from "../Firebase/firebase.config";


export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
          const [user, setUser] = useState(null);

          const [loading, setLoading] = useState(true);

          const auth = getAuth(app);
        
        //   user login
        
   const logIn = (email , password) => 
  {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

            // create new user
  const createUser  = (email, password) =>
  {
        setLoading (true);
     return createUserWithEmailAndPassword(auth , email , password);
 };



    //  goggle

  const Googleprovider = new GoogleAuthProvider();
  const updateUser = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, Googleprovider);
  };
  

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("current User", currentUser);

    
    });
    return () => {
      return unsubscribe;
    };
  }, []);

  const authInfo = {
    user,
    logIn,
    logOut,
    loading,
    createUser,
    updateUser,
    googleSignIn,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
