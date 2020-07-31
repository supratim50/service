import PrimaryHeading from "../heading/primaryHeading";

const ServicesSection = () => {
  return (
    <section className="section-pt section-pb">
      <PrimaryHeading
        title="We provide satisfactory SERVICES"
        classList="font-weight-bold text-dark-blue text-center"
      />
      <div className="container">
        <div className="row mx-auto">
          <div className="col-12 col-md-6 col-lg-3 border">
            <div className="card border-0 p-4">
              <h3 className="service-heading font-weight-bold text-uppercase">
                Service one
              </h3>
              <p className="mb-0 paragraph">
                Loo car boot bodge smashing I up the duff horse play give us a
                bell.
              </p>
              <div className="service-img-box">SVG</div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 border">
            <div className="card border-0 p-4">
              <h3 className="service-heading font-weight-bold text-uppercase">
                Service one
              </h3>
              <p className="mb-0 paragraph">
                Loo car boot bodge smashing I up the duff horse play give us a
                bell.
              </p>
              <div className="service-img-box">SVG</div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 border">
            <div className="card border-0 p-4">
              <h3 className="service-heading font-weight-bold text-uppercase">
                Service one
              </h3>
              <p className="mb-0 paragraph">
                Loo car boot bodge smashing I up the duff horse play give us a
                bell.
              </p>
              <div className="service-img-box">SVG</div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 border">
            <div className="card border-0 p-4">
              <h3 className="service-heading font-weight-bold text-uppercase">
                Service one
              </h3>
              <p className="mb-0 paragraph">
                Loo car boot bodge smashing I up the duff horse play give us a
                bell.
              </p>
              <div className="service-img-box">SVG</div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        section {
          background-color: #fafafa;
        }
        .row {
          margin-top: 70px !important;
        }
        .card {
          background: #ffffff !important;
          border-radius: 10px !important;
        }
        .service-heading {
          font-size: 14px;
          line-height: 155%;
          letter-spacing: 0.115em;
          color: #2855cb;
        }
        .paragraph {
          font-size: 14px;
          line-height: 165%;
          letter-spacing: 0.04em;
        }
        .service-img {
          fill: rgba(158, 164, 176, 0.4) !important;
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;
