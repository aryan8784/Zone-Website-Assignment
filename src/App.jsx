import "./App.css";
import HeroSection from "./Components/HeroSection";
import Navbarr from "./Components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import ThirdSec from "./Components/ThirdSec";
import FourthSec from "./Components/FourthSec";
import CardsSec from "./Components/CardsSec";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import CardsHeadingSec from "./Components/CardsHeadingSec";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <div>
        <Navbarr />
        <HeroSection />
        <ThirdSec />
        <FourthSec />
        <CardsHeadingSec />
        <div className="Cardflex">
          <CardsSec
            title="STANDARD $ 59"
            button="Chosose Pakage"
            imgUrl="https://zone-ui.vercel.app/assets/images/cover/cover_12.jpg"
          />
          <CardsSec
            title="PLUS $ 89"
            button="Chosose Pakage"
            imgUrl="https://zone-ui.vercel.app/assets/images/home/home_hero.png"
          />
          <CardsSec
            title="EXTENDED $ 39"
            button="Chosose Pakage"
            imgUrl="https://zone-ui.vercel.app/assets/images/travel/travel_post_hero.jpg"
          />
        </div>

        <Footer/>
       
      </div>
    </>
  );
}

export default App;
