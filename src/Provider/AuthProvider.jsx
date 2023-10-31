import { createContext, useEffect, useState } from "react";
import app from "../firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);
import axios from 'axios';

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true); 

    const createUser = (email, password) =>{
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
    }

const signIn = (email, password) => {
  setLoading(true); 
 return  signInWithEmailAndPassword(auth, email, password)

}

const logOut = () => {
  setLoading(true); 
  return signOut(auth);
}

useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, currentUser => {
    const userEmail = currentUser?.email || user?.email;  
    const loggedUser = {email: userEmail}; 
     setUser(currentUser);
     console.log("current user", currentUser);
     setLoading(false); 
     if(currentUser){
      axios.post("http://localhost:5000/jwt", loggedUser, {withCredentials: true})  
      .then(res => {
        console.log("token response", res.data);  
      })
     }
     else{
       axios.post("http://localhost:5000/logout", loggedUser, {withCredentials: true})
       .then(res => {
         console.log(res.data); 
       })
     }
  })
  return () => {
    return unsubscribe();
  }
}, [])

  const authInfo = {
    user, 
    loading,
    createUser,
    signIn,
    logOut
  };

  return (
    <div>
      <AuthContext.Provider value={authInfo}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
