import { useState, useEffect, useRef } from 'react';
import { useLocalStorage} from '../../utils/useLocalStorage';

const BtnLanguage = () => {

    const [language, setLanguage] = useLocalStorage('language', 'uk');
    const btnRef = useRef(null);

    useEffect(()=>{
        console.log("Оновлено language:", JSON.parse(localStorage.getItem("language")));
    }, [language])

    const toggleLanguage = () => {
        setLanguage((currentValue) => {
            return currentValue === 'uk' ? 'en' : 'uk';
        });
    };

    const toggleLanguageAndReload = () => {
        toggleLanguage();
        window.location.reload();
    };

    return (

        <button ref={btnRef} className="language-btn" onClick={toggleLanguageAndReload}>
            <p>{language=='uk'? 'en': 'укр' }</p> 
        </button>

    );
};

export default BtnLanguage; 