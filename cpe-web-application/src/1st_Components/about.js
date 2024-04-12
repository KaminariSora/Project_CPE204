import { text } from "@fortawesome/fontawesome-svg-core";
import Header from "./header";
import "./about.css";
import { useRef, useEffect, useState } from "react";
import gsap from 'gsap';

const About = () => {
    const textRef1 = useRef(null);
    const textRef2 = useRef(null);
    const textRef3 = useRef(null);
    const textRefAll = useRef(null);

    const [time, setTime] = useState(false)
    let lastScrollTop = 0;

    useEffect(() => {
        gsap.from(textRef1.current, {
            opacity: 0,
            y: 100,
            duration: 2,
        });

        gsap.from(textRef2.current, {
            opacity: 0,
        });

        const handleScroll = () => {
            const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
            const direction = currentScroll > lastScrollTop ? 'down' : 'up';

            if (textRef1.current && direction === 'down') {
                const value = currentScroll; // Calculate value inside handleScroll
                gsap.to(textRef1.current, {
                    opacity: 1,
                    // x: direction === 'down' ? -value * 0.75 + 'px' : '0',
                    duration: 1
                });
                gsap.to(textRef2.current, {
                    opacity: direction === 'down' && value >= 100 ? 1 : 0,
                    // y: direction === 'down' ? -value * 0.75 + 'px' : '0',
                    duration: 1,
                    // onComplete: () => setTime(true)
                });
                gsap.to(textRef3.current, {
                    opacity: direction === 'down' && value >= 220 ? 1 : 0,
                    // y: direction === 'down' ? -value * 0.75 + 'px' : '0',
                    duration: 1
                });
                gsap.to(textRefAll.current, {
                    opacity: direction === 'down' && value >= 350 ? 1 : 0,
                    // y: direction === 'down' ? -value * 0.75 + 'px' : '0',
                    duration: 1
                });
            } else {
                const value = currentScroll;
                gsap.to(textRef1.current, {
                    opacity: 1,
                    // x: direction === 'down' ? -value * 0.75 + 'px' : '0',
                    duration: 1
                });
                gsap.to(textRef2.current, {
                    opacity: direction === 'up' && value <= 100 ? 0 : 1,
                    // y: direction === 'down' ? -value * 0.75 + 'px' : '0',
                    duration: 1,
                    // onComplete: () => setTime(true)
                });
                gsap.to(textRef3.current, {
                    opacity: direction === 'up' && value <= 220 ? 0 : 1,
                    // y: direction === 'down' ? -value * 0.75 + 'px' : '0',
                    duration: 1
                });
                gsap.to(textRefAll.current, {
                    opacity: direction === 'up' && value <= 350 ? 0 : 1,
                    // y: direction === 'down' ? -value * 0.75 + 'px' : '0',
                    duration: 1
                });
            }

            lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <Header />
            <div className="About-container">
                <div className="Text-container">
                    <h1 ref={textRef1} className="text" id="CPE">Computer Engineering</h1>
                    <h1 ref={textRef2} className="text" id="text-1">จบไปแล้วทำอะไรได้บ้าง</h1>
                    <h1 ref={textRef3} className="text" id="text-2">"เยอะ"</h1>
                    <div ref={textRefAll} className="All-text-container">
                        <h1 className="Around-text" id="text-3">Database Administrator</h1>
                        <h1 className="Around-text" id="text-4">Hardward Developer</h1>
                        <h1 className="Around-text" id="text-5">Programmer</h1>
                        <h1 className="Around-text" id="text-6">6</h1>
                        <h1 className="Around-text" id="text-7">7</h1>
                        <h1 className="Around-text" id="text-8">8</h1>
                        <h1 className="Around-text" id="text-9">9</h1>
                        <h1 className="Around-text" id="text-10">10</h1>
                        <h1 className="Around-text" id="text-11">11</h1>
                        <h1 className="Around-text" id="text-12">12</h1>
                        <h1 className="Around-text" id="text-13">13</h1>
                        <h1 className="Around-text" id="text-14">14</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
