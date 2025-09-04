import { Outlet } from "react-router";
import Link from "./Link";
import Selector from "./Selector";
import { useTranslation } from "react-i18next";

export default function NavBar() {

    const {t, i18n} = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    }
   
    return (
        <div className="bg-gray-200 w-full h-screen p-2">
            <nav className="flex justify-end w-full font-medium absolute top-0 right-0 z-30 p-3 backdrop-blur-3xl">
                <Link href="#work">{t("work")}</Link>
                <Link href="#about">{t("about")}</Link>
                <Link href="#contact">{t("contact")}</Link>
                <Selector onChange={changeLanguage} />
            </nav>
            <Outlet />
        </div>
    );
}