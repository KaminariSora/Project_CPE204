import React, { useState } from 'react';
import "./prev-student.css";

const PrevStudent = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [selectedStudent, setSelectedStudent] = useState(null);
    const students = [
        {
            id: 1,
            name: "Peem",
            position: "Software engineer at Siam Commercial Bank",
            company: "Siam Commercial Bank",
            image: "./Img/square component.png",
            information: "Computer Engineering Department provides comprehensive knowledge and valuable opportunities. Our Teachers and Professors always impel us beyond our capability limits. They support our internships with renowned organizations, fostering independent learning. Their suggestions of various competitions have instilled a sense of pride in our achievements. These experiences foster personal growth, broaden perspectives, and provide diverse knowledge in software, hardware, electrical engineering, electronics, and business. This diverse understanding has efficiently shaped me into an effective software engineer who comprehends requirements proficiently."
        },
        {
            id: 2,
            name: "Piano",
            position: "Data scientist at Bangkok Bank",
            company: "Bangkok Bank",
            image: "./Img/square component (1).png",
        },
        {
            id: 3,
            name: "Note",
            position: "Engineer (Level 4) at PEA",
            company: "PEA",
            image: "./Img/square component (2).png"
        },
        {
            id: 4,
            name: "New",
            position: "Penetration Tester at Datafarm",
            company: "Datafarm",
            image: "./Img/square component (4).png"
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
                        <span className="close" onClick={closePopup}>X</span>
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
