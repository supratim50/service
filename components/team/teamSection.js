import HeadingPrimary from "../heading/primaryHeading";
import TeamCard from "../cards/teamCard";
import Wave from "../wave/wave";

const TeamSection = ({ extraHtml }) => {
  return (
    <section className="section-pt section-pb position-relative">
      <HeadingPrimary
        title="People who formed the TEAM"
        classList="font-weight-bold text-dark-blue text-center mb-2"
      />
      <p className="paragraph-text text-dark-grey text-center">
        Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et.
      </p>
      <div className="container">
        <div className="team-box col-12 col-md-9 mx-auto px-0">
          <div className="row mx-auto">
            <div className="col-12 col-md-6 col-lg-4 mt-5 mt-md-0">
              <TeamCard
                classList="mx-auto"
                imageUrl="/assets/images/teamPhoto.jpg"
                title="John Doe"
              />
            </div>
            <div className="col-12 col-md-6 col-lg-4 mt-5 mt-md-0">
              <TeamCard
                classList="mx-auto"
                imageUrl="/assets/images/teamPhotoTwo.jpg"
                title="Catherine Cooper"
              />
            </div>
            <div className="col-12 col-md-6 col-lg-4 mt-5 mt-md-5 mt-lg-0">
              <TeamCard
                classList="mx-auto"
                imageUrl="/assets/images/teamPhotoThree.jpg"
                title="Anna Doe"
              />
            </div>
          </div>
        </div>
      </div>
      {extraHtml ? <Wave imageUrl="/assets/images/wave-white.svg" /> : ""}
      <style jsx>{`
        section {
          background-color: #fafafa !important;
        }
        .team-box {
          margin-top: 70px !important;
        }
      `}</style>
    </section>
  );
};

export default TeamSection;
