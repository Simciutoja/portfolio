import React from 'react'
import 'remixicon/fonts/remixicon.css'
import {Code} from "@nextui-org/react";

export default function contact() {
    return (
        <>
            <h1 className="text-4xl m-10 font-bold text-center">
              Skontaktuj się ze mną
            </h1>
            <div className="flex w-full md:w-1/2 mx-auto gap-10 justify-center text-center">
                <div className="flex flex-col justify-center md:pl-4 mx-auto">
                    <div className="flex mt-2">
                        <div className="flex flex-col items-center w-1/2">
                            <i className="ri-mail-line"></i>
                            <p className="text-md font-thin">
                                Jeśli chcesz się ze mną skontaktować, napisz do mnie na maila<br />
                                <a href="mailto:szbludnik@mscode.pl">
                                    <Code>szbludnik@mscode.pl</Code>
                                </a>
                            </p>
                        </div>
                        <div className="flex flex-col items-center w-1/2">
                            <i className="ri-discord-line"></i>
                            <p className="text-md font-thin">
                                lub przez discorda<br></br>
                                <a href="https://discord.com/users/991282953961349160">
                                    <Code>simciutoja</Code>
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}