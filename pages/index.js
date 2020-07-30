// components
import TopHeader from "../components/header/topHeaderSection";
import Navbar from "../components/navbar/navbar";
import Header from "../components/header/headerSection";
import About from "../components/about/aboutUs";
import Features from "../components/features/featuresSection";

export default function Home() {
  return (
    <>
      <TopHeader />
      {/* <Navbar /> */}
      <Header />
      <About />
      <Features />
    </>
  );
}
