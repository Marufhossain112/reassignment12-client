import React, { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithPopup,
} from "firebase/auth";
import app from "../../firebase/firebase.init";
const auth = getAuth(app);
export const MyContext = createContext();
const AuthProvider = ({ children }) => {
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const providerLogin = (provider) => {
    return signInWithPopup(auth, provider);
  };
  const authInfo = { providerLogin, createUser };
  return <MyContext.Provider value={authInfo}>{children}</MyContext.Provider>;
};

export default AuthProvider;
