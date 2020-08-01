const ContactDetails = ({ icon, text, color }) => {
  return (
    <div className="">
      <div className="d-flex flex-column justify-content-start align-items-center">
        <div
          className={`icon-box rounded-circle d-flex justify-content-center align-items-center ${
            color ? color : ""
          }`}
        >
          {icon}
        </div>
        <div className="paragraph-text text-dark contact-box text-center w-100">
          {text}
        </div>
      </div>
      <style jsx>{`
        .contact-box {
          min-height: 170px !important;
          background-color: #fff !important;
          padding: 82px 30px 30px 30px;
          margin-top: -80px !important;
          box-shadow: 0px 4px 8px rgba(40, 73, 157, 0.04),
            0px 0px 2px rgba(40, 73, 157, 0.06),
            0px 0px 1px rgba(40, 73, 157, 0.04);
          border-radius: 8px;
        }
        .icon-box {
          width: 100px;
          height: 100px;
          background: #ffffff;
          box-shadow: 0px 10px 50px rgba(40, 73, 157, 0.04),
            0px 2px 18px rgba(40, 73, 157, 0.04),
            0px 0px 6px rgba(40, 73, 157, 0.04);
          font-size: 32px;
          margin-bottom: 32px !important;
          z-index: 2;
        }

        /* color  */
        .blue {
          color: #2855cb !important;
        }
        .sky {
          color: #28bad2 !important;
        }
        .yellow {
          color: #f6de00 !important;
        }
        .violate {
          color: #9e00e9 !important;
        }
      `}</style>
    </div>
  );
};

export default ContactDetails;
