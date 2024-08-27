import Header from "../../components/header/Header";
import HomeUk from '../../components/homeContent/HomeUk';
import HomeEn from '../../components/homeContent/HomeEn';

const Home = () => {
    
    const getLanguage = () => {
        let language = JSON.parse(localStorage.getItem("language"));
        if(language==='uk')
            return <HomeUk/>;
        else return <HomeEn/>;     
    };
    
    return (      
        <div>
            <Header/>
            {getLanguage()}
        </div>
        
    );
}

export default Home;