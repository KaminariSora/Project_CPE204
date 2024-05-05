import Header from "../../GlobalComponent/header"
import Footer from "../../GlobalComponent/footer"
import "./blog.css"
import ArticleContainer from "./article _box"

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
                    <ArticleContainer/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Blog