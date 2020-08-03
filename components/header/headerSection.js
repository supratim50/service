import Link from "next/link";
import { useEffect } from "react";
import sal from "sal.js";

import FormBox from "../contact/formBox";
import PrimaryHeading from "../heading/primaryHeading";
import SecondaryButton from "../buttons/secondaryButton";

const Header = () => {
  useEffect(() => {
    sal();
  });

  return (
    <section className="header section-pb">
      <div className="container position-relative">
        <div className="row mx-auto" style={{ paddingTop: 230 }}>
          {/* heading */}
          <div className="col-12 col-lg-6 d-flex align-items-center px-0">
            <div
              className="heading-box text-center text-lg-left pb-5 pb-lg-0 mb-5 mb-lg-0"
              data-sal="slide-right"
              data-sal-duration="1200"
            >
              <PrimaryHeading
                title="Powerful and flexible tools for your system"
                classList="font-weight-bold text-white"
              />
              <p className="mt-4 mb-0 paragraph-text text-light-grey">
                Loo car boot bodge smashing I up the duff horse play give us a
                bell, William bugger all mate happy days.!
              </p>
              <Link href="/">
                <a>
                  <SecondaryButton
                    classList="mt-5 py-3 px-4 d-inline-block font-weight-bold"
                    title="Enquire now"
                  />
                </a>
              </Link>
            </div>
          </div>
          {/* form box */}
          <div className="col-12 col-lg-6 pt-5 pt-lg-0 px-0">
            <FormBox classList="mr-auto ml-auto mr-lg-0" />
          </div>
        </div>
      </div>
      <style jsx>{`
        .header {
          background: linear-gradient(56.52deg, #03053d 0%, #0060a6 101.29%);
        }
        .heading-box {
          max-width: 457px !important;
        }
        @media screen and (max-width: 992px) {
          .heading-box {
            max-width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Header;
