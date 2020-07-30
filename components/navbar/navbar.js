import {
  FaUserPlus,
  FaFacebookF,
  FaWhatsapp,
  FaYoutube,
  FaEnvelope,
} from "react-icons/fa";
import Link from "next/link";
const Navbar = () => {
  return (
    <section>
      <div className="fixed-top home-nav">
        <div className="container">
          <nav class="navbar navbar-expand-lg">
            <Link href="/">
              <a>
                <i className="navbar-brand text-white heading-primary">
                  <FaUserPlus />
                </i>
              </a>
            </Link>
            <div class="collapse navbar-collapse">
              <div className="nav-box ml-auto">
                <ul className="navbar-nav d-flex">
                  <li className="nav-item text-white">Services</li>
                  <li className="nav-item text-white">About us</li>
                  <li className="nav-item text-white">Contact Us</li>
                </ul>
              </div>
              <div className="social-box ml-auto">
                <ul className="navbar-nav d-flex">
                  <li className="social-icon">
                    <FaEnvelope />
                  </li>
                  <li className="social-icon">
                    <FaFacebookF />
                  </li>
                  <li className="social-icon">
                    <FaWhatsapp />
                  </li>
                  <li className="social-icon">
                    <FaYoutube />
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>

      <style jsx>{`
        .home-nav {
          top: 100px;
        }
        .nav-item {
          font-size: 13px !important;
          line-height: 165%;
        }
        .social-icon {
          font-size: 21px;
          color: rgba(255, 255, 255, 0.7);
        }
        .nav-item:not(:first-child),
        .social-icon:not(:first-child) {
          margin-left: 48px !important;
        }
      `}</style>
    </section>
  );
};

export default Navbar;
