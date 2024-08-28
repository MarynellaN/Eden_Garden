import React from 'react';
import "./style.css";

function Services() {
    let language = JSON.parse(localStorage.getItem("language"));

    return (
        <section id="services" className="services">
            <div className="container_services">
                <h2>{language === 'uk' ? 'Наші послуги' : 'Our services'}</h2>
                <ul>
                    <li>{language === 'uk' ? 'Оренда будинку' : 'Renting a house'}</li>
                    <li>{language === 'uk' ? 'Оренда альтанки' : 'Gazebo rental'}</li>
                    <li>{language === 'uk' ? 'Оренда кльянів' : 'Renting klyans'}</li>
                    <li>{language === 'uk' ? 'Приготування їжі' : 'Food preparation'}</li>
                </ul>
            </div>
        </section>
    );
}

export default Services;
