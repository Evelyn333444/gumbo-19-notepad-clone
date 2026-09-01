import googleImg from "../assets/google.png";
import { useState } from 'react';
import { signInWithGoogle, auth } from "../firebase";
import { signInAnonymously, signInWithEmailAndPassword } from "firebase/auth";
import ForgotPass from "./ForgotPass";
import dontHaveAccount from "./DontHaveAccount";
import { useNavigate } from "react-router-dom";



const LoginToggle = ({ onClose }) => {
    const [showForgotPass, setShowForgotPass] = useState(false);
    const [showDontAccount, setShowDontAccount] = useState(false);
    const navigate = useNavigate();

        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [loading, setLoading] = useState(false);
        const [errorMsg, setErrorMsg] = useState('');
        const [emailError, setEmailError] = useState('');
        const [passwordError, setPasswordError] = useState('');

        const validateEmail = (value) => {
            const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@\"]+\.)+[^<>()[\]\\.,;:\s@\"]{2,})$/i;
            return re.test(String(value).toLowerCase());
        }

        const handleGuestLogin = async () => {
    try {
        setLoading(true);
        await signInAnonymously(auth);
        setLoading(false);
        onClose();
        navigate("/");
    } catch (error) {
        setLoading(false);
        console.error(error.message);
        setErrorMsg(firebaseErrorMessage(error.code, error.message));
    }
};

        const handleEmailLogin = async (e) => {
            e.preventDefault();
            setErrorMsg('');
            let valid = true;
            if (!validateEmail(email)) {
                setEmailError('Please enter a valid email address');
                valid = false;
            }
            if (!password || password.length < 6) {
                setPasswordError('Password must be at least 6 characters');
                valid = false;
            }
            if (!valid) return;

            try {
                setLoading(true);
                await signInWithEmailAndPassword(auth, email, password);
                setLoading(false);
                onClose();
                navigate('/');
            } catch (error) {
                setLoading(false);
                setErrorMsg(firebaseErrorMessage(error.code, error.message));
            }
        };

        const handleGoogleLogin = async () => {
                try {
                        setLoading(true);
                        await signInWithGoogle();
                        setLoading(false);
                        onClose();
                        navigate('/');
                } catch (error) {
                        setLoading(false);
                setErrorMsg(firebaseErrorMessage(error.code, error.message));
                }
        };

        const firebaseErrorMessage = (code, fallback) => {
            switch (code) {
                case 'auth/user-not-found':
                    return 'No account found with that email.';
                case 'auth/wrong-password':
                    return 'Incorrect password. Please try again.';
                case 'auth/invalid-email':
                    return 'Please enter a valid email address.';
                case 'auth/too-many-requests':
                    return 'Too many attempts. Please try again later.';
                case 'auth/network-request-failed':
                    return 'Network error. Check your internet connection.';
                case 'auth/popup-closed-by-user':
                    return 'Sign-in popup was closed before completing.';
                case 'auth/popup-blocked':
                    return 'Popup blocked by browser. Allow popups and try again.';
                case 'auth/user-disabled':
                    return 'This user account has been disabled.';
                case 'auth/invalid-password':
                    return 'Password is invalid.';
                default:
                    return fallback || 'Authentication failed. Please try again.';
            }
        };

    return (
        <div className="auth__wrapper">
            <div className="auth">
                <div className="auth__content">
                    <div className="auth__title">Log in to Summarist</div>
                    <button className="btn guest__btn--wrapper" onClick={handleGuestLogin}>
                        <figure className="google__icon--mask guest__icon--mask">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path>
                            </svg>
                        </figure>
                        <div>Login as a Guest</div>
                    </button>
                    <div className="auth__separator">
                        <span className="auth__separator--text">or</span>
                    </div>
                    <button className="btn google__btn--wrapper" onClick={handleGoogleLogin}>
                        <figure className="google__icon--mask">
                            <img alt="google" src={googleImg} loading="lazy" style={{ color: "transparent" }} />
                        </figure>
                        <div>Login with Google</div>
                    </button>
                    <div className="auth__separator">
                        <span className="auth__separator--text">or</span>
                    </div>
                    <form className="auth__main--form" onSubmit={handleEmailLogin}>
                        <input className="auth__main--input" type="email" placeholder="Email Address" value={email} onChange={(e) => { setEmail(e.target.value); setEmailError(validateEmail(e.target.value) ? '' : 'Please enter a valid email address'); }} />
                        {emailError && <div style={{color: '#c53030', marginTop: 6}}>{emailError}</div>}
                        <input className="auth__main--input" type="password" placeholder="Password" value={password} onChange={(e) => { setPassword(e.target.value); setPasswordError(e.target.value.length >= 6 ? '' : 'Password must be at least 6 characters'); }} />
                        {passwordError && <div style={{color: '#c53030', marginTop: 6}}>{passwordError}</div>}
                        <button className="btn" type="submit" disabled={loading || emailError || passwordError || !email || !password}>
                            <span>{loading ? 'Logging in...' : 'Login'}</span>
                        </button>
                        {errorMsg && <div style={{color: '#c53030', marginTop: 8}}>{errorMsg}</div>}
                    </form>
                </div>
                <div className="auth__forgot--password" onClick={() => setShowForgotPass(true)}>Forgot your password?</div>
                {showForgotPass && <ForgotPass onClose={() => setShowForgotPass(false)} />}
                <button className="auth__switch--btn" onClick={() => setShowDontAccount(true)}>Don't have an account?</button>
                {showDontAccount && <DontHaveAccount onClose={() => setShowDontAccount(false)} />}
                <div className="auth__close--btn" onClick={onClose}>
                    <svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z" fill="currentColor"></path>
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default LoginToggle;