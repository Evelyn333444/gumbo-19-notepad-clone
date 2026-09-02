import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AlertLogout from "../../Components/alertLogout/alertLogout";
import Logout from "../../Components/logout/logout";

const LogoutPage = () => {
  const [confirmed, setConfirmed] = useState(false);
  const navigate = useNavigate();

  if (!confirmed) {
    return (
      <AlertLogout
        onConfirm={() => setConfirmed(true)}
        onCancel={() => navigate(-1)}
      />
    );
  }

  return <Logout />;
};

export default LogoutPage;
