import Header from "../../GlobalComponent/header"
import "./blog.css"

const Blog = () => {
    return (
        <div>
            <Header />
            <div className="body-container">
                <div id="article">
                    <h1>ภาควิชาวิศวกรรมคอมพิวเตอร์<br></br>
                        ได้กำหนดจัดโครงการศึกษาดู<br></br>
                        งานบริษัทโทรคมนาคมแห่ง<br></br>
                        ชาติ จำกัด (มหาชน) และ <br></br>
                        สำนักงานคณะกรรมการการรักษา<br></br>
                        ความมั่นคงปลอดภัยไซเบอร์แห่งชาติ
                    </h1>
                    <button>Read article</button>
                </div>
                <div id="article-2">
                    <h1>
                        บทความทั้งหมด
                        <hr></hr>
                    </h1>
                    <article className="article-container">
                        <div className="article-box">1</div>
                        <div className="article-box">2</div>
                        <div className="article-box">3</div>
                        <div className="article-box">4</div>
                        <div className="article-box">5</div>
                        <div className="article-box">6</div>
                    </article>
                </div>
                <div>3</div>
            </div>
        </div>
    )
}

export default Blog