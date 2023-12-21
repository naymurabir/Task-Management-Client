import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../../Firebase/firebase.config";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

export const AuthContext = createContext()

const AuthProviders = ({ children }) => {
    const axiosPublic = useAxiosPublic()

    const googleProvider = new GoogleAuthProvider()

    const [user, setUser] = useState([])
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log("Observing on", currentUser);
            const userEmail = currentUser?.email || user?.email
            const loggedUser = { email: userEmail }
            setUser(currentUser)
            setLoading(false)

            if (currentUser) {
                axiosPublic.post('/jwt', loggedUser)
                    .then(res => {
                        console.log(res.data);
                    })
            }
            else {
                axiosPublic.post('/logout', loggedUser)
                    .then(res => {
                        console.log(res.data);
                    })
            }
        })

        return () => {
            unSubscribe();
        }
    }, [axiosPublic, user?.email])


    const updateUserProfile = (name, photo) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }


    const userInfo = {
        user,
        createUser,
        signInUser,
        googleLogin,
        loading,
        logOut,
        updateUserProfile
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;