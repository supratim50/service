import { FiX } from "react-icons/fi";
import { useState } from "react";
import Link from "next/link";

// components
import PrimaryButton from "../buttons/PrimaryButton";

const TopHeader = () => {
  const [close, setClose] = useState(false);
  const closeTop = () => setClose(true);

  return (
    <section
      className={`w-100 p-4 py-md-3 d-flex flex-column flex-md-row justify-content-md-center align-items-center sticky-top ${
        close ? "close" : ""
      }`}
    >
      <p className="paragraph-text text-uppercase mb-0 text-white heading-secondary">
        Limited time offer, Hurry up!
      </p>
      <Link href="/">
        <a>
          <PrimaryButton
            classList="py-2 px-3 mt-3 mt-md-0 ml-md-4"
            title="Contact us"
          />
        </a>
      </Link>
      <i onClick={closeTop} className="position-absolute text-white cross">
        <FiX />
      </i>
      <style jsx>{`
        section {
          background-color: #000622;
        }
        .cross {
          right: 15px;
          top: 19px;
          cursor: pointer;
        }
        @media screen and (max-width: 767px) {
          .cross {
            right: 15px;
          }
        }
        .close {
          display: none !important;
        }
      `}</style>
    </section>
  );
};

export default TopHeader;