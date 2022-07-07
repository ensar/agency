import "./styles/index.scss";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Companies from "./components/Companies";
import Branding from "./components/Branding";
import Custom from "./components/Custom";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className='container'>
      <main>
        <Navbar />
        <Hero />
        <Companies />
        <Branding />
        <Custom />
        <Testimonials />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
