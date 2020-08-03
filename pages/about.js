import Navbar from "../components/navbar/navbar";
import HeaderTwo from "../components/header/headerTwo";
import TeamSection from "../components/team/teamSection";
import ClientSection from "../components/clients/clientSection";
import Footer from "../components/footer/footerSection";

const About = () => {
  return (
    <>
      <Navbar textColor="text-dark-blue" close />
      <HeaderTwo
        heading="About Us"
        paragraph="Webguru Infosystems, an ISO 9001:2015 certified futuristic technology firm offers total digital solutions for a global clientele at affordable rates. Our 150+ team of expert IT professionals comprises developers, graphic designers, digital marketers, business analysts, and project managers. Our core expertise lies in offering Website Development, Mobile App Development, Digital Marketing Services and Corporate Branding Solutions to a wide variety of business verticals namely, eCommerce, Real Estate, Hospitality, Education, Manufacturing, Travel & Tourism, Transportation, Logistics and more. Our diverse experience in Website Development, Mobile App Development and Digital Marketing has earned us valuable reputation over the globe."
        btnText="Contact Us"
        imageUrl="/assets/images/AboutUsBig.svg"
      />
      <TeamSection extraHtml />
      <ClientSection />
      <Footer />
    </>
  );
};

export default About;
