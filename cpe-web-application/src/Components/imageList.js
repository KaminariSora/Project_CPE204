import React from "react"
import { useState, useEffect } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight, faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';

const ImageList = () => {
    const images = ["./Img/main slide show (1).png", "./Img/Minecraft.png", "./Img/5F6991C6-58F9-47A4-BE96-68BCA73A0CA8 1.png"]
    const [currentSlide, setCurrentSlide] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevIndex) => (prevIndex + 1) % images.length);
        }, 2000); // Change slide every 2 seconds

        return () => clearInterval(interval); // Cleanup interval on unmount
    }, [images.length]);

    const changeSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length)
        console.log(currentSlide)
    }

    return (
        <div className="slideShow">
            <div className="image-box">
                <img src={images[currentSlide]}></img>
                <button className="next-btn" onClick={changeSlide}>
                    <FontAwesomeIcon icon={faCircleChevronRight} />
                </button>
            </div>
        </div>
    )
}

export default ImageList