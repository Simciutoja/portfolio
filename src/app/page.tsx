// page.tsx
import Navbar from './components/navbar/navbar';
import Hero from './components/hero/hero';
import Projects from './components/projects/projects';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';
export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <Projects />
            <Contact />
            <Footer />
        </>
    );
}