import { text } from "@fortawesome/fontawesome-svg-core";
import "./about.css";
import { useRef, useEffect } from "react";

const About = () => {
    const textRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (textRef.current) {
                const value = window.scrollY;
                textRef.current.style.marginRight = value * 0.75 + 'px';
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="About-container">
            <h1 ref={textRef}>Hello</h1>
        </div> 
    );
};

export default About;
