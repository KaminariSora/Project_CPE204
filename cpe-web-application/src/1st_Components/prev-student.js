import "./prev-student.css"

const PrevStudent = () => {
    return (
        <div className="container">
            <div className="slide-wrapper">
                <div className="card">
                    <img className="student" id="Peem" src="./Img/square component.png"></img>
                    <p>
                        Peem 
                        <br />
                        Worrapim Thiraphanukun
                        <br />
                        Software engineer
                        <br />
                        at Siam Commercial Bank
                    </p>
                </div>
                <div className="card">
                    <img className="student" id="Paino" src="./Img/square component (1).png"></img>
                    <p>
                        Piano
                        <br/>
                        Panisara Katesarapirom
                        <br/>
                        Data scientist
                        <br/>
                        at Bangkok Bank
                    </p>
                </div>
                <div className="card">
                    <img className="student" id="Note" src="./Img/square component (2).png"></img>
                    <p>
                        Note
                        <br/>
                        Nathapol Treetasanon
                        <br/>
                        Engineer (Level 4)
                        <br/>
                        at PEA
                    </p>
                </div>
                <div className="card">
                    <img className="student" id="New" src="./Img/square component (4).png"></img>
                    <p>
                        New
                        <br/>
                        Nattapat Singsaksri
                        <br/>
                        Penetration Tester
                        <br/>
                        at Datafarm
                    </p>
                </div>
            </div>
        </div>
    )
}

export default PrevStudent