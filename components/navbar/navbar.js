import { useState, useEffect } from "react";
import {
  FaUserPlus,
  FaFacebookF,
  FaWhatsapp,
  FaYoutube,
  FaEnvelope,
  FaBars,
} from "react-icons/fa";
import Link from "next/link";
const Navbar = ({ close, textColor }) => {
  const [Yaxis, setYaxis] = useState(0);
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setYaxis(window.scrollY);
    });
  }, Yaxis);

  return (
    <div
      className={`fixed-top home-nav ${close ? "closed" : ""} ${
        Yaxis === 0 ? "" : "scrolled"
      }`}
    >
      <nav className="navbar navbar-expand-lg py-3">
        <div className="container position-relative">
          <Link href="/">
            <a>
              <i
                className={`navbar-brand ${
                  textColor ? textColor : ""
                } heading-primary px-3 px-lg-0`}
              >
                <FaUserPlus />
              </i>
            </a>
          </Link>
          {/* side bar */}
          <div
            class="position-absolute d-inline-block d-lg-none"
            style={{ top: 0, right: 20 }}
            onClick={() => setShow(!show)}
          >
            <i
              className={`${
                textColor ? textColor : ""
              } heading-primary bar-btn`}
            >
              <FaBars />
            </i>
          </div>

          <div
            class={`nav-main-box collapse navbar-collapse ${
              show ? "show" : ""
            }`}
          >
            <div className="nav-box ml-auto">
              <ul className="navbar-nav d-flex">
                <Link href="/service">
                  <a className="text-decoration-none">
                    <li
                      className={`nav-item ${
                        textColor ? textColor : ""
                      } p-3 p-lg-0`}
                    >
                      Services
                    </li>
                  </a>
                </Link>
                <Link href="/about-us">
                  <a className="text-decoration-none">
                    <li
                      className={`nav-item ${
                        textColor ? textColor : ""
                      } ml-0 ml-lg-5 p-3 p-lg-0`}
                    >
                      About us
                    </li>
                  </a>
                </Link>
                <Link href="/contact-us">
                  <a className="text-decoration-none">
                    <li
                      className={`nav-item ${
                        textColor ? textColor : ""
                      } ml-0 ml-lg-5 p-3 p-lg-0`}
                    >
                      Contact Us
                    </li>
                  </a>
                </Link>
              </ul>
            </div>
            <div className="social-box ml-auto">
              <ul className="list-unstyled d-flex p-3 p-lg-0 mb-0">
                <li className={`social-icon ${textColor ? textColor : ""}`}>
                  <FaEnvelope />
                </li>
                <li
                  className={`social-icon ${textColor ? textColor : ""} ml-5`}
                >
                  <FaFacebookF />
                </li>
                <li
                  className={`social-icon ${textColor ? textColor : ""} ml-5`}
                >
                  <FaWhatsapp />
                </li>
                <li
                  className={`social-icon ${textColor ? textColor : ""} ml-5`}
                >
                  <FaYoutube />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <style jsx>{`
        .home-nav {
          top: 90px;
          transition: 0.5s;
        }
        .scrolled {
          top: 70px !important;
          background: #fff !important;
          box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.05);
        }

        .scrolled .nav-item,
        .scrolled .social-icon,
        .scrolled .navbar-brand,
        .scrolled .bar-btn {
          color: rgba(33, 48, 77, 0.79) !important;
        }

        .closed {
          top: 0 !important;
        }
        .nav-item {
          font-size: 13px !important;
          line-height: 165%;
        }
        .social-icon {
          font-size: 21px;
        }
        .show {
          animation: show-nav 0.5s;
        }
        @keyframes show-nav {
          0% {
            transform: translateY(-30px) !important;
            opacity: 0 !important;
          }
          100% {
            transform: translateY(0) !important;
            opacity: 1 !important;
          }
        }
        @media screen and (max-width: 992px) {
          .nav-item,
          .social-icon {
            color: rgba(33, 48, 77, 0.79) !important;
          }
          .nav-box,
          .social-box {
            background-color: #fff !important;
          }

          /* .nav-main-box {
            background-color: #fff !important;
          } */
        }

        @media screen and (max-width: 767px) {
          .home-nav,
          .scrolled {
            top: 122px !important;
          }

          .closed {
            top: 0 !important;
          }
        }

        /* .nav-item:not(:first-child),
        .social-icon:not(:first-child) {
          margin-left: 48px !important;
        } */
      `}</style>
    </div>
  );
};

export default Navbar;
