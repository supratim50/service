import HeadingPrimary from "../heading/primaryHeading";
import FormBox from "../contact/formBox";
import ContactDetails from "./contactDetails";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";

const ContactSection = () => {
  return (
    <section className="section-pt section-pb">
      <HeadingPrimary
        title="You can even write to us"
        classList="font-weight-bold text-center text-dark-blue"
      />
      <div className="container">
        <div className="row mx-auto margin-top">
          <div className="col-12 col-lg-7 px-0 d-flex align-items-center">
            <div className="row mx-auto">
              <div className="col-12 col-md-6 pl-0 pt-5">
                <ContactDetails
                  icon={<FaMapMarkerAlt />}
                  text="Melbourne’s GPO 434 Bourke St. Dhaka VIC 3074, Australia"
                  color="blue"
                />
              </div>
              <div className="col-12 col-md-6 pr-0 pt-5">
                <ContactDetails
                  icon={<FaPhoneAlt />}
                  text="(+096) 302 443 7488"
                  color="sky"
                />
              </div>
              <div className="col-12 col-md-6 pl-0 pt-5">
                <ContactDetails
                  icon={<FaWhatsapp />}
                  text="(+096) 302 443 7488"
                  color="yellow"
                />
              </div>
              <div className="col-12 col-md-6 pr-0 pt-5">
                <ContactDetails
                  icon={<FaEnvelope />}
                  text="saasland@gmail.com"
                  color="violate"
                />
              </div>
            </div>
          </div>
          {/* form box */}
          <div className="col-12 col-lg-5 pt-5 pt-lg-0 px-0">
            <FormBox classList="mr-auto ml-auto mr-lg-0" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
