import Slide from "./Slide";
import { useState } from "react";
import { Icon } from "@iconify/react";

export default function SlideShow({ slides }) {

    const [slideIndex, setSlideIndex] = useState(0);

    const moveSlide = (n) => () => {
        let newIndex = slideIndex + n;
        if (newIndex >= slides.length) {
            newIndex = 0;
        } else if (newIndex < 0) {
            newIndex = slides.length - 1;
        }
        setSlideIndex(newIndex);
    }
    
    return (
        <div className="w-full h-full relative m-auto overflow-hidden  rounded-xl" >
            <Slide slide={slides[slideIndex]} />
            <a className="cursor-pointer absolute top-1/2 left-5 w-auto -mt-6 p-2 bg-white/10 backdrop-blur-xl shadow-lg rounded-full border border-white/20 text-white font-bold text-2xl hover:bg-white/20" onClick={moveSlide(-1)}>
                <Icon icon="iconoir:arrow-left" width="24" height="24" />
            </a>
            <a className="cursor-pointer absolute top-1/2 right-5 w-auto -mt-6 p-2 bg-white/10 backdrop-blur-xl shadow-lg rounded-full border border-white/20 text-white font-bold text-2xl hover:bg-white/20" onClick={moveSlide(1)} >
                <Icon icon="iconoir:arrow-right" width="24" height="24" />
            </a>
        </div>
    );
}