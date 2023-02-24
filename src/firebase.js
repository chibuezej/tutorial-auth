import {initializeApp} from 'firebase/app'
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyA2U-k5cKmIB5bM107vVcqzn8EQ52KNIl8",
  authDomain: "react-authentication-a00a1.firebaseapp.com",
  projectId: "react-authentication-a00a1",
  storageBucket: "react-authentication-a00a1.appspot.com",
  messagingSenderId: "521669351957",
  appId: "1:521669351957:web:1c01b59109cd71d0f14c1c",
  measurementId: "G-KQ7CP5PR0B"
}

 const app = initializeApp(firebaseConfig)
  export  const auth = getAuth(app)

  export default app