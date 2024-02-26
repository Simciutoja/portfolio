import { Asap } from "next/font/google";
import "./globals.css";
import {Providers} from "./providers";
const asap = Asap({ subsets: ["latin"] });
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata: Metadata = {
    title: "Szymon Bludnik - Portfolio",
    description: "Moje portfolio zawierające doświadczenie i projekty.",
}

import Head from 'next/head';


export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Head>
                <title>{metadata.title}</title>
                <link rel="icon" href="/justMe.jpg" />
                <meta name="description" content={metadata.description} />
                <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
                {/* Add other meta tags as needed */}
            </Head>
            <html lang="pl" className='dark'>
                <body className={asap.className}>
                    <Providers>
                        {children}
                    </Providers>
                </body>
            </html>
        </>
    );
}