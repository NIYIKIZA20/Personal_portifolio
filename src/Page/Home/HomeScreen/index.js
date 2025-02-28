import AboutMe from "../AboutMe";
import ContactMe from "../ContactMe";
import Footer from "../Footer";
import Hero from "../Hero";
import MyPortifolio from "../MyPortifolio";
import MySkills from "../MySkills";
import Testimonial from "../Testimonials";

const Home =()=> {
  return (
    <>
      <Hero />
      <AboutMe />
      <MySkills />
      <MyPortifolio />
      <Testimonial />
      <ContactMe />
      <Footer />
    </>
  );
}

export default Home;