import Card from "react-bootstrap/Card";
import "../App.css";

function FourthSec() {
  return (
    <Card className="bg-dark text-white mb-5">
      <div className="FourthSecImage"></div>
      <Card.ImgOverlay>
        <Card.Title className="BlurPara text-center mt-5">
          PROFESSIONAL KIT
        </Card.Title>
        <h1 className="head text-center mb-3">For Designer</h1>
        <div className="head text-center">
          <button className="btn btn-dark mb-2 bton">Figma WorkSpace </button>
        </div>
      </Card.ImgOverlay>
    </Card>
  );
}

export default FourthSec;
