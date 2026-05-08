import Header from "../src/components/Header";
import Banner from "../src/components/Banner";
import About from "../src/components/About";
import Project from "../src/components/Project";
import Testimonials from "../src/components/Testimonials";
import Contact from "../src/components/Contact";
import Footer from "../src/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Banner />
      <About />
      <Project />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
