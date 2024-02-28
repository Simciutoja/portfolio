import { Asap } from "next/font/google";
import "./globals.css";
import {Providers} from "./providers";
const asap = Asap({ subsets: ["latin"] });
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from "next"
export const metadata: Metadata = {
    title: "Szymon Bludnik - Portfolio",
    description: "Moje portfolio zawierające doświadczenie i projekty.",
}

import Head from 'next/head';


export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
         
            <html lang="pl" className='dark'>
              <head>
                   <title>Szymon Bludnik - portfolio</title>
                <link rel="icon" href="/justMe.PNG" />
                <meta name="description" content="Moje portfolio zawierające doświadczenie i projekty." />
                <link rel="shortcut icon" href="/justMe.PNG" type="image/x-icon" />
                    </head>
                <body className={asap.className}>
                    <Providers>
                        {children}
                    </Providers>
                </body>
            </html>
        </>
    );
}
