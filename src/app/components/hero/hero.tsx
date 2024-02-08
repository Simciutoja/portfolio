'use client'
import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
const words: string[] = [
   'Szymon',
    'JavaScript Developer',
    'React Developer',
    'TypeScript Developer',
    'miłą osobą'
]

export default function Hero() {
    return (
        <div className="hero text-center flex items-center justify-center h-screen mt-[-50px]">
            <h1 className="text-4xl font-bold">
                Cześć, jestem
                <div  className="text-white-accent">
                    <Typewriter
                        words={words}
                        loop={true}
                        cursor={true}
                        cursorBlinking={true}
                        cursorColor={'#'}
                        delaySpeed="2000"
                    />
                </div>
            </h1>
        </div>
    );
}