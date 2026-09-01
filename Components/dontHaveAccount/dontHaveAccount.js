import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import googleImg from "../assets/google.png";
import { signInWithGoogle } from "../firebase";

const DontHaveAccount = ({ onClose }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(""); // Step 1: Define error state

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            onClose();
        } catch (error) {
            console.error("Sign up error:", error.message);
        }
    };

    // Function to handle Google sign-up
    const handleGoogleSignUp = async () => {
        try {
            await signInWithGoogle();
            
        } catch (error) {
            setError(error.message); // Set the error message to show to the user
            console.error("Google sign up error:", error.message);
        }
    };

     return (
        <div className="auth__wrapper">
            <div className="auth">
                <div className="auth__content">
                    <div className="auth__title">Sign up to Summarist</div>
                    {error && <div className="auth__error">{error}</div>} {/* Display error message */}
                    <button className="btn google__btn--wrapper" onClick={handleGoogleSignUp}>
                        <figure className="google__icon--mask">
                            <img alt="google" src={googleImg} />
                        </figure>
                        <div>Sign up with Google</div>
                    </button>
                    <div className="auth__separator">
                        <span className="auth__separator--text">or</span>
                    </div>
                    <form className="auth__main--form" onSubmit={handleSignUp}>
                        <input 
                        className="auth__main--input" 
                            type="email" 
                            placeholder="Email Address" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                        />
                        <input 
                            className="auth__main--input" 
                            type="password" 
                            placeholder="Password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                        />
                        <button className="btn" type="submit">
                            <span>Sign up</span>
                        </button>
                    </form>
                    
                </div>
                <button className="auth__switch--btn" onClick={onClose}>Already have an account?</button>
            </div>
        </div>
    );
    
}

export default DontHaveAccount;