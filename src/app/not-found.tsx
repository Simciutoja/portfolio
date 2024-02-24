import Link from 'next/link'
import Navbar from './components/navbar/navbar';
import React from "react";

export default function NotFound() {
    return (
        <>
            <Navbar/>
            <div
                className="hero text-center flex items-center justify-center h-screen mt-[-50px] animate__animated animate__fadeInUp">
                <div className="text-6xl font-bold ">
                    <p>Nie znaleziono strony</p>
                    <p>
                        <Link href="/" className="text-xl font-normal text-blue-400 underline underline-offset-4">
                            Wróć do strony głównej
                        </Link>
                    </p>
                </div>
            </div>
        </>
    )
}