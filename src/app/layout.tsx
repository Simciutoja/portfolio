import { Asap } from "next/font/google";
import "./globals.css";
import {Providers} from "./providers";
const asap = Asap({ subsets: ["latin"] });
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata: Metadata = {
    title: "Szymon Bludnik - Portfolio",
    description: "Moje portfolio zawierające doświadczenie i projekty.",
}

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