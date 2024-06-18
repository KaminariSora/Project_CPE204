import { text } from "@fortawesome/fontawesome-svg-core";
import Header from "../../GlobalComponent/header";
import "./about.css";
import { useRef, useEffect, useState } from "react";
import gsap from 'gsap';

const About = () => {
    const textRef1 = useRef(null);
    const textRef2 = useRef(null);
    const textRef3 = useRef(null);
    const textRefAll = useRef(null);
    const page2 = useRef(null);
    const page3 = useRef(null);
    const page4 = useRef(null);
    const page5 = useRef(null);
    const page6 = useRef(null);
    const secondRef = useRef(null);
    const thirdRef = useRef(null);
    const thirdRef2 = useRef(null);
    const forthRef = useRef(null);
    const forthRef2 = useRef(null);
    const fifthRef = useRef(null);
    const fifthRef2 = useRef(null);
    const sixRef = useRef(null);
    const sixRef2 = useRef(null);

    const [op, setOp] = useState(0)
    const [backgroundColor, setBackgroundColor] = useState('#A81717');
    let lastScrollTop = 0;

    useEffect(() => {
        gsap.from(textRef1.current, {
            opacity: 0,
            // y: 100,
            duration: 2,
        });

        gsap.from(textRef2.current, {
            opacity: 0,
        });

        setOp(0);
        console.log("set opacity of page 2")
        console.log(op)

        const handleScroll = () => {
            const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
            const direction = currentScroll > lastScrollTop ? 'down' : 'up';

            if (textRef1.current && direction === 'down') {
                const value = currentScroll; // Calculate value inside handleScroll
                gsap.to(textRef1.current, {
                    opacity: 1,
                    duration: 1
                });
                gsap.to(textRef2.current, {
                    opacity: direction === 'down' && value >= 200 ? 1 : 0,
                    duration: 1,
                    // onComplete: () => setTime(true)
                });
                gsap.to(textRef3.current, {
                    opacity: direction === 'down' && value >= 440 ? 1 : 0,
                    duration: 1
                });
                gsap.to(textRefAll.current, {
                    opacity: direction === 'down' && value >= 880 ? 1 : 0,
                    duration: 1
                });
                gsap.to(page2.current, {
                    opacity: direction === 'down' && value >= 1320 ? 1 : 0,
                    duration: 1
                });
                gsap.to(secondRef.current, {
                    opacity: direction === 'down' && value >= 1760 ? 1 : 0,
                    duration: 1
                });
                gsap.to(page3.current, {
                    opacity: direction === 'down' && value >= 2200 ? 1 : 0,
                    duration: 1
                });
                gsap.to(thirdRef.current, {
                    opacity: direction === 'down' && value >= 2640 ? 1 : 0,
                    duration: 1
                });
                gsap.to(thirdRef2.current, {
                    opacity: direction === 'down' && value >= 3080 ? 1 : 0,
                    duration: 1
                });
                gsap.to(page4.current, {
                    opacity: direction === 'down' && value >= 3520 ? 1 : 0,
                    duration: 1
                });
                gsap.to(forthRef.current, {
                    opacity: direction === 'down' && value >= 3960 ? 1 : 0,
                    duration: 1
                });
                gsap.to(forthRef2.current, {
                    opacity: direction === 'down' && value >= 4400 ? 1 : 0,
                    duration: 1
                });
                gsap.to(page5.current, {
                    opacity: direction === 'down' && value >= 4840 ? 1 : 0,
                    duration: 1
                });
                gsap.to(fifthRef.current, {
                    opacity: direction === 'down' && value >= 5280 ? 1 : 0,
                    duration: 1
                });
                gsap.to(fifthRef2.current, {
                    opacity: direction === 'down' && value >= 5720 ? 1 : 0,
                    duration: 1
                });
                gsap.to(page6.current, {
                    opacity: direction === 'down' && value >= 6160 ? 1 : 0,
                    duration: 1
                });
                gsap.to(sixRef.current, {
                    opacity: direction === 'down' && value >= 6600 ? 1 : 0,
                    duration: 1
                });
                gsap.to(sixRef2.current, {
                    opacity: direction === 'down' && value >= 7040 ? 1 : 0,
                    duration: 1
                });
                console.log(value)
            } else {
                const value = currentScroll;
                gsap.to(textRef1.current, {
                    opacity: 1,
                    // x: direction === 'down' ? -value * 0.75 + 'px' : '0',
                    duration: 1
                });
                gsap.to(textRef2.current, {
                    opacity: direction === 'up' && value <= 200 ? 0 : 1,
                    duration: 1,
                    // onComplete: () => setTime(true)
                });
                gsap.to(textRef3.current, {
                    opacity: direction === 'up' && value <= 440 ? 0 : 1,
                    duration: 1
                });
                gsap.to(textRefAll.current, {
                    opacity: direction === 'up' && value <= 880 ? 0 : 1,
                    duration: 1
                });
                gsap.to(page2.current, {
                    opacity: direction === 'up' && value <= 1320 ? 0 : 1,
                    duration: 1
                });
                gsap.to(secondRef.current, {
                    opacity: direction === 'up' && value <= 1760 ? 0 : 1,
                    duration: 1
                });
                gsap.to(page3.current, {
                    opacity: direction === 'up' && value <= 2200 ? 0 : 1,
                    duration: 1
                });
                gsap.to(thirdRef.current, {
                    opacity: direction === 'up' && value <= 2640 ? 0 : 1,
                    duration: 1
                });
                gsap.to(thirdRef2.current, {
                    opacity: direction === 'up' && value <= 3080 ? 0 : 1,
                    duration: 1
                });
                gsap.to(page4.current, {
                    opacity: direction === 'up' && value <= 3520 ? 0 : 1,
                    duration: 1
                });
                gsap.to(forthRef.current, {
                    opacity: direction === 'up' && value <= 3960 ? 0 : 1,
                    duration: 1
                });
                gsap.to(forthRef2.current, {
                    opacity: direction === 'up' && value <= 4400 ? 0 : 1,
                    duration: 1
                });
                gsap.to(page5.current, {
                    opacity: direction === 'up' && value <= 4840 ? 0 : 1,
                    duration: 1
                });
                gsap.to(fifthRef.current, {
                    opacity: direction === 'up' && value <= 5280 ? 0 : 1,
                    duration: 1
                });
                gsap.to(fifthRef2.current, {
                    opacity: direction === 'up' && value <= 5720 ? 0 : 1,
                    duration: 1
                });
                gsap.to(page6.current, {
                    opacity: direction === 'up' && value <= 6160 ? 0 : 1,
                    duration: 1
                });
                gsap.to(sixRef.current, {
                    opacity: direction === 'up' && value <= 6600 ? 0 : 1,
                    duration: 1
                });
                gsap.to(sixRef2.current, {
                    opacity: direction === 'up' && value <= 7040 ? 0 : 1,
                    duration: 1
                });
            }

            lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
        };

        const handleBackgroundChange = () => {
            const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
            if (currentScroll >= 1320) {
                gsap.to('.About-container' && '.Text-container', {
                    opacity: 0,
                    background: 'transparent',
                    duration: 1
                })
                gsap.to('.about-2' && '.Video-background', {
                    opacity: 1,
                    duration: 1,
                    y: 0
                })
                setBackgroundColor('transparent')
                console.log("set background to",backgroundColor)
            } else if (currentScroll < 1320) {
                gsap.to('.About-container', {
                    opacity: 1,
                    background: '#A81717',
                    duration: 1,
                })
                gsap.to('.Text-container', {
                    opacity: 1,
                    duration: 1
                })
            }
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('scroll', handleBackgroundChange);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('scroll', handleBackgroundChange);
        };
    }, []);

    return (
        <div>
            <Header />
            <div className="About-container" style={{ backgroundColor }}>
                <div className="Text-container">
                    <h1 ref={textRef1} className="text" id="CPE">Computer Engineering</h1>
                    <h1 ref={textRef2} className="text" id="text-1">จบไปแล้วทำอะไรได้บ้าง</h1>
                    <h1 ref={textRef3} className="text" id="text-2">"เยอะ"</h1>
                    <div ref={textRefAll} className="All-text-container">
                        <h1 className="Around-text" id="text-3">Database Administrator</h1>
                        <h1 className="Around-text" id="text-4">Hardward Developer</h1>
                        <h1 className="Around-text" id="text-5">Programmer</h1>
                        <h1 className="Around-text" id="text-6">Data Science</h1>
                        <h1 className="Around-text" id="text-7">Software Developer</h1>
                        <h1 className="Around-text" id="text-8">Cloud & Infrastructure</h1>
                        <h1 className="Around-text" id="text-9">AI Engineer</h1>
                        <h1 className="Around-text" id="text-10">Web Developer</h1>
                        <h1 className="Around-text" id="text-11">System Analyst</h1>
                        <h1 className="Around-text" id="text-12">Network Architect</h1>
                        <h1 className="Around-text" id="text-13">Security Analyst</h1>
                        <h1 className="Around-text" id="text-14">IT Project Manager</h1>
                    </div>
                </div>
            </div>
            <div ref={page2} className="about-2" style={{opacity: op}}>
                <div className="center-box">
                    <h1 className="Around-text" id="text-15">สร้างอนาคตในแบบของคุณ<br></br>“Software engineer”</h1>
                    <div ref={secondRef} className="second-box">
                        <ul>
                            <li>Front End Developer</li>
                            <li>Back End Developer</li>
                            <li>Full Stack Developer</li>
                            <li>Mobile Developer</li>
                            <li>DevOps Engineer</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div ref={page3} className="about-3" style={{opacity: op}}>
                <video autoPlay loop muted className="Video-background" style={{opacity: op}}>
                    <source src="../video/3209211-uhd_3840_2160_25fps.mp4" type="video/mp4" />
                </video>
                <div className="center-box" id="center-2">
                    <h1 ref={thirdRef} className="Around-text" id="text-16">วิเคราะห์ความสำเร็จที่ใช่<br></br>“Data Science”</h1>
                    <div ref={thirdRef2} className="third-box">
                        <ul>
                            <li>Data Analyst</li>
                            <li>Data Engineer</li>
                            <li>Data Scientist</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div ref={page4} className="about-4" style={{opacity: op}}>
                <div className="center-box" id="center-3">
                    <h1 ref={forthRef} className="Around-text" id="text-17">ผจญภัยในโลกของ<br></br>ปัญญาประดิษฐิ์<br></br>“Artificial intelligence”</h1>
                    <div ref={forthRef2} className="forth-box">
                        <ul>
                            <li>AI and NPL Engineering</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div ref={page5} className="about-3" style={{opacity: op}}>
                <video autoPlay loop muted className="Video-background" style={{opacity: op}}>
                    <source src="../video/0408.mp4" type="video/mp4" />
                </video>
                <div className="center-box" id="center-4">
                    <h1 ref={fifthRef} className="Around-text" id="text-18">วิเคราะห์ความสำเร็จที่ใช่<br></br>“Data Science”</h1>
                    <div ref={fifthRef2} className="fifth-box">
                        <ul>
                            <li>Network Engineer</li>
                            <li>Network Application</li>
                            <li>System Administrator</li>
                            <li>System Engineer</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div ref={page6} className="about-6" style={{opacity: op}}>
                <div className="center-box" id="center-5">
                    <h1 ref={sixRef} className="Around-text" id="text-17">เรียนรู้ทักษะแห่งโลกดิจิทัล<br></br>ไปพร้อมกับพวกเรา</h1>
                    <div ref={sixRef2} className="six-box">
                        <img src="../Img/Group 4.png"></img>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
