import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth';
import { useContext, useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContex } from '../Contex/Contex';
import app from '../Firebase/Firebase.config';

const auth = getAuth(app);

const Authentication = () => {
    const { loading, setLoading } = useContext(AuthContex)
    const [faild, setFaild] = useState('');

    // const location = useLocation();
    // const from = location.state?.from?.pathname || "/";

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    // const navigate = useNavigate();

    const googleSigninHandle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const githubSignInHandle = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }


    const userLogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)

    }

    const createUser = (email, password, name, photo) => {
        return createUserWithEmailAndPassword(auth, email, password)

    }
    const updateuser = (name, photo) => {
        updateProfile(auth.currentUser, { displayName: name, photoURL: photo })
            .then(result => { })
            .catch(err => { console.log(err.message) })
    }

    const emailVerify = () => {
        sendEmailVerification(auth.currentUser)
            .then(res => { })
    }

    const resetHandle = (email) => {
        if (email) {
            return sendPasswordResetEmail(auth, email)
        }
        else { alert("Enter your email those password you want to change.") }
    }

    return {
        googleSigninHandle,
        loading,
        faild,
        githubSignInHandle,
        createUser,
        resetHandle,
        userLogin,
        updateuser,
        emailVerify
    }
}


export default Authentication;