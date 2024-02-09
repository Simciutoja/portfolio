import Navbar from './components/navbar/navbar';
import Hero from './components/hero/hero';
import About from './components/about/about';
import 'animate.css';
export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
        </>
    );
}
