import { useEffect, useState } from 'react';
import initializeAuthentication from '../Firebase/firebase.initialization';
import { getAuth, GoogleAuthProvider, GithubAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";

initializeAuthentication()

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider).catch((error) => {
            setError(error.message)
        })
    }
    const signInUsingGithub = () => {
        return signInWithPopup(auth, githubProvider).catch((error) => {
            setError(error.message)
        })
    }
    // observe whether user auth state changed or not
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
        });
        return unsubscribe;
    }, [])

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
    }


    return {
        user,
        setUser,
        error,
        setError,
        signInUsingGoogle,
        signInUsingGithub,
        logOut
    }
};

export default useFirebase;