import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../Components/firebase";
import AlertLogout from "../../Components/alertLogout/alertLogout";
import Logout from "../../Components/logout/logout";

const LogoutPage = () => {
  const [confirmed, setConfirmed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const handleConfirm = async () => {
    setErrorMsg("");
    setLoading(true);

    try {
      await signOut(auth);
      setConfirmed(true);
    } catch (error) {
      setErrorMsg(error.message || "Failed to log out. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!confirmed) {
    return (
      <AlertLogout
        onConfirm={handleConfirm}
        onCancel={() => navigate(-1)}
        loading={loading}
        errorMsg={errorMsg}
      />
    );
  }

  return <Logout />;
};

export default LogoutPage;
