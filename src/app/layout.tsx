import type { Metadata } from "next";
import { Asap } from "next/font/google";
import "./globals.css";
import {Providers} from "./providers";
const asap = Asap({ subsets: ["latin"] });


export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="pl" className='dark'>
        <body className={asap.className}>
        <Providers>
            {children}
        </Providers>
        </body>
        </html>
    );
}