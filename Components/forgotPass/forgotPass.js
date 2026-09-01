import { useState } from 'react';
import auth from '../firebase';
import { sendPasswordResetEmail } from 'firebase/auth';

const ForgotPass = ({ onClose }) => {
    const [email, setEmail] = useState('');

    const handlePasswordReset = async (e) => {
        e.preventDefault();
        try {
            await sendPasswordResetEmail(auth, email);
            alert('Password reset link sent! Check your email.');
            onClose();
        } catch (error) {
            console.error("Error sending password reset email: ", error);
            alert("Failed to send password reset link. Please try again.");
        }
    };

    return (
        <div className="auth__wrapper">
            <div className="auth">
                <div className="auth__content">
                    <div className="auth__title">Reset your password</div>
                    <form className="auth__main--form" onSubmit={handlePasswordReset}>
                        <input 
                            className="auth__main--input" 
                            type="email" 
                            placeholder="Email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <button className="btn" type="submit">
                            <span>Send reset password link</span>
                        </button>
                    </form>
                </div>
                <button className="auth__switch--btn" onClick={onClose}>Go to login</button>
                <div className="auth__close--btn" onClick={onClose}>
                    <svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z" fill="currentColor"></path>
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default ForgotPass;