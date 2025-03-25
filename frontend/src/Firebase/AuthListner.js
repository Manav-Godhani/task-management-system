import { onAuthStateChanged } from "firebase/auth";
import axios from "axios";
import { auth } from "../Firebase/firebase"; 

useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, async (user) => {
    if (user && user.emailVerified) {
      try {
        // Send user data to your backend
        await axios.post("http://localhost:3000/api/students", {
          name: user.displayName, // Ensure you capture name during sign-up
          email: user.email,
          uid: user.uid, // Firebase unique ID
        });

        console.log("User data stored in MongoDB.");
      } catch (error) {
        console.error("Error saving user to MongoDB:", error);
      }
    }
  });

  return () => unsubscribe();
}, []);
