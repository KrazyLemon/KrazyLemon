import { useTranslation } from "react-i18next";
import { Icon } from "@iconify/react";


export default function Slide({ slide }) {

    const { t } = useTranslation();

    const { image, title, description, technologies, link, bgColor } = slide;

    return (
        <div className={`relative w-full h-full flex flex-col justify-center items-center overflow-hidden rounded-xl transition-color duration-700`} >
            {/* background image de la slide */}
            <img src={image} alt="img1" className="rounded-xl shadow-2xl w-10/12" />
            {/* overlay with text and link */}
            <div className="absolute left-0 top-0 h-full bg-linear-to-r rounded-xl from-black/80 to-black/0 flex flex-col justify-between p-4" >
                <div className="flex w-full h-fit justify-end gap-2 " >
                    {
                        link ?
                            <a href={link} className="flex self-end rounded-full items-center w-fit gap-2 py-2 px-2 text-white
                                bg-white/10 backdrop-blur-xl transition-opacity duration-300 hover:bg-white/20 border border-white/10 " >
                                <Icon icon="iconoir:github" width="24" height="24" />
                            </a> :
                            <span className="flex self-end rounded-full items-center w-fit gap-2 py-2 px-2 text-white cursor-not-allowed
                                bg-white/10 backdrop-blur-xl transition-opacity duration-300 hover:bg-white/20 border border-white/10 " >
                                <Icon icon="iconoir:warning-triangle" width="24" height="24" />
                            </span>
                    }
                    <button className="flex self-end rounded-full items-center w-fit gap-2 py-2 px-2 text-white
                                bg-white/10 backdrop-blur-xl transition-opacity duration-300 hover:bg-white/20 border border-white/10 " >
                            <Icon icon="iconoir:arrow-up-right" width="24" height="24" />
                    </button>
                </div>

                <div className="flex w-full h-fit justify-between items-center " >
                    <div className="flex flex-col w-1/2 self-start text-white gap-1" >
                        <h1 className="font-semibold text-5xl self-start overflow-hidden ">{title}</h1>
                        <p className="font-light text-md overflow-hidden text-pretty">{description}</p>
                    </div>
                    <div className="flex w-fit items-center self-end text-end gap-2" >
                        <h3 className="text-white text-xl font-semibold">{t("tech_stack")}</h3>
                        {technologies.map((tech, index) => (
                            <span key={index} className="bg-white/10 py-1 px-2 me-1 font-light text-white">{tech}</span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}