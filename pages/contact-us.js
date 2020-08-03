import Navbar from "../components/navbar/navbar";
import HeaderTwo from "../components/header/headerTwo";
import FaqSection from "../components/faq/faqSection";
import ContactSection from "../components/contact/contactSection";
import Footer from "../components/footer/footerSection";

const ContactUs = () => {
  return (
    <>
      <Navbar textColor="text-dark-blue" close />
      <HeaderTwo
        heading="Contact Us"
        paragraph="We offer professional and affordable solutions for all your
              website design, mobile app development, corporate branding and
              digital marketing requirements. Let us know what you need or leave
              us a message with your contact details and we will get back to you
              soon."
        btnText="Send Query"
        imageUrl="/assets/images/ContactUs.svg"
      />
      <FaqSection extreHtml />
      <ContactSection />
      <Footer />
    </>
  );
};

export default ContactUs;
