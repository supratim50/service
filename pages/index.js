// components
import TopHeader from "../components/header/topHeaderSection";
import Navbar from "../components/navbar/navbar";
import Header from "../components/header/headerSection";
import About from "../components/about/aboutSection";
import Features from "../components/features/featuresSection";
import ServiceSection from "../components/services/servicesSection";
import ClientSection from "../components/clients/clientSection";
import FaqSection from "../components/faq/faqSection";
import MessageSection from "../components/message/messageSection";
import Footer from "../components/footer/footerSection";

export default function Home() {
  return (
    <>
      <TopHeader />
      {/* <Navbar /> */}
      <Header />
      <About />
      <Features />
      <ServiceSection />
      <ClientSection />
      <FaqSection />
      <MessageSection />
      <Footer />
    </>
  );
}
