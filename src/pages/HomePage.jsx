import Button from "../components/Button";
import Footer from "../components/Footer";
import { useTranslation } from "react-i18next";
import Skill from "../components/Skill";
import ContactForm from "../components/ContactForm";
import SlideShow from "../components/SlideShow";



export default function HomePage() {

    const { t } = useTranslation();


    return (
        <>
            {/* Banner Section */}
            <div id="top" className="flex justify-center items-center h-screen w-full bg-linear-to-r ">
                <video src="/background.mp4" autoPlay loop muted className="absolute w-full h-full object-cover brightness-50 " ></video>
                <div className="flex z-20 w-3/4 justify-between items-stretch text-white">
                    <div className="flex ps-2 flex-col justify-between w-full" >
                        <div>
                            <h1 className="pt-2 text-3xl font-light">{t("full_stack")}</h1>
                            <h2 className="text-6xl font-bold pb-2">Angel Velazquez</h2>
                            <Button href="/resume.pdf" classname="flex w-fit py-2 px-4 rounded-md bg-gray-700 text-white shadow-md hover:bg-gray-800">
                                {t("resume")}
                            </Button>
                        </div>
                        <h3 className="flex justify-end w-full text-3xl font-light p-3">{t("slogan")}</h3>
                    </div>
                    <img src="/banner.webp" alt="banner" className="h-[800px] object-cover w-[500px] rounded " />
                </div>
            </div>
            {/* Work Section */}
            <div id="work" className="flex flex-col justify-center items-center w-3/4 h-screen mx-auto ">
                <h1 className="text-5xl overflow-hidden py-3 font-bold z-40 text-white">{t("work")}</h1>
                <h2 className="text-xl overflow-hidden font-light pb-2 text-white">{t("work_subtitle")}</h2>
                <div className=" h-[800px] w-full border border-white/20 bg-white/10 rounded-xl shadow-lg">
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
                    />
                </div>
            </div>
            {/* About Section */}
            <div id="about" className="flex flex-col justify-center items-center w-3/4 h-screen mx-auto ">
                <h1 className="text-5xl overflow-hidden py-3 font-bold z-40 text-white">{t("about")}</h1>
                <h2 className="text-xl overflow-hidden font-light text-center pb-2 text-white ">{t("about_subtitle")}</h2>

                <div className="flex w-full justify-between h-[800px]">
                    <div className="relative h-full bg-white/10 backdrop-blur-xl border border-white/10 shadow-lg rounded-2xl text-white flex flex-col items-end">
                        <img src="/vertical-placeholder.webp" alt="foto" className="rounded-xl " width={"750"} />
                        <p className="absolute w-full h-full flex flex-col items-center justify-end p-2 text-pretty text-lg font-light bg-linear-to-t from-black/80 to-black/0 rounded-2xl">
                            {t("about_desc")}
                        </p>
                    </div>

                    <div className="flex flex-col justify-between w-full bg-black text-white p-4 rounded ms-4">
                        <div className="flex flex-col ">
                            <h1 className="text-2xl font-semibold mb-2">{t("education")}</h1>
                            <ul className="list-disc list-inside mb-2">
                                <li className="">{t("degree_1")} <p className="italic font-light pb-1">{t("school_1")}</p></li>
                                <li className="">{t("degree_3")} <p className="italic font-light pb-1">{t("school_2")}</p></li>
                                <li className="">{t("degree_5")} <p className="italic font-light pb-1">{t("school_3")}</p></li>
                            </ul>
                            <h1 className="text-2xl font-semibold">{t("certifications")}</h1>
                            <ul className="list-disc list-inside">
                                <li className="font-semibold bg-white/5 border border-white/10 rounded-xl p-2 backdrop-blur-md mb-2">{t("course_1")}<p className="italic font-light pb-1">{t("school_4")}</p></li>
                                <li className="font-semibold bg-white/5 border border-white/10 rounded-xl p-2 backdrop-blur-md mb-2">{t("course_2")}<p className="italic font-light pb-1">{t("school_4")}</p></li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h1 className="text-3xl font-semibold mb-4">{t("skills")}</h1>
                            <div className="grid grid-cols-12 grid-rows-4 gap-2">
                                <div className="border bg-white/20 rounded p-2 col-span-5 row-span-2 ">
                                    <h1>Backend</h1>
                                    <div className="flex">
                                        <Skill name="Java" icon="skill-icons:java-light" />
                                        <Skill name="Python" icon="skill-icons:python-light" />
                                        <Skill name="PHP" icon="skill-icons:php-light" />
                                        <Skill name="Express" icon="skill-icons:expressjs-light" />
                                    </div>
                                </div>
                                <div className="border rounded p-2 col-span-7 row-span-2 ">
                                    <h1>Frontend</h1>
                                    <div className="flex">
                                        <Skill name="React" icon="skill-icons:react-light" />
                                        <Skill name="Angular" icon="skill-icons:angular-light" />
                                        <Skill name="Vue" icon="skill-icons:vuejs-light" />
                                        <Skill name="Vite" icon="skill-icons:vite-light" />
                                        <Skill name="Tailwind" icon="skill-icons:tailwindcss-light" />
                                        <Skill name="HTML" icon="skill-icons:html" />
                                        <Skill name="CSS" icon="skill-icons:css" />
                                        <Skill name="JavaScript" icon="skill-icons:javascript" />
                                    </div>
                                </div>
                                <div className="border rounded p-2 col-span-4 row-span-2 ">
                                    <h1>Databases</h1>
                                    <div className="flex">
                                        <Skill name="MySQL" icon="skill-icons:mysql-light" />
                                        <Skill name="PostgreSQL" icon="skill-icons:postgresql-light" />
                                        <Skill name="MongoDB" icon="skill-icons:mongodb" />
                                    </div>
                                </div>
                                <div className="border rounded p-2 col-span-8 row-span-2 ">
                                    <h1>DevOps</h1>
                                    <div className="flex ">
                                        <Skill name="Docker" icon="skill-icons:docker" />

                                        <Skill name="Postman" icon="skill-icons:postman" />
                                        <Skill name="Git" icon="skill-icons:git" />
                                        <Skill name="GitHub" icon="skill-icons:github-light" />
                                        <Skill name="CI/CD" icon="skill-icons:githubactions-light" />
                                        <Skill name="Aws" icon="skill-icons:aws-light" />
                                        <Skill name="Nginx" icon="skill-icons:nginx" />
                                        <Skill name="Linux" icon="skill-icons:linux-light" />

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            {/* Contact Section */}
            <div id="contact" className="flex flex-col h-screen justify-center w-3/4 items-center mx-auto ">
                <h1 className="text-5xl overflow-hidden py-3 font-bold z-40 text-white " >{t("contact")}</h1>
                <h2 className="text-xl overflow-hidden font-light text-center pb-2 text-white   ">{t("contact_subtitle")}</h2>
                <ContactForm />
            </div>
            <Footer />
        </>
    );
}