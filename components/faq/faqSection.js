import { FaCommentAlt } from "react-icons/fa";
// components
import HeadingPrimary from "../heading/primaryHeading";
import FaqComponent from "../faq/faqComponent";

const FaqSection = () => {
  return (
    <section className="section-pt section-pb">
      <HeadingPrimary
        title="Having doubts? Check our FAQs"
        classList="font-weight-bold text-center text-dark-blue"
      />
      <div className="container">
        <div className="row mx-auto margin-top">
          <div className="col-12 col-lg-5 pt-5 px-0 text-center text-lg-left">
            <img
              className="img-fluid"
              src="/assets/images/FAQs.svg"
              alt="About Images"
            />
          </div>
          <div className="col-12 col-lg-7 mt-5 mt-lg-0 px-0 px-lg-2">
            <FaqComponent
              question="Will all images be included after theme demo installation?"
              answer="Yes, you can change multiple options/styles to change the way header and footer looks. You can even hide footer developer copyrights and add your own custom text using text editor"
              icon={<FaCommentAlt />}
            />
            <FaqComponent
              question="Will all images be included after theme demo installation?"
              answer="Yes, you can change multiple options/styles to change the way header and footer looks. You can even hide footer developer copyrights and add your own custom text using text editor"
              icon={<FaCommentAlt />}
              classList="mt-4"
            />
            <FaqComponent
              question="Will all images be included after theme demo installation?"
              answer="Yes, you can change multiple options/styles to change the way header and footer looks. You can even hide footer developer copyrights and add your own custom text using text editor"
              icon={<FaCommentAlt />}
              classList="mt-4"
            />
            <FaqComponent
              question="Will all images be included after theme demo installation?"
              answer="Yes, you can change multiple options/styles to change the way header and footer looks. You can even hide footer developer copyrights and add your own custom text using text editor"
              icon={<FaCommentAlt />}
              classList="mt-4"
            />
          </div>
        </div>
      </div>
      <style jsx>{`
        section {
          background: #fafafa !important;
        }
      `}</style>
    </section>
  );
};

export default FaqSection;
