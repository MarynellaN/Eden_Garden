import React from 'react';
import "./style.css";

function Gallery() {
    return (
        <section id="gallery" className="gallery">
            <div className="container_gallery">
                <h2>Галерея</h2>
                <div className="gallery-grid">
                    <img src="img/photo1.jpg" alt="Фото 1" />
                    <img src="img/photo2.jpg" alt="Фото 2" />
                    <img src="img/photo3.jpg" alt="Фото 3" />
                    <img src="img/photo4.jpg" alt="Фото 4" />
                </div>
            </div>
        </section>
    );
}

export default Gallery;
