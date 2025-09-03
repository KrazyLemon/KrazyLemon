import { Icon } from "@iconify/react";
import Button from "./Button";

export default function Card({ title, description, imageUrl, link, children,btn }) {
    return (
        <div className="relative w-5/12 rounded overflow-hidden ">
            {/* Imagen de fondo */}
            <img
                src={imageUrl}
                alt={title}
                className="w-full h-full object-cover"
            />
            {/* Contenido encima */}
            <div className="w-2/4 absolute right-0 top-0 bottom-0 text-white bg-black/20 backdrop-blur-sm p-3 flex flex-col justify-between ">
                <h3 className="self-end text-2xl font-semibold">{title}</h3>
                <p className="text-sm font-medium">{description}</p>
                {children}
                <a href={link} className="flex self-end rounded items-center w-fit gap-2 py-1 px-2 text-black bg-white/80 border border-white hover:bg-white/95 " >
                   {btn} 
                    <Icon icon="devicon:github" width="24" height="24" />
                </a>
            </div>
        </div>
    );
}

