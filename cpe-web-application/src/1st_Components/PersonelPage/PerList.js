import "./PerList.css";
import Percard from "./PerCard";
import PropTypes from "prop-types";
import Slider from "react-slick";
import React, { useState,useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronLeft ,faCircleArrowRight, faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';


 const PerList = () => {
  const boxRef = useRef(null);
  const [showNavigation, setShowNavigation] = useState(true); 

    const btnPressPrev = () => {
        if (boxRef.current) {
            let width = boxRef.current.clientWidth;
            boxRef.current.scrollLeft -= width;
        }
    };

    const btnPressNext = () => {
        if (boxRef.current) {
            let width = boxRef.current.clientWidth;
            boxRef.current.scrollLeft += width;
        }
    };

    const toggleWrap = () => {
      const imageList = boxRef.current;
      imageList.classList.toggle('wrapped-Personnel');
      setShowNavigation(!showNavigation);
    };


  const AjList = [
    { id: 1,
      img: "./Aj-image/AjTor_crop2.jpg",
      name: "ผศ.ดร.ประมวล ชูรัตน",
      position: "หัวหน้าภาควิชา",
      email: "pramual@g.swu.ac.th",

    },
    {
      id: 2,
      img: "./Aj-image/AjArkom_crop2.jpg",
      name: "อาจารย์ อาคม ม่วงเขาแดง",
      position: "อาจารย์",
      email: "arkhomm@g.swu.ac.th",
    },
    {
      id: 3,
      img: "./Aj-image/AjSomphop2.jpg",
      name: "ผศ.ดร.สมภพ รอดอัมพร",
      position: "อาจารย์",
      email: "psomphop@g.swu.ac.th",
    },
    {
      id: 4,
      img: "./Aj-image/AjChai_crop.jpg",
      name: "ผศ.ชัยณรงค์ คล้ายมณี",
      position: "อาจารย์",
      email: "chainaro@g.swu.ac.th",
    },
    {
      id: 5,
      img: "./Aj-image/AjWatcharachai.jpg",
      name: "ผศ.วัชรชัย วิริยะสุทธิวงศ์",
      position: "อาจารย์",
      email: "watch@g.swu.ac.th",
    },
    {
      id: 6,
      img: "./Aj-image/AjBay_crop2 (1).jpg",
      name: "อาจารย์ สุทธิพันธ์ อักษรเนียม",
      position: "อาจารย์",
      email: "suttipan@g.swu.ac.th",
    },
    {
      id: 7,
      img: "./Aj-image/AjSuranan_crop2.jpg",
      name: "รศ.ดร.สุรนันท์ น้อยมณี",
      position: "อาจารย์",
      email: "suranan@g.swu.ac.th",
    },
    {
      id: 8,
      img: "./Aj-image/AjMas_crop2.jpg",
      name: "อาจารย์ ดร.ศรีศุภางค์ ทิ้วสุวรรณ",
      position: "อาจารย์",
      email: "srisupang@g.swu.ac.th",
    },
    {
      id: 9,
      img: "./Aj-image/AjMim_crop2_2.jpg",
      name: "อาจารย์ ธิติพร ประมวน",
      position: "อาจารย์",
      email: "thitipornp@g.swu.ac.th",
    },
    {
      id: 10,
      img: "./Aj-image/AjKritsada_crop.jpg",
      name: "อาจารย์ ดร.กฤษฏา เล่งเวหาสถิตย์",
      position: "อาจารย์",
      email: "krisdal@g.swu.ac.th",
    },
    {
      id: 11,
      img: "./Aj-image/PJub_crop_2.jpg",
      name: "ธนิตา ชี้รัตน์",
      position: "เจ้าหน้าที่บริหารงานทั่วไป",
      email: "thanita@g.swu.ac.th",
    },
    {
      id: 12,
      img: "./Aj-image/PLa_crop_2.jpg",
      name: "สุธิดา วงษ์อารี",
      position: "เจ้าหน้าที่บริหาร",
      email: "suthidabme@gmail.com",
    },
  ];
 

  return (
    <div>

      <div className="Profile-head">
              <span>โปรไฟล์บุคคลากร</span>
              <span className="show-all" onClick={toggleWrap}>แสดงทั้งหมด</span>
      </div>
      <hr></hr>
      <div className="main-Personnel">
        <div className="Personnel-containner">
          <div className="slider-wrapper">

          {showNavigation && (
                            <>
                                <button id="prev-slide" className="slide-button material-symbols-rounded" onClick={btnPressPrev}>
                                    <FontAwesomeIcon icon={faCircleChevronLeft} />
                                </button>
                                <button id="next-slide" className="slide-button material-symbols-rounded" onClick={btnPressNext}>
                                    <FontAwesomeIcon icon={faCircleChevronRight} />
                                </button>
                            </>
            )}

            <div className="image-list" ref={boxRef}>
              {AjList.map((e) => {
                return <Percard {...e} key ={e.id} />;
              })}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default PerList;
