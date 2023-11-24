import Image from "react-bootstrap/Image";
import "../App.css"

function ThirdSec() {
  return (
    <>
      <div className="bg-body-tertiary container rounded mb-5">
        <Image
        className="p-5"
          src="https://zone-ui.vercel.app/assets/images/home/new_start.png"
          fluid
        />
        <div>
        <h1 className="text-center fs-1 fw-bold">The <span className="ThirdSecspan">ZONE</span> UI Kit</h1>
        </div>
        <div className="pb-5">
          <p className="text-center">
          Modern ui kit to save your time, boost your creativity. Neat and super <br /> stylish layout ready to help with your projects
          </p>
        </div>
      </div>
    </>
  );
}

export default ThirdSec;
