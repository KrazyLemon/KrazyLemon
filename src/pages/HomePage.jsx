import Button from "../components/Button";
import { Icon } from "@iconify/react";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Chip from "../components/Chip";
import { useTranslation } from "react-i18next";
import Skill from "../components/Skill";
import ContactForm from "../components/ContactForm";



export default function HomePage() {

    const { t } = useTranslation();

    return (
        <>
            <div className="flex justify-center items-center min-h-screen w-full mb-8">
                <div className="flex w-3/4 justify-between items-stretch ">
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
                    <img src="/banner.webp" alt="banner" className="h-[800px] object-cover w-[500px] rounded" />
                </div>
            </div>
            <div id="work" className="flex flex-col justify-center items-center mb-8">
                <h1 className="text-5xl overflow-hidden py-3 font-bold z-40">{t("work")}</h1>
                <h2 className="text-xl overflow-hidden font-light pb-2">{t("work_subtitle")}</h2>
                <div className="flex w-full flex-wrap justify-center gap-2">
                    <Card
                        title={t("p1_title")}
                        description={t("p1_desc")}
                        imageUrl={"/p1.PNG"}
                        link="https://github.com/KrazyLemon/horarios_client" >
                        <div className="overflow-hidden">
                            <h1>{t("tech_stack")}</h1>
                            <Chip>Spring Boot </Chip>
                            <Chip>React JS</Chip>
                            <Chip >MongoDB</Chip>
                        </div>
                    </Card>
                    <Card
                        title={t("p2_title")}
                        description={t("p2_desc")}
                        imageUrl={"/p2.PNG"}
                        link="https://github.com/KrazyLemon/VerdeTech.1.0.2" >
                        <div className="overflow-hidden">
                            <h1>{t("tech_stack")}</h1>
                            <Chip>Arduino</Chip>
                            <Chip>Kotlin</Chip>
                            <Chip>Mysql</Chip>
                            <Chip>PHP</Chip>
                        </div>
                    </Card>
                    <Card
                        title={t("p3_title")}
                        description={t("p3_desc")}
                        imageUrl={"/p3.PNG"}
                        link="https://github.com/SevenLife-Sistemas1/seizoNew.git" >
                        <div className="overflow-hidden">
                            <h1>{t("tech_stack")}</h1>
                            <Chip>HTML5</Chip>
                            <Chip>CSS3</Chip>
                            <Chip>JS</Chip>
                        </div>
                    </Card>
                    <Card
                        title={t("p4_title")}
                        description={t("p4_desc")}
                        imageUrl={"/p4.PNG"}
                        link="/">
                        <div className="overflow-hidden">
                            <h1>{t("tech_stack")}</h1>
                            <Chip>Spring Boot</Chip>
                            <Chip>Spring Security</Chip>
                            <Chip>MySql</Chip>
                            <Chip>Docker</Chip>
                        </div>
                    </Card>
                </div>
            </div>
            <div id="about" className=" flex flex-col justify-center items-center mb-8 py-4 w-3/4 mx-auto">
                <h1 className="text-5xl overflow-hidden py-3 font-bold z-40">{t("about")}</h1>
                <h2 className="text-xl overflow-hidden font-light text-center pb-2">{t("about_subtitle")}</h2>
                <div className="flex w-full justify-center pt-2 ">
                    <div className="w-1/2 bg-white p-4 rounded me-4">
                        <img src="/placeholder.webp" alt="foto" />
                        <p className="text-lg font-light text-justify">
                            {t("about_desc")}
                        </p>
                    </div>
                    <div className="flex flex-col justify-between w-full bg-black text-white p-4 rounded ms-4">
                        <div className="flex flex-col gap-2">
                            <h1 className="text-2xl font-semibold">{t("education")}</h1>
                            <div className="flex flex-col">
                                <p className="font-semibold">{t("degree_1")}</p> <p className="italic font-light pb-1">{t("school_1")}</p>
                                <p className="font-semibold">{t("degree_3")}</p> <p className="italic font-light pb-1">{t("school_2")}</p>
                                <p className="font-semibold">{t("degree_5")}</p> <p className="italic font-light pb-1">{t("school_3")}</p>
                            </div>
                            <div>
                                <p className="text-2xl font-semibold">{t("certifications")}</p>
                                <ul className="list-disc list-inside">
                                    <li className="italic font-light">{t("course_1")}</li>
                                    <li className="italic font-light">{t("course_2")}</li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h1 className="text-3xl font-semibold mb-4">{t("skills")}</h1>
                            <div className="grid grid-cols-8 gap-2">
                                <Skill name="Java" >
                                    <Icon icon="devicon:java" width="40" height="40" />
                                </Skill>
                                <Skill name="JavaScript">
                                    <Icon icon="devicon:javascript" width="40" height="40" />
                                </Skill>
                                <Skill name="React">
                                    <Icon icon="devicon:react" width="40" height="40" />
                                </Skill>
                                <Skill name="Spring">
                                    <Icon icon="devicon:spring" width="40" height="40" />
                                </Skill>
                                <Skill name="Node.js">
                                    <Icon icon="devicon:nodejs" width="40" height="40" />
                                </Skill>
                                <Skill name="HTML5">
                                    <Icon icon="devicon:html5" width="40" height="40" />
                                </Skill>
                                <Skill name="CSS3">
                                    <Icon icon="devicon:css3" width="40" height="40" />
                                </Skill>
                                <Skill name="Git">
                                    <Icon icon="devicon:git" width="40" height="40" />
                                </Skill>
                                <Skill name="Docker">
                                    <Icon icon="devicon:docker" width="40" height="40" />
                                </Skill>
                                <Skill name="MySQL">
                                    <Icon icon="devicon:mysql" width="40" height="40" />
                                </Skill>
                                <Skill name="MongoDB">
                                    <Icon icon="devicon:mongodb" width="40" height="40" />
                                </Skill>
                                <Skill name="Kotlin">
                                    <Icon icon="devicon:kotlin" width="40" height="40" />
                                </Skill>
                                <Skill name="PHP">
                                    <Icon icon="devicon:php" width="40" height="40" />
                                </Skill>
                                <Skill name="PostgreSQL">
                                    <Icon icon="devicon:postgresql" width="40" height="40" />
                                </Skill>
                                <Skill name="Linux">
                                    <Icon icon="devicon:linux" width="40" height="40" />
                                </Skill>

                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <div id="contact" className="w-full h-screen flex flex-col justify-top items-center my-8">
                <h1 className="text-5xl overflow-hidden py-3 font-bold z-40" >{t("contact")}</h1>
                <h2 className="text-xl overflow-hidden font-light text-center pb-2">{t("contact_subtitle")}</h2>
                <ContactForm />
            </div>
            <Footer />
        </>
    );
}