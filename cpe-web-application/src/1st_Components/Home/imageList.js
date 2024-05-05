import React from "react"
import { useState, useEffect } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight, faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const ImageList = () => {
    const images = ["./Img/main slide show (1).png", "./Img/Group 3.png"]
    const [currentSlide, setCurrentSlide] = useState(0)
    // const mathtest = 1 % 3
    // console.log("result : ",mathtest)


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

    const changeSlide = () => {
        const nextSlide = (currentSlide + 1) % images.length
        setCurrentSlide(nextSlide)
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