import React from 'react';
import "./style.css";

function Footer() {
    let language = JSON.parse(localStorage.getItem("language"));

    return (
        <footer className="footer">
            <div className="container">    
                <p>&copy;{language === 'uk' ? '2024 Місце для вашого відпочинку. Всі права захищені.' : '2024 A place for your rest. All rights reserved.'} </p>
            </div>
        </footer>
    );
}

export default Footer;
