import logo from '../assets/logo.png';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__logo">
          <img src={logo} alt="DataAutomate" className="footer__logo-img" />
        </div>

        <div className="footer__bottom">
          <p>© 2026 DataAutomate. All rights reserved.</p>
          <p>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#contact">Contact</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
