import "../style/index.css"
import "../style/footer.css"
import { FaInstagram } from "react-icons/fa";
function Footer() {
  return (
    <footer>
      <h1>
        © 2025 Gaby's Gifts
      </h1>
      <img src="https://i.imgur.com/pxnct1B.png" alt="Gaby's Gifts" className="footer-logo" />
      <a href="https://www.instagram.com/gabysgifts.ok/" target="_blank" rel="noopener noreferrer">
        <FaInstagram></FaInstagram>
      </a>
    </footer>
  );
}

export default Footer;
