import { useEffect, useState } from 'react';
import initializeAuthentication from '../Firebase/firebase.initialization';

// importing from firebase 
import { getAuth, GoogleAuthProvider, GithubAuthProvider, TwitterAuthProvider, signInWithPopup, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";

initializeAuthentication()

const useFirebase = () => {
    // initializing states 
    const [user, setUser] = useState({})
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    // firebase auth 
    const auth = getAuth();

    // login user providers 
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const twitterProvider = new TwitterAuthProvider();

    // sign in using google account 
    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider).catch((error) => {
            setError(error.message)
        })
    }
    // sign in using github account 
    const signInUsingGithub = () => {
        return signInWithPopup(auth, githubProvider).catch((error) => {
            setError(error.message)
        })
    }
    // sign in using twitter account 
    const signInUsingTwitter = () => {
        return signInWithPopup(auth, twitterProvider).catch((error) => {
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

    // user logout 
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
    }

    // Creating new user start
    const handleSubmit = (e) => {
        e.preventDefault()
        if (password.length < 6) {
            setError('Password Must be at least 6 characters long.')
            return;
        }
    }

    const handleName = (e) => {
        setName(e.target.value);
    }

    const setUserName = (e) => {
        updateProfile(auth.currentUser, {
            displayName: name
        }).then(() => {
        })
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleUserSignUp = () => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // Creating new user end

    // existing user sign in
    const handleUserSignIn = () => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // exporting states and functions
    return {
        user,
        setUser,
        password,
        error,
        setError,
        signInUsingGoogle,
        signInUsingGithub,
        signInUsingTwitter,
        logOut,
        handleSubmit,
        handleName,
        setUserName,
        handleEmail,
        handlePassword,
        handleUserSignIn,
        handleUserSignUp
    }
};

export default useFirebase;