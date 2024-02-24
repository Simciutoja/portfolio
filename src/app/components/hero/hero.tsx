'use client'
import React from 'react'
import Typewriter from 'typewriter-effect';
import Link from 'next/link'
import Image from 'next/image'
export default function Hero() {


    return (
        <div
            className="hero text-center flex items-center justify-center h-screen mt-[-50px] animate__animated animate__fadeInUp">
            <h1 className="text-6xl font-bold ">
                Cześć, jestem
                <div className="text-white-accent">
                    <Typewriter
                        options={{
                            strings: ['Szymon', 'JavaScript Developer', 'React Developer', 'TypeScript Developer', 'miłą osobą'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </div>
                <div className="text-sm font-thin mt-4 block md:w-full px-10 md:px-0  md:max-w-2xl mx-auto">
                    <span>
                        Młody utalentowany programista, z sporą wiedzą w zakresie technologii webowych. Znajdę się w każdym zespole, a moje umiejętności z pewnością pomogą w rozwoju projektu.
                    </span>
                </div>
            </h1>
        </div>
    );
}