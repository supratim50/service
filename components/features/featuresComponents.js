const FeaturesComponents = ({
  odd,
  icon,
  heading,
  text,
  imageUrl,
  classList,
}) => {
  return (
    <div className="row mx-auto">
      {/* images */}
      <div className="col-12 col-md-4 px-0 d-flex justify-content-center align-items-center">
        {odd ? (
          <img className="img-fluid" src={imageUrl} alt={heading} />
        ) : (
          <div className="text-box">
            <h3
              className={`mb-2 heading-secondary font-weight-bold blue text-uppercase text-right ${
                classList ? classList : classList
              }`}
            >
              {heading}
            </h3>
            <p className="paragraph-text text-dark text-right">{text}</p>
          </div>
        )}
      </div>
      {/* middle circle */}
      <div className="col-12 col-md-4 px-0 d-flex justify-content-center align-items-center">
        <div className="middle-circle rounded-circle d-flex justify-content-center align-items-center">
          <i className={`circle-icon ${classList ? classList : ""}`}>{icon}</i>
        </div>
      </div>
      {/* text */}
      <div className="col-12 col-md-4 px-0 d-flex justify-content-center align-items-center">
        {odd ? (
          <div className="text-box">
            <h3
              className={`mb-2 heading-secondary font-weight-bold blue text-uppercase ${
                classList ? classList : ""
              }`}
            >
              {heading}
            </h3>
            <p className="paragraph-text text-dark">{text}</p>
          </div>
        ) : (
          <img className="img-fluid" src={imageUrl} alt={heading} />
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
