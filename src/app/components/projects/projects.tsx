'use client'
import React from 'react'
import Image from 'next/image'

export default function projects() {
    return (
        <>
            <h1 className="text-4xl m-10 font-bold text-center">
                Poznajmy się
            </h1>
            <div className="flex w-1/2 md:1/3 mx-auto gap-10">
                <Image
                    src="/justMe.jpg"
                    alt="hero"
                    width={256}
                    height={256}
                    className="rounded-md hidden md:block"
                />
                <div className="flex flex-col justify-center md:pl-4">

                    <p className="text-md font-thin block">
                        Jestem Szymon, jestem na 2 roku technikum o kierunku
                        programista. Pochodzę z Warszawy, na codzień chodzę na siłownię,
                        pływam hobbistycznie czy gramy w gry komputerowe.
                    </p>
                </div>

            </div>
        </>
    );
}