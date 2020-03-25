import React, { useContext, useEffect } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../Firebase.config";
import { useState, createContext } from "react";
import {Route, Redirect} from 'react-router-dom';


firebase.initializeApp(firebaseConfig);

const AuthContext = createContext();

export const AuthContextProvider = (props) => {
    const auth = Auth();
    return <AuthContext.Provider value={auth}>{props.children}</AuthContext.Provider>
}

export const useAuth = () => {
    return useContext(AuthContext);
}


export const PrivateRoute =({ children, ...rest }) => {
    const auth = useAuth();
    return (
      <Route
        {...rest}
        render={({ location }) =>
          auth.user? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }



const getUser = user => {
    const { displayName, email, photoURL } = user;
    return{ name: displayName, email: email, photoURL };
}

const Auth = () => {

    const [user, setUser] = useState(null);


    const singInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        return firebase.auth().signInWithPopup(provider)
            .then(res => {
                
                const signedInUser = getUser(res.user);
                setUser(signedInUser);
                return res;
            })
            .catch(error => {
                console.log(error);
                return error.message;
            })
    }

    const signOut = () => {
        firebase.auth().signOut().then(function () {
            setUser(null);
        }).catch(function (error) {
            // An error happened.
        });
    }

    useEffect(() => {
        firebase.auth().onAuthStateChanged(function (usr) {
            if (usr) {

                const currUser = getUser(usr)
                setUser(currUser);
            } else {
                // No user is signed in.
            }
        });
    },[])

    return {
        singInWithGoogle,
        user,
        signOut
    }

}

export default Auth;