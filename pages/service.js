import Navbar from "../components/navbar/navbar";
import HeaderTwo from "../components/header/headerTwo";
import GigSection from "../components/services/gigSection";
import Footer from "../components/footer/footerSection";

const Service = () => {
  return (
    <>
      <Navbar textColor="text-dark-blue" close />
      <HeaderTwo
        heading="Digital Marketing"
        paragraph="Almost everyone uses Google search but not more than 30% go to the second page of the search results. So, unless your website is on the very first page, it is barely visible. To ensure your business is found easily, avail our professional SEO services India. As a reliable SEO agency India, we appoint the best minds in the industry to collaborate and fuel your business growth. Engage the top SEO agency India to ensure an increase in the visitors’ count, customer engagement and conversion rates for your website."
        btnText="Contact us"
        imageUrl="/assets/images/servicePage.png"
      />
      <GigSection />
      <Footer />
    </>
  );
};

export default Service;
