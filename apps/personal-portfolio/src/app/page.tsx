//components
import { About } from '../components/about/About';
// import { Contact } from '../components/contact';
import { Hero } from '../components/hero';
import { Projects } from '../components/projects';

export default function HomePage() {
  return (
    <main>
      <section data-theme="dark">
        <Hero />
      </section>
      <section data-theme="light">
        <Projects />
        <About />
        {/* <Contact /> */}
      </section>
    </main>
  );
}
