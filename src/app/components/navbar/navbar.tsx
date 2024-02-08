'use client'
import React from 'react'
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
    Link
} from "@nextui-org/react";
import {Image} from "@nextui-org/react";
export default function Hero() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const menuItems = [
        "Strona główna",
        "Projekty",
        "Skontaktuj się",
    ];
    return (
        <Navbar onMenuOpenChange={setIsMenuOpen} shouldHideOnScroll className="font-thin">
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand className="flex gap-3">
                    <Image
                        isBlurred
                        width={50}
                        src="/justMe.jpg"
                        alt="NextUI Album Cover"
                        className="mr-5"
                    />
                    <p className="font-medium text-inherit">Simciutoja</p>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem isActive>
                    <Link color="foreground" href="#">
                        Strona główna
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" aria-current="page">
                        Projekty
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Skontaktuj się
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
            </NavbarContent>
            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            color={
                                index === 3 ? "primary" : "foreground"
                            }
                            className="w-full"
                            href="#"
                            size="lg"
                        >
                            {item}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}