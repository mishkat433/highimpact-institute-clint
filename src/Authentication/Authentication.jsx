import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth';
import { useContext } from 'react';
import { AuthContex } from '../Contex/Contex';
import app from '../Firebase/Firebase.config';

const auth = getAuth(app);

const Authentication = () => {
    const { setLoading } = useContext(AuthContex)

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    // google login
    const googleSigninHandle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    // github login
    const githubSignInHandle = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }

    // login with email and password
    const userLogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // create user with email and password
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)

    }

    // user profile update
    const updateuser = (name, photo) => {
        updateProfile(auth.currentUser, { displayName: name, photoURL: photo })
            .then(result => { })
            .catch(err => { console.log(err.message) })
    }

    // email varyfy
    const emailVerify = () => {
        sendEmailVerification(auth.currentUser)
            .then(res => { })
    }

    // password reset
    const resetHandle = (email) => {
        if (email) {
            return sendPasswordResetEmail(auth, email)
        }
        else { alert("Enter your email those password you want to change.") }
    }

    return {
        googleSigninHandle,
        githubSignInHandle,
        createUser,
        resetHandle,
        userLogin,
        updateuser,
        emailVerify
    }
}


export default Authentication;