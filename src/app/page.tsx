// page.tsx
import Navbar from './components/navbar/navbar';
import Hero from './components/hero/hero';
import Projects from './components/projects/projects';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Head from 'next/head';
export default function Home() {
    return (
        <>
            <Head>
                <title>Szymon Bludnik</title>
                <meta property="og:title" content="Szymon Bludnik" />
                <meta property="og:description" content="Młody utalentowany programista, z sporą wiedzą w zakresie technologii webowych. Znajdę się w każdym zespole, a moje umiejętności z pewnością pomogą w rozwoju projektu." />
                <meta property="og:image" content="/justMe.jpg" />
                <meta name="keywords" content="Szymon, Bludnik, JavaScript, Developer, React, TypeScript, Programista" />
                <meta name="author" content="Szymon Bludnik" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <Navbar />
            <Hero />
            <Projects />
            <Contact />
            <Footer />
            <SpeedInsights />
        </>
    );
}