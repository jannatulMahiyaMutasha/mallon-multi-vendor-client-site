import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB20AKs8RYQYSDLZ6z3-DGN_oPMKrOPCYQ",
  authDomain: "mallon-multi-vendor.firebaseapp.com",
  projectId: "mallon-multi-vendor",
  storageBucket: "mallon-multi-vendor.firebasestorage.app",
  messagingSenderId: "312124466381",
  appId: "1:312124466381:web:9afa485c4ea2215de6b584"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup };
