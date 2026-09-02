import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, signInWithGoogle } from "../firebase";
import "../loginToggle/loginToggle.css";

const firebaseErrorMessage = (code, fallback) => {
  switch (code) {
    case "auth/email-already-in-use":
      return "An account with this email already exists.";
    case "auth/invalid-email":
      return "Please enter a valid email address.";
    case "auth/weak-password":
      return "Password must be at least 6 characters.";
    case "auth/operation-not-allowed":
      return "Email/password sign-up is not enabled in Firebase.";
    case "auth/network-request-failed":
      return "Network error. Check your internet connection.";
    default:
      return fallback || "Sign up failed. Please try again.";
  }
};

const DontHaveAccount = ({ onClose, onSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || password.length < 6) {
      setError("Enter a valid email and a password with at least 6 characters.");
      return;
    }

    setLoading(true);

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      onSuccess?.();
    } catch (signUpError) {
      setError(firebaseErrorMessage(signUpError.code, signUpError.message));
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignUp = async () => {
    setError("");
    setLoading(true);

    try {
      await signInWithGoogle();
      onSuccess?.();
    } catch (googleError) {
      setError(firebaseErrorMessage(googleError.code, googleError.message));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth__wrapper auth__wrapper--overlay">
      <div className="auth">
        <div className="auth__content">
          <div className="auth__title">Sign up to ??MyApp??</div>
          {error && <div className="auth__error">{error}</div>}
          <button
            type="button"
            className="btn google__btn--wrapper"
            onClick={handleGoogleSignUp}
            disabled={loading}
          >
            <figure className="google__icon--mask">
              <img alt="google" src="/google.svg" />
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
              required
            />
            <input
              className="auth__main--input"
              type="password"
              placeholder="Password (min 6 characters)"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              minLength={6}
              required
            />
            <button className="btn" type="submit" disabled={loading}>
              <span>{loading ? "Creating account..." : "Sign up"}</span>
            </button>
          </form>
        </div>
        <button className="auth__switch--btn" type="button" onClick={onClose}>
          Already have an account?
        </button>
        <button className="auth__close--btn" type="button" onClick={onClose} aria-label="Close">
          <svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z" fill="currentColor" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default DontHaveAccount;
