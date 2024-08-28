import React from 'react';
import "./style.css";

function Contact() {
    let language = JSON.parse(localStorage.getItem("language"));

    return (
        <section id="contact" className="contact">
            <div className="container_contact">
                <h2> {language === 'uk' ? 'Контакти' : 'Contacts'}</h2>
                <p>{language === 'uk' ? 'Зв`яжіться з нами для бронювання або будь-яких запитань.' : 'Contact us for reservations or any questions.'}</p>
                <p><strong>{language === 'uk' ? 'Телефон' : 'Phone'}:</strong> +38 066 56 31 601</p>
                <p><strong>Email:</strong> infogarden05@gmail.com</p>
            </div>
        </section>
    );
}

export default Contact;
