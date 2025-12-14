import { Outlet } from "react-router";
import Link from "./Link";
import TopButton from "./TopButton";
import Selector from "./Selector";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

export default function NavBar() {
    const [scrolled, setScrolled] = useState(false);
    const { t, i18n } = useTranslation();

    const [bgColor, setBgColor] = useState("bg-cyan-700");
    const [bgIndex, setBgIndex] = useState(0);

    const colors = [
        // Azules
        "via-blue-900",
        "via-blue-800",
        "via-sky-800",
        "via-sky-800",
        "via-cyan-700",

        // Cian → Verde
        "via-teal-700",
        "via-emerald-700",
        "via-green-700",

        // Verde → Amarillo suave
        "via-lime-600",
        "via-yellow-600",

        // Amarillo → Naranja
        "via-amber-600",
        "via-orange-600",

        // Naranja → Rojo suave
        "via-red-600",
        "via-rose-600",

        // Rosa → Morado
        "via-pink-600",
        "via-fuchsia-700",
        "via-purple-800",
        "via-violet-900",
    ];


    useEffect(() => {
        const interval = setInterval(() => {
            setBgIndex((prevIndex) => {
                const next = (prevIndex + 1) % colors.length;
                setBgColor(colors[next]);
                return next;
            });
        }, 3000);
        return () => clearInterval(interval);
    }, []);


    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);

        handleScroll();

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    const changeLanguage = (lng) => i18n.changeLanguage(lng);

    return (
        <div className={`w-full min-h-screen bg-gradient-to-b from-black from-30%  transition-colors duration-[2000ms] ease-in-out to-black ${bgColor}`}>

            <div className=" w-3/4 flex justify-between fixed top-2 left-1/2 -translate-x-1/2 z-30">
                <a href="#top" className={`flex *: py-2 items-center px-3 font-medium transition-all duration-300 text-white border border-white/0 
                        ${scrolled
                        ? "bg-white/10 backdrop-blur-xl inset-shadow-xs drop-shadow-xl/20  inset-shadow-white rounded-xl border-white/20 hover:bg-white/20 "
                        : "bg-transparent"
                    }`}>
                    <img src="/icon.png" alt="logo" className="w-8 h-8 me-2" />
                    <span className="text-2xl font-bold">KrazyLemon</span>
                </a>
                <nav
                    className={`p-2 gap-1 flex justify-end items-center font-medium transition-all duration-300 text-white border border-white/0 
                        ${scrolled
                            ? "bg-white/10 backdrop-blur-xl drop-shadow-lg/20 rounded-xl border-white/20"
                            : "bg-transparent"
                        }`}
                >
                    <Link href="#work">{t("work")}</Link>
                    <Link href="#about">{t("about")}</Link>
                    <Link href="#contact">{t("contact")}</Link>
                    <Selector onChange={changeLanguage} />
                </nav>
            </div>
            <Outlet />
            <TopButton />
        </div>
    );
}
