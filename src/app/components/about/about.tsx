'use client'
import React from 'react'

export default function about() {
    return (
        <div className="about m-10 md:w-1/3 mx-auto"
             id="about">
            <h1 className="text-6xl font-bold text-center mt-10 text-white">
                Kim jestem?
            </h1>
            <div className="relative md:flex items-center justify-center mt-10 md:gap-10">
            <p className="text-center text-white text-2xl font-medium  mx-auto">
                Cześć, jestem <span className="text-white-accent">Szymon</span> Jestem JavaScript Developerem, który specjalizuje się w React.js oraz TypeScript. <span className="text-white-accent">Moją
                pasją jest tworzenie nowych rzeczy</span>, dlatego zawsze staram się rozwijać i poszerzać swoją wiedzę. <span className="text-white-accent">Jestem osobą, która zawsze stara się pomóc innym</span> i
                jestem przekonany, że <span className="text-white-accent">współpraca z Tobą będzie dla mnie ogromnym doświadczeniem</span>.
            </p>
            </div>
        </div>
    );
}