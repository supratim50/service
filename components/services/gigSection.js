import HeadingPrimary from "../heading/primaryHeading";
import PrimaryBtn from "../buttons/PrimaryButton";

const GigSection = () => {
  return (
    <section className="section-pt section-pb bg-light-grey">
      <div className="container">
        <HeadingPrimary
          title="About the gig"
          classList="font-weight-bold text-dark-blue mb-0"
        />
        <p className="paragraph-text text-dark-grey mt-4">
          As a leading web application development company India, maintaining
          quality is our priority. It takes a lot of brainstorming,
          conceptualization, and ideation to provide successful web app
          development services to any business. Our team of software architects,
          developers, testers, project managers, and quality assurance
          specialists work dedicatedly to deliver a successful project. Hire web
          app developers to avail quality services within a short turnaround
          time. Be it an enterprise web application development or eCommerce
          application development, we are adept at providing customized
          solutions for each.
          <br />
          <br />
          As a custom web apps development company, we follow the
          industry-standard web application development process as follows:
        </p>
        <PrimaryBtn
          classList="py-3 px-4 d-inline-block"
          title="charges $5,491/month"
        />
      </div>
    </section>
  );
};

export default GigSection;
