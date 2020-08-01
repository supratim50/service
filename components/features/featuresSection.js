import { FaCompressAlt } from "react-icons/fa";

import PrimaryHeading from "../heading/primaryHeading";
import FeaturesComponents from "./featuresComponents";
import Wave from "../wave/wave";

const Features = () => {
  return (
    <section className="section-pt section-pb position-relative">
      <PrimaryHeading
        title="Get to know or FEATURES"
        classList="font-weight-bold text-dark-blue text-center"
      />
      <div className="container margin-top">
        <FeaturesComponents
          classList="blue"
          icon={<FaCompressAlt />}
          heading="Features One"
          text="Loo car boot bodge smashing I up the duff horse play give us a
              bell, William bugger all mate happy days.!"
          imageUrl="/assets/images/Feature-1.svg"
        />
        <FeaturesComponents
          classList="sky"
          even
          icon={<FaCompressAlt />}
          heading="Features Two"
          text="Loo car boot bodge smashing I up the duff horse play give us a
              bell, William bugger all mate happy days.!"
          imageUrl="/assets/images/Feature-2.svg"
        />
        <FeaturesComponents
          classList="yellow"
          icon={<FaCompressAlt />}
          heading="Features Three"
          text="Loo car boot bodge smashing I up the duff horse play give us a
              bell, William bugger all mate happy days.!"
          imageUrl="/assets/images/Feature-3.svg"
        />
        <FeaturesComponents
          classList="violate"
          even
          icon={<FaCompressAlt />}
          heading="Features Four"
          text="Loo car boot bodge smashing I up the duff horse play give us a
              bell, William bugger all mate happy days.!"
          imageUrl="/assets/images/Feature-4.svg"
        />
      </div>

      <Wave imageUrl="/assets/images/wave-grey.svg" />
    </section>
  );
};

export default Features;
