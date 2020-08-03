import Link from "next/link";
import HeadingPrimary from "../heading/primaryHeading";
import PrimaryBtn from "../buttons/PrimaryButton";
import Wave from "../wave/wave";

const HeaderTwo = ({ heading, paragraph, btnText, imageUrl }) => {
  return (
    <section className="section-pt section-pb position-relative">
      <div className="container">
        <div className="row mx-auto">
          <div className="col-12 col-lg-8">
            <HeadingPrimary
              title={heading}
              classList="font-weight-bold text-dark-blue text-capitalize mb-4"
            />
            <p className="paragraph-text text-dark-grey mb-4">{paragraph}</p>
            <Link href="/">
              <a>
                <PrimaryBtn
                  classList="px-4 py-3 d-inline-block"
                  title={btnText}
                />
              </a>
            </Link>
          </div>
          <div className="col-12 col-lg-4 text-center text-lg-right mt-5 mt-lg-0 pt-5 pt-lg-0">
            <img src={imageUrl} className="img-fluid" alt="Image" />
          </div>
        </div>
      </div>
      <Wave imageUrl="/assets/images/wave-grey.svg" />
    </section>
  );
};

export default HeaderTwo;
