import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import "../App.css";

function HeroSection() {
  return (
    <>
      <div className="bg-body-tertiary mb-5">
        <Container>
          <Row>
            <Col>
              <div className="heroHeading">
                <h1>
                  Create Your Website Today with{" "}
                  <span className="herospan">ZONE</span>{" "}
                </h1>
              </div>
              <div>
                <p>
                  The ZONE is built on top of MUI, a powerful library that
                  provides flexible, customizable, and easy-to-use components.
                </p>
              </div>
              <div>
                <button className="btn btn-dark mb-2">Figma WorkSpace </button>
              </div>
            </Col>
            <Col>
              <Col xs={12} md={12}>
                <Image
                  src="https://zone-ui.vercel.app/assets/images/home/home_hero.png"
                  fluid 
                />
              </Col>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default HeroSection;
