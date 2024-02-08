'use client'
import React from 'react'
import Link from 'next/link'
import {Image} from "@nextui-org/react";


export default function about() {
    return (
        <div className="about" id="about">
            <h1 className="text-6xl font-bold text-center mt-10 text-white">
                O mnie
            </h1>
            <div className="flex w-1/2 mx-auto mt-5">
            <Image
                isZoomed
                src="/justMe.jpg"
                alt="Picture of the author"
                width={240}
                height={240}
            />
            <p className="text-center text-white font-light mr-5">
                Cześć, jestem Szymon. Jestem JavaScript Developerem, który specjalizuje się w React.js oraz TypeScript. Moją pasją jest tworzenie nowych rzeczy, które pomagają ludziom. W wolnym czasie lubię jeździć na rowerze oraz biegać.
            </p>
            </div>
        </div>
    );
}