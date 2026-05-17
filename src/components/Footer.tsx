import { ExternalLink, Share2, Code2, Mail } from 'lucide-react';
import logo from '../assets/logo.png';
import './Footer.css';

const links = {
  Product: ['Dashboard Builder', 'Pipeline Studio', 'Alert Engine', 'AI Forecasting', 'API Access'],
  Industries: ['Healthcare', 'Finance', 'Logistics', 'Manufacturing', 'Retail', 'Education'],
  Company: ['About Us', 'Careers', 'Blog', 'Press', 'Partners'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'GDPR', 'Security'],
};

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <div className="footer__logo">
              <img src={logo} alt="DataAutomate" className="footer__logo-img" />
            </div>
            <p className="footer__tagline">
              Unifying organisational data into automated, live dashboards — so every
              decision is driven by facts.
            </p>
            <div className="footer__socials">
              <a href="#" aria-label="LinkedIn"><ExternalLink size={18} /></a>
              <a href="#" aria-label="Twitter"><Share2 size={18} /></a>
              <a href="#" aria-label="GitHub"><Code2 size={18} /></a>
              <a href="#" aria-label="Email"><Mail size={18} /></a>
            </div>
          </div>

          <div className="footer__links">
            {Object.entries(links).map(([cat, items]) => (
              <div key={cat} className="footer__col">
                <h4>{cat}</h4>
                <ul>
                  {items.map((item) => (
                    <li key={item}><a href="#">{item}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} DataAutomate. All rights reserved.</p>
          <p>Built with <span className="footer__heart">♥</span> for data-driven organisations worldwide.</p>
        </div>
      </div>
    </footer>
  );
}
