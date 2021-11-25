import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Login/Firebase/Firebase.init";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    updateProfile,
    getIdToken
} from "firebase/auth";

//initializeFirebase app
initializeFirebase();

const auth = getAuth();
const googleProvider = new GoogleAuthProvider();


const useFirebase = () => {
    const [user, setUser] = useState({})
    const [isLoding, setIsLoding]=useState(true)
    const [authError, setAuthError] = useState('')
    const [admin, setAdmin] = useState(false);
    const [token, setToken] = useState('');

    const registerUser = (email, password,name,history) => {
        setIsLoding(true)
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            setAuthError('');
            const newUser = { email, displayName: name };
            setUser(newUser);
            //save user to database
            saveUser(email, name,'POST');
             //send name to firebase after creation
             updateProfile(auth.currentUser, {
                displayName: name 
              }).then(() => {
              }).catch((error) => {
                
              });
            history.replace('/');
          })
          .catch((error) => {
            
            setAuthError(error.message);
            
          })
            .finally(()=>setIsLoding(false));
        
    }


    const loginUser = (email, password,location,history) => {
        setIsLoding(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                history.replace(destination);
                setAuthError('');
        })
        .catch((error) => {
            
            setAuthError(error.message);
        })
        .finally(()=>setIsLoding(false));
    }

//signInWithGoogle
    const signInWithGoogle = (location, history) => {
        setIsLoding(true)

        signInWithPopup(auth, googleProvider)
        .then((result) => {
            const user = result.user;
            saveUser(user.email, user.displayName,'PUT')
            setAuthError('');
            const destination = location?.state?.from || '/';
            history.replace(destination);

        }).catch((error) => {
            setAuthError(error.message);

        
        }).finally(()=>setIsLoding(false));
}




//observer user state
    useEffect(() => {
        const unsubscribe= onAuthStateChanged(auth, (user) => {
            if (user) {
             
                setUser(user)
                getIdToken(user)
                    .then(idToken => {
                    setToken(idToken);
                })
              
            } else {
              setUser({})
            }
            setIsLoding(false)
        });
        return () => unsubscribe;
    },[])


    useEffect(() => {
        fetch(`http://localhost:5000/users/${user.email}`)
            .then(res => res.json())
        .then(data=>setAdmin(data.admin))
    },[user.email])


    const logOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          })
          .finally(()=>setIsLoding(false));
    }



    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('http://localhost:5000/users', {
            method: method,
            headers: {
                'content-type':'application/json'
            },
            body:JSON.stringify(user)
        })
        .then()
    }
    return {
        user,
        isLoding,
        registerUser,
        logOut,
        loginUser,
        authError,
        signInWithGoogle,
        admin,
        token
    }
}
export default useFirebase;