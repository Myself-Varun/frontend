import "../stylesheets/footer.css";
import insta from "../assets/imagecopy.png";
import face from "../assets/imagecopy1.png";
import link from "../assets/imagecopy2.png";

export default function Footer() {
  return (
    <footer className="footer">
      {/* First Main Section with 6 Sub-Containers */}
      <div className="footer-top">
        <div className="footer-box">
          Home
          <div className="footer-sub-links">
            <span>Categories</span>
            <span>Devices</span>
            <span>Pricing</span>
            <span>FAQ</span>
          </div>
        </div>

        <div className="footer-box">
          Movies
          <div className="footer-sub-links">
            <span>Genres</span>
            <span>Trending</span>
            <span>New Release</span>
            <span>Popular</span>
          </div>
        </div>

        <div className="footer-box">
          Shows
          <div className="footer-sub-links">
            <span>Genres</span>
            <span>Trending</span>
            <span>New Release</span>
            <span>Popular</span>
          </div>
        </div>

        <div className="footer-box">
          Support
          <div className="footer-sub-links">
            <span>Contact Us</span>
          </div>
        </div>

        <div className="footer-box">
          Subscription
          <div className="footer-sub-links">
            <span>Plans</span>
            <span>Features</span>
          </div>
        </div>

        <div className="footer-box">
          Connect with us
          <div className="social-icons">
            <img src={insta} alt="Instagram" />
            <img src={face} alt="Facebook" />
            <img src={link} alt="LinkedIn" />
          </div>
        </div>
      </div>

      {/* Second Section: Copyright and Terms */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} StreamSphere. All Rights Reserved.</p>
        <div className="footer-links">
          <span>Privacy Policy</span>
          <span>Terms & Conditions</span>
        </div>
      </div>
    </footer>
  );
}
