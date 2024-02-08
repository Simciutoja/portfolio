'use client'
import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import Link from 'next/link'
import Image from 'next/image'
const words: string[] = [
    'Szymon',
    'JavaScript Developer',
    'React Developer',
    'TypeScript Developer',
    'miłą osobą'
]

export default function Hero() {
    return (
        <div className="hero text-center flex items-center justify-center h-screen mt-[-50px] animate__animated animate__fadeInUp">
            <h1 className="text-6xl font-bold ">
                Cześć, jestem
                <div className="text-white-accent">
                    <Typewriter
                        words={words}
                        loop={true}
                        cursor={true}
                        cursorBlinking={true}
                        cursorColor={'#fffff'}
                    />
                </div>
                <div className="h-32 w-32 mx-auto flex items-center justify-center">
                    <Link href="#">
                        <Image
                            src="/arrow-d.svg"
                            alt="Picture of the author"
                            width={30}
                            height={30}
                        />
                    </Link>
                </div>
            </h1>
        </div>
    );
}