import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Industries from './components/Industries';
import DashboardDemo from './components/DashboardDemo';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Industries />
        <DashboardDemo />
        <Stats />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

