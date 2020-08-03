import { FiX } from "react-icons/fi";
import { useState, useEffect } from "react";
import Link from "next/link";

// components
import PrimaryButton from "../buttons/PrimaryButton";
import Navbar from "../navbar/navbar";

const TopHeader = () => {
  const [close, setClose] = useState(false);
  const [Yaxis, setYaxis] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setYaxis(window.scrollY);
      console.log("state", Yaxis);
      console.log("scrollY", window.scrollY);
    });
  }, [Yaxis]);

  const closeTop = () => setClose(true);
  // ${Yaxis === 0 || Yaxis > window.scrollY ? "show" : ""}

  return (
    <section className="sticky-top" style={{ top: -1 }}>
      <div
        className={`top-nav fixed-top w-100 p-2 py-md-3 px-md-4 d-flex flex-column flex-md-row justify-content-md-center align-items-center ${
          close ? "close" : ""
        }`}
      >
        <p className="paragraph-text text-uppercase mb-0 text-white heading-secondary">
          Limited time offer, Hurry up!
        </p>
        <Link href="/">
          <a className="text-decoration-none">
            <PrimaryButton
              classList="py-1 px-2 py-md-2 px-md-3 mt-3 mt-md-0 ml-md-4"
              title="Contact us"
            />
          </a>
        </Link>
        <i onClick={closeTop} className="position-absolute text-white cross">
          <FiX />
        </i>
      </div>
      {close ? (
        <Navbar close textColor="text-white" />
      ) : (
        <Navbar textColor="text-white" />
      )}

      <style jsx>{`
        .top-nav {
          background-color: #000622;
          transition: 0.5s;
           {
            /* transform: translateY(-100%) !important;
          visibility: hidden !important; */
          }
        }
        .cross {
          right: 15px;
          top: 19px;
          cursor: pointer;
        }
        @media screen and (max-width: 767px) {
          .cross {
            right: 10px;
            top: 4px;
          }
        }
        .close {
          display: none !important;
        }

         {
          /* .show {
          transform: translateY(0%) !important;
          visibility: visible !important;
        } */
        }
      `}</style>
    </section>
  );
};

export default TopHeader;
