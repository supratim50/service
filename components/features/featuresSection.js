import { useEffect } from "react";
import sal from "sal.js";
import { FaCompressAlt } from "react-icons/fa";

import PrimaryHeading from "../heading/primaryHeading";
import FeaturesComponents from "./featuresComponents";
import Wave from "../wave/wave";

const Features = () => {
  useEffect(() => {
    sal();
  });

  return (
    <section className="section-pt section-pb position-relative overflow-hidden">
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
          dataSal="slide-right"
          dataSalDuration="1200"
        />
        <FeaturesComponents
          classList="sky"
          even
          icon={<FaCompressAlt />}
          heading="Features Two"
          text="Loo car boot bodge smashing I up the duff horse play give us a
              bell, William bugger all mate happy days.!"
          imageUrl="/assets/images/Feature-2.svg"
          dataSal="slide-left"
          dataSalDuration="1200"
        />
        <FeaturesComponents
          classList="yellow"
          icon={<FaCompressAlt />}
          heading="Features Three"
          text="Loo car boot bodge smashing I up the duff horse play give us a
              bell, William bugger all mate happy days.!"
          imageUrl="/assets/images/Feature-3.svg"
          dataSal="slide-right"
          dataSalDuration="1200"
        />
        <FeaturesComponents
          classList="violate"
          even
          icon={<FaCompressAlt />}
          heading="Features Four"
          text="Loo car boot bodge smashing I up the duff horse play give us a
              bell, William bugger all mate happy days.!"
          imageUrl="/assets/images/Feature-4.svg"
          dataSal="slide-left"
          dataSalDuration="1200"
        />
      </div>

      <Wave imageUrl="/assets/images/wave-grey.svg" />
    </section>
  );
};

export default Features;
