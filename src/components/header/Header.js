import "./style.css";

const Header = () => {
    let language = JSON.parse(localStorage.getItem("language"));

    return (
        <header className="header">
            <div className="header__wrapper">
                <h1 className="header__title">
                    <strong>
                    {language === 'uk' ? 'Відпочинок в' : 'Rest in'}
                        <br/><em>EdenGarden</em>
                    </strong>
                </h1>
                <div className="header__text">
                    <p></p>
                </div>
                <a href="/contacts" className="btn">
                {language === 'uk' ? 'Контакти' : 'Contacts'}     
                </a>
            </div>
        </header>
    );
}

export default Header;