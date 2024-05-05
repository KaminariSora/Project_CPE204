import React from "react"
import { useState, useEffect } from "react"
import gsap from "gsap";
import './Perlmage.css';

const PersonalImage = () => {
    const images = ["../../../Img/personnel_1.jpg", "../../../Img/personnel_2.jpg"]
    const [currentSlide, setCurrentSlide] = useState(0)


    useEffect(() => {
        const interval = setInterval(() => {
            gsap.to(".image-box img", {
                opacity :0,
                onComplete: () => {
                    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length)
                    gsap.to(".image-box img", {
                        opacity: 1
                    })
                }
            })
        }, 5000); // Change slide every 2 seconds

        return () => clearInterval(interval); // Cleanup interval on unmount
    }, [images.length]);

    return (
        <div className="slideShow">
            <div className="image-box">
                <img src={images[currentSlide]}></img>
            </div>
        </div>
    )
}

export default PersonalImage