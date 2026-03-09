import Button from "../components/Button";
import Footer from "../components/Footer";
import { useTranslation } from "react-i18next";
import ContactForm from "../components/ContactForm";
import SlideShow from "../components/SlideShow";
import { useState, useEffect, useRef } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import Modal from "../components/Modal";

export default function HomePage() {

    const [isFullDescriptionHidden, setIsFullDescriptionHidden] = useState(true);
    const descRef = useRef(null);
    const [maxH, setMaxH] = useState('4.5rem');

    const [slide, setSlide] = useState({});
    const [isModalOpen, setIsModalOpen] = useState(false);

    const { t } = useTranslation();

    const HandleDescriptionIsHidden = (val) => {
        if (typeof val === "boolean") setIsFullDescriptionHidden(val);
        else setIsFullDescriptionHidden((prev) => !prev);
    };

    const handleSelectedSlide = (slide) => {
        setSlide(slide);
    };

    const handleModalButton = (e) => {
        e.preventDefault();
        setIsModalOpen(!isModalOpen);
    }


    useEffect(() => {
        if (!descRef.current) return;
        setMaxH(isFullDescriptionHidden ? '4.5rem' : `${descRef.current.scrollHeight}px`);
    }, [isFullDescriptionHidden]);



    return (
        <>
            {/* Banner Section */}
            <div id="top" className="flex justify-center items-center h-screen w-full bg-linear-to-r from-blue-950/40 via-20% via-black/80 to-95% to-red-950/50 relative overflow-hidden ">
                <div className="flex flex-col md:flex-row z-20 w-11/12 md:w-3/4 mx-auto items-center md:items-stretch text-white gap-6">
                    {/* TEXTO */}
                    <div className="flex flex-col justify-between w-full md:pt-4 text-center md:text-left">
                        <div>
                            <h1 className="pt-2 text-lg md:text-3xl font-light">
                                {t("full_stack")}
                            </h1>
                            <h2 className="text-3xl md:text-6xl font-bold pb-3">
                                Angel Velazquez
                            </h2>
                            <Button
                                href="/resume.pdf"
                                classname="flex mx-auto md:mx-0 w-fit py-2 px-4 rounded-md bg-gray-700 text-white shadow-md hover:bg-gray-800"
                            >
                                {t("resume")}
                            </Button>
                        </div>

                        <h3 className="md:text-3xl font-light pt-4 md:pt-0 text-center md:text-right">
                            {t("slogan")}
                        </h3>

                    </div>

                    {/* IMAGEN */}
                    <img
                        src="/img001.jpg"
                        alt="banner"
                        className="w-48 md:w-9/12 md:h-[720px] object-cover rounded-xl shadow-xl"
                    />

                </div>
            </div>
            {/* Work Section */}
            <div id="work" className="flex flex-col justify-center items-center md:w-3/4 w-11/12 h-screen md:h-[720px] mb-10 mx-auto ">
                <h1 className="text-5xl overflow-hidden py-3 font-bold z-30 text-white">{t("work")}</h1>
                <h2 className="text-xl overflow-hidden font-light pb-2 text-white">{t("work_subtitle")}</h2>
                <div className="h-8/12 md:h-[720px] w-full border border-white/20 bg-white/10 rounded-xl shadow-lg">
                    <SlideShow
                        slides={[
                            {
                                image: "/p1.PNG",
                                title: t("p1_title"),
                                description: t("p1_desc"),
                                technologies: ["React", "Node.js", "Express", "MongoDB"],
                                link: "https://github.com/KrazyLemon/horarios_client.git",
                                bgColor: "bg-cyan-700"
                            },
                            {
                                image: "/p2.PNG",
                                title: t("p2_title"),
                                description: t("p2_desc"),
                                technologies: ["Arduino", "Kotlin", "Firebase", "PHP", "MySQL"],
                                link: "https://github.com/KrazyLemon/VerdeTech.1.0.2.git",
                                bgColor: "bg-lime-700"
                            },
                            {
                                image: "/p3.PNG",
                                title: t("p3_title"),
                                description: t("p3_desc"),
                                technologies: ["HTML", "CSS", "JavaScript"],
                                link: "https://github.com/SevenLife-Sistemas1/seizoNew.git",
                                bgColor: "bg-rose-700",
                            },
                            {
                                image: "/p4.PNG",
                                title: t("p4_title"),
                                description: t("p4_desc"),
                                technologies: ["Java", "Spring Boot", "Spring Security", "MySQL", "Docker"],
                                link: "",
                                bgColor: "bg-yellow-700"
                            },
                        ]}
                        handleSelectedSlide={handleSelectedSlide}
                        handleModalButton={handleModalButton}
                        isModalOpen={isModalOpen}
                        setIsModalOpen={setIsModalOpen}
                    />
                </div>
                <Modal
                    slide={slide}
                    isModalOpen={isModalOpen}
                    handleModalButton={handleModalButton}
                />
            </div>
            {/* About Section */}
            <div id="about" className="flex flex-col justify-center items-center w-11/12 md:w-3/4 mx-auto ">
                <h1 className="text-5xl overflow-hidden py-3 font-bold z-40 text-white">{t("about")}</h1>
                <h2 className="text-xl overflow-hidden font-light text-center pb-2 text-white ">{t("about_subtitle")}</h2>
                <div className="flex flex-col md:flex-row w-full gap-4">
                    {/* About Me Izq */}
                    <div className="relative h-full w-full md:h-[650px] md:w-1/3 bg-white/10 backdrop-blur-xl border border-white/10 shadow-lg rounded-2xl text-white flex flex-col items-end">
                        <img src="/img003.jpg" alt="foto" className="p-2 rounded-2xl shadow-lg object-cover w-full h-full" />
                        <form className="absolute w-full h-full p-4 flex flex-col items-center justify-end  bg-linear-to-t from-black/90 to-black/0 rounded-2xl">
                            {
                                isFullDescriptionHidden ? (
                                    <button
                                        type="button"
                                        onClick={() => HandleDescriptionIsHidden(false)}
                                        className="cursor-pointer z-40 mb-2 border border-white/20 
                                            rounded-full p-2 bg-white/10 hover:bg-white/20 transition-all duration-500 flex items-center justify-center"
                                    >
                                        <Icon icon="mdi-light:chevron-double-down" width="24" height="24" className="animate-pulse" />
                                    </button>) : (
                                    <button
                                        type="button"
                                        onClick={() => HandleDescriptionIsHidden(true)}
                                        className="cursor-pointer z-40 mb-2 border border-white/20 
                                            rounded-full p-2 bg-white/10 hover:bg-white/20 transition-all duration-300 flex items-center justify-center overflow-hidden"
                                    >
                                        <Icon icon="mdi-light:chevron-double-up" width="24" height="24" className="animate-pulse" />
                                    </button>
                                )
                            }
                            <p
                                ref={descRef}
                                className="p-2 text-pretty text-lg font-light md:text-sm"
                                style={{
                                    maxHeight: maxH,
                                    overflow: 'hidden',
                                    transition: 'max-height 500ms ease'
                                }}
                            >
                                {t("about_desc")}
                            </p>
                        </form>
                    </div>
                    {/* About Me Der */}
                    <div className="h-full w-full md:w-full p-2 bg-white/10 backdrop-blur-xl border border-white/10 shadow-lg rounded-2xl text-white items-end">
                        <div className="w-full h-fit p-4 flex flex-col">
                            <h1 className="w-full font-semibold flex justify-center md:justify-end text-2xl md:text-3xl text-white">
                                {t("education")}
                            </h1>

                            <ul className="w-full grid grid-cols-1 md:grid-cols-3 gap-3 mt-2">
                                <li className="bg-white/10 backdrop-blur-xl border border-white/10 shadow-lg rounded-2xl text-white p-4 flex flex-col gap-1">
                                    <Icon icon="mdi:school" width={24} height={24} />
                                    <h4 className="font-semibold text-sm md:text-md">{t("degree_1")}</h4>
                                    <p className="text-xs opacity-80">{t("school_1")}</p>
                                </li>

                                <li className="bg-white/10 backdrop-blur-xl border border-white/10 shadow-lg rounded-2xl text-white p-4 flex flex-col gap-1">
                                    <Icon icon="mdi:school" width={24} height={24} />
                                    <h4 className="font-semibold text-sm md:text-md">{t("degree_3")}</h4>
                                    <p className="text-xs opacity-80">{t("school_2")}</p>
                                </li>

                                <li className="bg-white/10 backdrop-blur-xl border border-white/10 shadow-lg rounded-2xl text-white p-4 flex flex-col gap-1">
                                    <Icon icon="mdi:school" width={24} height={24} />
                                    <h4 className="font-semibold text-sm md:text-md">{t("degree_5")}</h4>
                                    <p className="text-xs opacity-80">{t("school_3")}</p>
                                </li>
                            </ul>
                        </div>
                        <div className="w-full h-fit px-4 flex flex-col">
                            <h1 className="w-full font-semibold flex justify-center md:justify-start text-2xl md:text-3xl text-white">
                                {t("certifications")}
                            </h1>

                            <ul className="w-full grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
                                <li className="bg-white/10 backdrop-blur-xl border border-white/10 shadow-lg rounded-2xl text-white p-4 flex flex-col gap-1">
                                    <Icon icon="mdi:certificate" width={24} height={24} />
                                    <h4 className="font-semibold text-sm md:text-md">{t("course_1")}</h4>
                                    <p className="text-xs opacity-80">{t("school_4")}</p>
                                </li>

                                <li className="bg-white/10 backdrop-blur-xl border border-white/10 shadow-lg rounded-2xl text-white p-4 flex flex-col gap-1">
                                    <Icon icon="mdi:certificate" width={24} height={24} />
                                    <h4 className="font-semibold text-sm md:text-md">{t("course_2")}</h4>
                                    <p className="text-xs opacity-80">{t("school_4")}</p>
                                </li>
                            </ul>
                        </div>
                        <h1 className="w-full font-semibold flex justify-center md:justify-start text-2xl md:text-3xl text-white">{t("skills")}</h1>
                        <h4 className="w-full mx-auto justify-start my-1 flex text-xl overflow-hidden px-4 md:hidden ">Backend</h4>
                        <ul className="w-full h-fit px-4 grid grid-cols-2 md:grid-cols-8 gap-2">
                            <li className="bg-white/10 backdrop-blur-xl border col-span-3 border-white/10 shadow-lg rounded-2xl text-white p-2 ">
                                <h6 className="text-sm font-light mb-1">{t("progamming")}</h6>
                                <div className="flex justify-around items-center">
                                    <div className="flex flex-col items-center">
                                        <Icon icon="skill-icons:java-dark" width={36} height={36} />
                                        <h6 className="md:flex justify-center text-xs pt-1 hidden">Java</h6>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <Icon icon="skill-icons:python-dark" width={36} height={36} />
                                        <h4 className="md:flex justify-center text-xs pt-1 hidden">Python</h4>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <Icon icon="skill-icons:cpp" width={36} height={36} />
                                        <h4 className="md:flex justify-center text-xs pt-1 hidden">C++</h4>
                                    </div>
                                </div>
                            </li>
                            <li className="bg-white/10 backdrop-blur-xl border col-span-3 border-white/10 shadow-lg rounded-2xl text-white p-2 ">
                                <h6 className="text-sm font-light mb-1">Backend</h6>
                                <div className="flex justify-around items-center">
                                    <div className="flex flex-col items-center">
                                        <Icon icon="skill-icons:spring-dark" width={36} height={36} />
                                        <h6 className="md:flex justify-center text-xs pt-1 hidden">Spring Boot</h6>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <Icon icon="skill-icons:fastapi" width={36} height={36} />
                                        <h4 className="md:flex justify-center text-xs pt-1 hidden">FastAPI</h4>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <Icon icon="skill-icons:expressjs-dark" width={36} height={36} />
                                        <h4 className="md:flex justify-center text-xs pt-1 hidden">Express JS</h4>
                                    </div>
                                </div>
                            </li>
                            <li className="bg-white/10 backdrop-blur-xl border col-span-2 border-white/10 shadow-lg rounded-2xl text-white p-2 ">
                                <h6 className="text-sm font-light mb-1">DB's</h6>
                                <div className="flex justify-around items-center">
                                    <div>
                                        <Icon icon="skill-icons:postgresql-dark" width={36} height={36} />
                                        <h6 className="md:flex justify-center text-xs pt-1 hidden">PostgreSQL</h6>
                                    </div>
                                    <div>
                                        <Icon icon="skill-icons:mongodb" width={36} height={36} />
                                        <h4 className="md:flex justify-center text-xs pt-1 hidden">MongoDB</h4>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <div className="w-full mx-auto justify-around my-1 flex text-xl overflow-hidden px-4 md:hidden " >
                            <h4>Frontend</h4>
                            <h4>CI / CD</h4>
                        </div>
                        <ul className="w-full h-fit px-4 grid  grid-cols-2 md:grid-cols-8 gap-2 md:mt-2">
                            <li className="bg-white/10 backdrop-blur-xl border col-span-2 border-white/10 shadow-lg rounded-2xl text-white p-2 ">
                                <h6 className="text-sm font-light mb-1">Frontend</h6>
                                <div className="flex justify-around items-center">
                                    <div className="flex flex-col items-center">
                                        <Icon icon="skill-icons:react-dark" width={36} height={36} />
                                        <h6 className="md:flex justify-center text-xs pt-1 hidden">React JS</h6>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <Icon icon="skill-icons:angular-dark" width={36} height={36} />
                                        <h4 className="md:flex justify-center text-xs pt-1 hidden">Angular</h4>
                                    </div>
                                </div>
                            </li>
                            <li className="bg-white/10 backdrop-blur-xl border col-span-2 border-white/10 shadow-lg rounded-2xl text-white p-2 ">
                                <h6 className="text-sm font-light mb-1">Tools</h6>
                                <div className="flex justify-around items-center">
                                    <div className="flex flex-col items-center">
                                        <Icon icon="skill-icons:github-dark" width={36} height={36} />
                                        <h6 className="md:flex justify-center text-xs pt-1 hidden">GitHub</h6>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <Icon icon="skill-icons:postman" width={36} height={36} />
                                        <h6 className="md:flex justify-center text-xs pt-1 hidden">Postman</h6>
                                    </div>
                                </div>
                            </li>
                            <li className="bg-white/10 backdrop-blur-xl border col-span-4 border-white/10 shadow-lg rounded-2xl text-white p-2 ">
                                <h6 className="text-sm font-light mb-1">CI/CD</h6>
                                <div className="flex justify-around items-center">
                                    <div className="flex flex-col items-center">
                                        <Icon icon="skill-icons:docker" width={36} height={36} />
                                        <h6 className="md:flex justify-center text-xs pt-1 hidden">Docker</h6>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <Icon icon="skill-icons:kubernetes" width={36} height={36} />
                                        <h6 className="md:flex justify-center text-xs pt-1 hidden">Kubernetes</h6>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <Icon icon="skill-icons:aws-dark" width={36} height={36} />
                                        <h6 className="md:flex justify-center text-xs pt-1 hidden">AWS</h6>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <Icon icon="skill-icons:gcp-dark" width={36} height={36} />
                                        <h6 className="md:flex justify-center text-xs pt-1 hidden">GCP</h6>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* Contact Section */}
            <div id="contact" className="flex flex-col h-screen justify-center w-11/12 md:w-3/4 items-center mx-auto ">
                <h1 className="text-5xl overflow-hidden py-3 font-bold z-40 text-white " >{t("contact")}</h1>
                <h2 className="text-xl overflow-hidden font-light text-center pb-2 text-white   ">{t("contact_subtitle")}</h2>
                <div className="flex ">
                    <ContactForm />
                    <div className="h-8 ">
                        {/* Spacer div to create gap between form and image */}
                    </div>
                    <div className="hidden md:flex ms-8">
                        <img src="/banner.webp" alt="contact" className="h-[600px] object-cover rounded-xl shadow-lg " />
                    </div>
                </div>

            </div>
            <Footer />
        </>
    );
}