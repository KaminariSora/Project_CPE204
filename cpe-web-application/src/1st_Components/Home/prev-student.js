import React, { useState } from 'react';
import "./prev-student.css";

const PrevStudent = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [selectedStudent, setSelectedStudent] = useState(null);
    const students = [
        {
            id: 1,
            name: "Peem",
            position: "Software engineer",
            company: "Siam Commercial Bank",
            image: "./Img/square component.png",
            information: "Computer Engineering Department provides comprehensive knowledge and valuable opportunities. Our Teachers and Professors always impel us beyond our capability limits. They support our internships with renowned organizations, fostering independent learning. Their suggestions of various competitions have instilled a sense of pride in our achievements. These experiences foster personal growth, broaden perspectives, and provide diverse knowledge in software, hardware, electrical engineering, electronics, and business. This diverse understanding has efficiently shaped me into an effective software engineer who comprehends requirements proficiently."
        },
        {
            id: 2,
            name: "Piano",
            position: "Data scientist",
            company: "Bangkok Bank",
            image: "./Img/square component (1).png",
            information: "Studying in the computer engineering department is an adventure of learning new things, with instructors serving as guides and encouraging students to engage in programming competitions, hackathons, and technological challenges. This exposure allows us to discover our interests and career prospects, whether they are in software development, hardware design, or current networking systems, including working with critical big data in today’s world. Hands-on learning and exploration help us get a better understanding of ourselves and our interests, allowing us to make more informed decisions about our future paths."
        },
        {
            id: 3,
            name: "Note",
            position: "Engineer (Level 4)",
            company: "PEA",
            image: "./Img/square component (2).png",
            information: "During my time studying in this department, I have learned many unaccustomed academic knowledge and they have technology devices that help me achieve knowledge about VR. The teachers/professors here are professional and capable of teaching me how to think analytically and develop my potential in both fields of software and hardware, allowing me to become a skillful engineer who is ready to face any kinds of work on-site."
        },
        {
            id: 4,
            name: "New",
            position: "Penetration Tester",
            company: "Datafarm",
            image: "./Img/square component (4).png",
            information: "Studying cybersecurity in Computer Engineering Department at SWU captivated me. It sparked my curiosity, pushing me to dive deeper into the basics and gain practical experience through internships and real-world projects AKA working. Learning from experienced professors and seniors broadened my understanding even more. This journey fueled my passion for cybersecurity, confirming my desire to pursue it as a career."
        }
    ];

    const handleClick = (student) => {
        setSelectedStudent(student);
        setShowPopup(true);
    }

    const closePopup = () => {
        setShowPopup(false);
    }

    return (
        <div className="container">
            <div className="slide-wrapper">
                {students.map((student) => (
                    <div key={student.id} className="card" onClick={() => handleClick(student)}>
                        <img className="student" src={student.image} alt={student.name}></img>
                        <p>{student.name}</p>
                        <p>{student.position}</p>
                        <p>{student.company}</p>
                    </div>
                ))}
            </div>
            {showPopup && selectedStudent && (
                <div className="popup">
                    <div className="popup-content">
                        <span className="close" onClick={closePopup}><img src="./Img/cancle icon.png"></img></span>
                        <div className='student-image'>
                            <img src={selectedStudent.image} alt={selectedStudent.name} className='Pstudent'></img>
                            <p>{selectedStudent.name}</p>
                            <p>{selectedStudent.position}</p>
                            <p>{selectedStudent.company}</p>
                        </div>
                        <div className='information'>
                            <p>{selectedStudent.information}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default PrevStudent;
