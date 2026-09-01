import HeaderHome from "../../Components/headerHome/headerHome";
import FooterHome from "../../Components/footerHome/footerHome";
import Navbar from "../../Components/navbar/navbar";

const LoggedIn = () => {
  return (
    <div className="loggedIn">
      <div className="loggedIn__container">
        <HeaderHome />
        <Navbar />
        <h1 className="loggedIn__title">
          Hey there! Now that you are logged in, you can create and manage your study materials.
          Create flashcards, notepads, and more to help you study effectively.
        </h1>
        <FooterHome />
      </div>
    </div>
  );
};

export default LoggedIn;
