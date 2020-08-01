import { useState } from "react";

const FaqComponent = ({ question, icon, answer, classList }) => {
  const [show, setShow] = useState(false);

  return (
    <div
      className={`w-100 ${show ? "active" : ""} ${classList ? classList : ""}`}
    >
      {/* ========= question =============== */}
      <div
        className={`question h-100 row mx-auto w-100 py-4 px-4`}
        onClick={() => setShow(!show)}
      >
        <div className="col-1 pl-0 d-flex justify-content-center align-items-center">
          <i style={{ fontSize: 25 }}>{icon}</i>
        </div>
        <div className="col-11 pr-0 d-flex align-items-center">
          <p className="heading-secondary text-uppercase font-weight-bold mb-0">
            {question}
          </p>
        </div>
      </div>

      {/* ================ answer ================= */}
      <div className="answer p-4">
        <p className="paragraph-text mb-0 text-muted">{answer}</p>
      </div>
      <style jsx>{`
        .active {
          border-radius: 10px !important;
          border: 1px solid #2855cb;
          box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.05) !important;
        }
        .answer {
          display: none;
          transition: 0.5s;
        }
        .question {
          color: #2855cb !important;
          cursor: pointer;
          background-color: #fff;
          border-radius: 10px;
          min-height: 88px;
        }

        .active .question {
          background-color: #2855cb !important;
          color: #fff !important;
          border-radius: 10px 10px 0px 0px !important;
        }

        .active .answer {
          display: block;
          animation: open;
          animation-duration: 1s;
        }
        @keyframes open {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default FaqComponent;
