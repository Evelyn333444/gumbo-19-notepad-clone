const CONTACT_EMAIL = "brackesb12@gmail.com";
const MAILTO_LINK = `mailto:${CONTACT_EMAIL}?subject=Notepad%20Clone%20Feedback`;

const FooterHome = () => {
  return (
    <footer className="footer-home">
      <a href={MAILTO_LINK} className="footer-home__contact">
        Contact
      </a>
      <p>&copy; 2026 ??App-Name??. All rights reserved.</p>
    </footer>
  );
};

export default FooterHome;
