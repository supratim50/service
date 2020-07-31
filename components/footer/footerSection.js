import Link from "next/link";
import { FiSend } from "react-icons/fi";

const FooterSection = () => {
  return (
    <section>
      <div className="container">
        <div className="row mx-auto">
          <div className="col-12 col-md-6 col-lg-3 px-0 pt-5 pt-lg-0">
            <h3 className="heading-secondary text-white font-weight-bold text-uppercase mb-4">
              Data Anawer
            </h3>
            <ul className="list-unstyled">
              <Link href="/">
                <a className="text-decoration-none">
                  <li className="paragraph-text text-capitalize text-light-grey mb-2">
                    Why ThirdEye Data
                  </li>
                </a>
              </Link>
              <Link href="/">
                <a className="text-decoration-none">
                  <li className="paragraph-text text-capitalize text-light-grey mb-2">
                    Leadership
                  </li>
                </a>
              </Link>
              <Link href="/">
                <a className="text-decoration-none">
                  <li className="paragraph-text text-capitalize text-light-grey mb-2">
                    Advisory Board
                  </li>
                </a>
              </Link>
              <Link href="/">
                <a className="text-decoration-none">
                  <li className="paragraph-text text-capitalize text-light-grey mb-2">
                    Artificial Intelligence
                  </li>
                </a>
              </Link>
              <Link href="/">
                <a className="text-decoration-none">
                  <li className="paragraph-text text-capitalize text-light-grey mb-2">
                    Deep Learning
                  </li>
                </a>
              </Link>
            </ul>
          </div>
          <div className="col-12 col-md-6 col-lg-3 px-0 pt-5 pt-lg-0">
            <h3 className="heading-secondary text-white font-weight-bold text-uppercase mb-4">
              Data Anawer
            </h3>
            <ul className="list-unstyled">
              <Link href="/">
                <a className="text-decoration-none">
                  <li className="paragraph-text text-capitalize text-light-grey mb-2">
                    Why ThirdEye Data
                  </li>
                </a>
              </Link>
              <Link href="/">
                <a className="text-decoration-none">
                  <li className="paragraph-text text-capitalize text-light-grey mb-2">
                    Leadership
                  </li>
                </a>
              </Link>
              <Link href="/">
                <a className="text-decoration-none">
                  <li className="paragraph-text text-capitalize text-light-grey mb-2">
                    Advisory Board
                  </li>
                </a>
              </Link>
              <Link href="/">
                <a className="text-decoration-none">
                  <li className="paragraph-text text-capitalize text-light-grey mb-2">
                    Artificial Intelligence
                  </li>
                </a>
              </Link>
              <Link href="/">
                <a className="text-decoration-none">
                  <li className="paragraph-text text-capitalize text-light-grey mb-2">
                    Deep Learning
                  </li>
                </a>
              </Link>
            </ul>
          </div>
          <div className="col-12 col-md-6 col-lg-3 px-0 pt-5 pt-lg-0">
            <h3 className="heading-secondary text-white font-weight-bold text-uppercase mb-4">
              Data Anawer
            </h3>
            <ul className="list-unstyled">
              <Link href="/">
                <a className="text-decoration-none">
                  <li className="paragraph-text text-capitalize text-light-grey mb-2">
                    Why ThirdEye Data
                  </li>
                </a>
              </Link>
              <Link href="/">
                <a className="text-decoration-none">
                  <li className="paragraph-text text-capitalize text-light-grey mb-2">
                    Leadership
                  </li>
                </a>
              </Link>
              <Link href="/">
                <a className="text-decoration-none">
                  <li className="paragraph-text text-capitalize text-light-grey mb-2">
                    Advisory Board
                  </li>
                </a>
              </Link>
            </ul>
          </div>
          <div className="col-12 col-md-6 col-lg-3 px-0 pt-5 pt-lg-0">
            <h3 className="heading-secondary text-white font-weight-bold text-uppercase mb-4">
              Subscribe to our newsletter
            </h3>
            <div
              className="row mx-auto overflow-hidden"
              style={{ borderRadius: 5, minHeight: 44 }}
            >
              <div className="col-10 px-0">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="email-input w-100 h-100 paragraph-text py-2 px-3"
                />
              </div>
              <div className="col-2 px-0">
                <button
                  className="w-100 h-100 rounded-0 border-0"
                  style={{
                    backgroundColor: "#2855cb",
                    color: "#fff",
                    fontSize: 18,
                  }}
                >
                  {<FiSend />}
                </button>
              </div>
            </div>

            <div className="mt-5 pt-4 w-100">
              <h3 className="heading-secondary text-white font-weight-bold text-uppercase mb-4">
                Address
              </h3>
              <p className="paragraph-text text-capitalize text-light-grey mb-2">
                Flipkart Internet Private Limited, Buildings Alyssa, Begonia &
                Clove Embassy Tech Village, Outer Ring Road, Devarabeesanahalli
                Village, Bengaluru, 560103, Karnataka, India
              </p>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        section {
          background-color: #020a2c !important;
          padding-top: 134px !important;
          padding-bottom: 90px !important;
        }
        @media screen and (max-width: 767px) {
          section {
            padding-top: 44px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default FooterSection;
