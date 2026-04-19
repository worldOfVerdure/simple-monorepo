//components
import { About } from '../components/about/About';
// import { Contact } from '../components/contact';
import { Hero } from '../components/hero';
// import { Projects } from '../components/projects';

export default function HomePage() {
  return (
    <main>
      <Hero />
      {/* <Projects /> */}
      <About />
      {/* <Contact /> */}
    </main>
  );
}
