import HeadingPrimary from "../heading/primaryHeading";
import CLientComponent from "./clientComponent";
import Wave from "../wave/wave";

const ClientSection = ({ extraHtml }) => {
  return (
    <section className="section-pt section-pb position-relative">
      <HeadingPrimary
        title="Our trusted CLIENTS"
        classList="font-weight-bold text-center text-dark-blue"
      />
      <div className="container">
        <div className="row mx-auto">
          <div className="col-6 col-md-3 col-lg-2">
            <CLientComponent imageUrl="/assets/images/trust_1.png" />
          </div>
          <div className="col-6 col-md-3 col-lg-2">
            <CLientComponent imageUrl="/assets/images/trust_2.png" />
          </div>
          <div className="col-6 col-md-3 col-lg-2">
            <CLientComponent imageUrl="/assets/images/trust_3.png" />
          </div>
          <div className="col-6 col-md-3 col-lg-2">
            <CLientComponent imageUrl="/assets/images/trust_4.png" />
          </div>
          <div className="col-6 col-md-3 col-lg-2">
            <CLientComponent imageUrl="/assets/images/trust_5.png" />
          </div>
          <div className="col-6 col-md-3 col-lg-2">
            <CLientComponent imageUrl="/assets/images/trust_6.png" />
          </div>
          <div className="col-6 col-md-3 col-lg-2">
            <CLientComponent imageUrl="/assets/images/trust_7.png" />
          </div>
          <div className="col-6 col-md-3 col-lg-2">
            <CLientComponent imageUrl="/assets/images/trust_8.png" />
          </div>
          <div className="col-6 col-md-3 col-lg-2">
            <CLientComponent imageUrl="/assets/images/trust_9.png" />
          </div>
          <div className="col-6 col-md-3 col-lg-2">
            <CLientComponent imageUrl="/assets/images/trust_3.png" />
          </div>
          <div className="col-6 col-md-3 col-lg-2">
            <CLientComponent imageUrl="/assets/images/trust_4.png" />
          </div>
          <div className="col-6 col-md-3 col-lg-2">
            <CLientComponent imageUrl="/assets/images/trust_9.png" />
          </div>
          <div className="col-6 col-md-3 col-lg-2">
            <CLientComponent imageUrl="/assets/images/trust_1.png" />
          </div>
          <div className="col-6 col-md-3 col-lg-2">
            <CLientComponent imageUrl="/assets/images/trust_2.png" />
          </div>
          <div className="col-6 col-md-3 col-lg-2">
            <CLientComponent imageUrl="/assets/images/trust_3.png" />
          </div>
          <div className="col-6 col-md-3 col-lg-2">
            <CLientComponent imageUrl="/assets/images/trust_4.png" />
          </div>
          <div className="col-6 col-md-3 col-lg-2">
            <CLientComponent imageUrl="/assets/images/trust_5.png" />
          </div>
          <div className="col-6 col-md-3 col-lg-2">
            <CLientComponent imageUrl="/assets/images/trust_6.png" />
          </div>
        </div>
      </div>
      {extraHtml ? <Wave imageUrl="/assets/images/wave-grey.svg" /> : ""}
      <style jsx>{`
        .row {
          margin-top: 70px !important;
        }
      `}</style>
    </section>
  );
};

export default ClientSection;
