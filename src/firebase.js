import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyAsd8N6Sxqlj02lvXAZAHVkUyevm1qDbzs",
  authDomain: "netflix-clone-dd5af.firebaseapp.com",
  projectId: "netflix-clone-dd5af",
  storageBucket: "netflix-clone-dd5af.firebasestorage.app",
  messagingSenderId: "925472052489",
  appId: "1:925472052489:web:73c50431154a220888afd8",
  measurementId: "G-FS2XXJTJTN"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const analytics = getAnalytics(app);
const db = getFirestore(app)

const signUp = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "user"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email
        });
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(' '));
    }
}

const login = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(' '));
    }
}

const logOut = async () => {
    signOut(auth);
}

export {auth, db, login, signUp, logOut};