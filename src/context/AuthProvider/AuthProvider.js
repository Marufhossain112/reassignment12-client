import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../../firebase/firebase.init";
const auth = getAuth(app);
export const MyContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const providerLogin = (provider) => {
    return signInWithPopup(auth, provider);
  };
  const updateUser = (userInfo) => {
    return updateProfile(auth.currentUser, userInfo);
  };
  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("current User inside state change", currentUser);
      setUser(currentUser);
    });

    return () => unSubscribe();
  }, []);
  const authInfo = { user, logOut, providerLogin, createUser, updateUser };
  return <MyContext.Provider value={authInfo}>{children}</MyContext.Provider>;
};

export default AuthProvider;
