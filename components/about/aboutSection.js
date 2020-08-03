import { useEffect } from "react";
import sal from "sal.js";

import PrimaryHeading from "../heading/primaryHeading";
import PrimaryButton from "../buttons/PrimaryButton";
import Wave from "../wave/wave";

const AboutUs = () => {
  useEffect(() => {
    sal();
  });

  return (
    <section className="section-pt section-pb position-relative">
      <div className="container">
        <PrimaryHeading
          title="Some informations about us"
          classList="text-center text-dark-blue font-weight-bold"
        />
        <div className="row mx-auto margin-top">
          <div className="col-12 col-lg-5 px-0 text-center text-lg-left">
            <img
              className="img-fluid"
              src="/assets/images/aboutus.svg"
              alt="About Images"
            />
          </div>
          <div
            className="col-12 col-lg-7 mt-5 mt-lg-0 px-0 px-lg-2"
            data-sal="slide-left"
            data-sal-duration="1200"
          >
            <p className="paragraph-text text-dark-grey mb-0">
              Webguru Infosystems, an ISO 9001:2015 certified futuristic
              technology firm offers total digital solutions for a global
              clientele at affordable rates. Our 150+ team of expert IT
              professionals comprises developers, graphic designers, digital
              marketers, business analysts, and project managers. Our core
              expertise lies in offering Website Development, Mobile App
              Development, Digital Marketing Services and Corporate Branding
              Solutions to a wide variety of business verticals namely,
              eCommerce, Real Estate, Hospitality, Education, Manufacturing,
              Travel & Tourism, Transportation, Logistics and more. Our diverse
              experience in Website Development, Mobile App Development and
              Digital Marketing has earned us valuable reputation over the
              globe.
            </p>
            <PrimaryButton
              title="know more"
              classList="py-3 px-4 mt-4 d-md-inline-block"
            />
          </div>
        </div>
      </div>

      {/* <div className="wave position-absolute w-100">
        <img className="w-100" src="/assets/images/wave-white.svg" alt="Wave" />
      </div> */}
      <Wave imageUrl="/assets/images/wave-white.svg" />
      <style jsx>{`
        section {
          background: #fafafa;
        }
      `}</style>
    </section>
  );
};

export default AboutUs;
