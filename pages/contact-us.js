import Navbar from "../components/navbar/navbar";
import HeaderTwo from "../components/header/headerTwo";
import FaqSection from "../components/faq/faqSection";
import ContactSection from "../components/contact/contactSection";
import Footer from "../components/footer/footerSection";
import Wave from "../components/wave/wave";

const ContactUs = () => {
  return (
    <>
      <Navbar textColor="text-dark-blue" close />
      <HeaderTwo />
      <FaqSection
        extreHtml={<Wave imageUrl="/assets/images/wave-white.svg" />}
      />
      <ContactSection />
      <Footer />
    </>
  );
};

export default ContactUs;
