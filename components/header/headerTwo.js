import Link from "next/link";
import HeadingPrimary from "../heading/primaryHeading";
import PrimaryBtn from "../buttons/PrimaryButton";
import Wave from "../wave/wave";

const HeaderTwo = () => {
  return (
    <section className="section-pt section-pb position-relative">
      <div className="container">
        <div className="row mx-auto">
          <div className="col-12 col-md-8">
            <HeadingPrimary
              title="Contact Us"
              classList="font-weight-bold text-dark-blue text-capitalize mb-4"
            />
            <p className="paragraph-text text-dark-grey mb-4">
              We offer professional and affordable solutions for all your
              website design, mobile app development, corporate branding and
              digital marketing requirements. Let us know what you need or leave
              us a message with your contact details and we will get back to you
              soon.
            </p>
            <Link href="/">
              <a>
                <PrimaryBtn
                  classList="px-4 py-3 d-inline-block"
                  title="Send Query"
                />
              </a>
            </Link>
          </div>
          <div className="col-12 col-md-4 text-center text-md-right mt-5 mt-md-0 pt-5 pt-md-0">
            <img
              src="/assets/images/ContactUs.svg"
              className="img-fluid"
              alt="Image"
            />
          </div>
        </div>
      </div>
      <Wave imageUrl="/assets/images/wave-grey.svg" />
    </section>
  );
};

export default HeaderTwo;
