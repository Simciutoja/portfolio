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
            <Image
                isZoomed
                src="/justMe.jpg"
                alt="Picture of the author"
                width={80}
                height={80}
            />
        </div>
    );
}