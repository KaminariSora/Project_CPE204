import "./PerList.css";
import Percard from "./PerCard";
import PropTypes from "prop-types";
import Slider from "react-slick";

const PerList = () => {
  const AjList = [
    {
      img: "./Aj-image/AjTor_crop2.jpg",
      name: "ผศ.ดร.ประมวล ชูรัตน",
      position: "หัวหน้าภาควิชา",
      email: "pramual@g.swu.ac.th",
    },
    {
      img: "./Aj-image/AjArkom_crop2.jpg",
      name: "อาจารย์ อาคม ม่วงเขาแดง",
      position: "อาจารย์",
      email: "arkhomm@g.swu.ac.th",
    },
    {
      img: "./Aj-image/AjSomphop2.jpg",
      name: "ผศ.ดร.สมภพ รอดอัมพร",
      position: "อาจารย์",
      email: "psomphop@g.swu.ac.th",
    },
    {
      img: "./Aj-image/AjSomphop2.jpg",
      name: "ผศ.ดร.สมภพ รอดอัมพร",
      position: "อาจารย์",
      email: "psomphop@g.swu.ac.th",
    },
    {
      img: "./Aj-image/AjSomphop2.jpg",
      name: "ผศ.ดร.สมภพ รอดอัมพร",
      position: "อาจารย์",
      email: "psomphop@g.swu.ac.th",
    },
    {
      img: "./Aj-image/AjSomphop2.jpg",
      name: "ผศ.ดร.สมภพ รอดอัมพร",
      position: "อาจารย์",
      email: "psomphop@g.swu.ac.th",
    },
    {
      img: "./Aj-image/AjSomphop2.jpg",
      name: "ผศ.ดร.สมภพ รอดอัมพร",
      position: "อาจารย์",
      email: "psomphop@g.swu.ac.th",
    },
    {
      img: "./Aj-image/AjSomphop2.jpg",
      name: "ผศ.ดร.สมภพ รอดอัมพร",
      position: "อาจารย์",
      email: "psomphop@g.swu.ac.th",
    },
    {
      img: "./Aj-image/AjSomphop2.jpg",
      name: "ผศ.ดร.สมภพ รอดอัมพร",
      position: "อาจารย์",
      email: "psomphop@g.swu.ac.th",
    },
    {
      img: "./Aj-image/AjSomphop2.jpg",
      name: "ผศ.ดร.สมภพ รอดอัมพร",
      position: "อาจารย์",
      email: "psomphop@g.swu.ac.th",
    },
    {
      img: "./Aj-image/AjSomphop2.jpg",
      name: "ผศ.ดร.สมภพ รอดอัมพร",
      position: "อาจารย์",
      email: "psomphop@g.swu.ac.th",
    },
    {
      img: "./Aj-image/AjSomphop2.jpg",
      name: "ผศ.ดร.สมภพ รอดอัมพร",
      position: "อาจารย์",
      email: "psomphop@g.swu.ac.th",
    },
  ];
 

  return (
    <div className="main-Personnel">
      <div className="Personnel-containner">
        <div className="slider-wrapper">
        <button id="prev-slide" className="slide-button material-symbols-rounded"> </button>
          <ul className="image-list">
            {AjList.map((e) => {
              return <Percard {...e} />;
            })}
          </ul>
          <button id="next-slide" className="slide-button material-symbols-rounded"></button>
        </div>
      </div>
    </div>
  );
};

export default PerList;
