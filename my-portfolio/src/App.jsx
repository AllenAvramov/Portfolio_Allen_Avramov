import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Section from "./components/Section";
import Showcase from "./components/Showcase";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AnimatedBackground from "./components/AnimatedBackground";

export default function App() {
  return (
    <div className="min-h-screen text-white bg-[#0a0e1a] relative overflow-x-hidden">
      {/* Animated moving blurry lights background */}
      <AnimatedBackground />

      <div className="relative z-10">
        <Navbar />

      <main className="relative">
        <Hero />

        <About />

        <Showcase />

        <Section id="contact" title="Contact">
          <Contact />
        </Section>

        <Footer />
      </main>
      </div>
    </div>
  );
}
