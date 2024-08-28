import React from 'react';
import "./style.css";
import flowers from "./../../img/flowers.jpg";
import birthdaty from "./../../img/birthday.jpg";
import home from "./../../img/home2.jpg";
import home1 from "./../../img/home21.jpg";


function Gallery() {
    let language = JSON.parse(localStorage.getItem("language"));

    return (
        <section id="gallery" className="gallery">
            <div className="container_gallery">
                <h2>{language === 'uk' ? 'Галерея' : 'Gallery'}</h2>
                <div className="gallery-grid">
                    <img src={flowers} alt="Фото 1" />
                    <img src={birthdaty} alt="Фото 2" />
                    <img src={home} alt="Фото 3" />
                    <img src={home1} alt="Фото 4" />
                </div>
            </div>
        </section>
    );
}

export default Gallery;
