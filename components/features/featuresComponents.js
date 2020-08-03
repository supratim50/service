const FeaturesComponents = ({
  even,
  icon,
  heading,
  text,
  imageUrl,
  classList,
  dataSal,
  dataSalDuration,
}) => {
  return (
    <div className="row mx-auto">
      {/* first */}
      <div
        className={`col-12 col-md-4 px-0 d-flex justify-content-center align-items-center ${
          even ? "order-3 order-md-1" : ""
        }`}
      >
        {even ? (
          <div className="text-box pt-5 mt-3 pt-md-0 mt-md-0">
            <h3
              className={`mb-2 heading-secondary font-weight-bold blue text-uppercase text-center text-md-right ${
                classList ? classList : classList
              }`}
            >
              {heading}
            </h3>
            <p className="paragraph-text text-dark-grey text-md-right mb-0 text-center">
              {text}
            </p>
          </div>
        ) : (
          <img
            className="img-fluid pt-5 mt-3 pt-md-0 mt-md-0"
            src={imageUrl}
            alt={heading}
            data-sal={dataSal}
            data-sal-duration={dataSalDuration}
          />
        )}
      </div>
      {/* middle circle */}
      <div
        className={`col-12 col-md-4 px-0 d-flex justify-content-center align-items-center pt-5 pt-md-0 ${
          even ? "order-2" : ""
        }`}
      >
        <div className="middle-circle rounded-circle d-flex justify-content-center align-items-center">
          <i className={`circle-icon ${classList ? classList : ""}`}>{icon}</i>
        </div>
      </div>
      {/* last */}
      <div
        className={`col-12 col-md-4 px-0 d-flex justify-content-center align-items-center  ${
          even ? "order-1 order-md-3" : ""
        }`}
      >
        {even ? (
          <img
            className="img-fluid pt-5 mt-3 pt-md-0 mt-md-0"
            src={imageUrl}
            alt={heading}
            data-sal={dataSal && dataSal}
            data-sal-duration={dataSalDuration && dataSalDuration}
          />
        ) : (
          <div className="text-box pt-5 mt-3 pt-md-0 mt-md-0">
            <h3
              className={`mb-2 heading-secondary font-weight-bold blue text-uppercase text-center text-md-left ${
                classList ? classList : ""
              }`}
            >
              {heading}
            </h3>
            <p className="paragraph-text text-dark-grey mb-0 text-center text-md-left">
              {text}
            </p>
          </div>
        )}
      </div>

      <style jsx>{`
        .row {
          min-height: 332px;
        }
        .middle-circle {
          width: 100px;
          height: 100px;
          background: #ffffff;
          box-shadow: 0px 10px 50px rgba(40, 73, 157, 0.04),
            0px 2px 18px rgba(40, 73, 157, 0.04),
            0px 0px 6px rgba(40, 73, 157, 0.04);
        }
        @media screen and (max-width: 767px) {
          .middle-circle {
            width: 70px;
            height: 70px;
          }
        }
        .circle-icon {
          font-size: 25px;
        }

        .blue {
          color: #2855cb !important;
        }
        .sky {
          color: #28bad2 !important;
        }
        .yellow {
          color: #f7de00 !important;
        }
        .violate {
          color: #9e00e9 !important;
        }
      `}</style>
    </div>
  );
};

export default FeaturesComponents;
