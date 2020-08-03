import { useEffect } from "react";
import sal from "sal.js";

import HeadingPrimary from "../heading/primaryHeading";
import PrimaryBtn from "../buttons/PrimaryButton";
import { FiStopCircle } from "react-icons/fi";

const GigSection = () => {
  useEffect(() => {
    sal();
  });

  const list = [
    { listname: "Planning", id: 1 },
    { listname: "UI/UX & Graphic Designer", id: 2 },
    { listname: "Development", id: 3 },
    { listname: "Testing & Debugging", id: 4 },
    { listname: "Going Live", id: 5 },
    { listname: "Support & Maintenance", id: 6 },
  ];

  return (
    <section className="section-pt section-pb bg-light-grey overflow-hidden">
      <div className="container" data-sal="slide-up" data-sal-duration="1200">
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
        <div className="list-box row mt-5 w-100">
          {list.map((list) => (
            <div className="col-12 col-md-6 mt-3" key={list.id}>
              <div className={`row mx-auto w-100`}>
                <div className="col-1 pl-0 d-flex justify-content-center align-items-center">
                  <i style={{ fontSize: 18, color: "#FF3D00" }}>
                    <FiStopCircle />
                  </i>
                </div>
                <div className="col-11 pr-0 d-flex align-items-center">
                  <p className="heading-secondary mb-0 text-dark-grey">
                    {list.listname}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <PrimaryBtn
          classList="py-3 px-4 d-inline-block mt-5"
          title="charges $5,491/month"
        />
      </div>
      <style jsx>{`
        .list-box {
          max-width: 500px !important;
        }
      `}</style>
    </section>
  );
};

export default GigSection;
