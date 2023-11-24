import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBIcon,
} from "mdb-react-ui-kit";
import "../App.css";

function CardsSec({ title, button, imgUrl }) {
  return (
    <>
      <div>
        <MDBContainer container className="my-5">
          <MDBRow className="">
            <MDBCol md="10">
              <MDBCard className="text-black cardss">
                <MDBIcon
                  fab
                  icon="apple"
                  size="lg"
                  className="px-3 pt-3 pb-2"
                />
                <MDBCardImage
                  src={imgUrl}
                  position="top"
                  alt="Apple Computer"
                />
                <MDBCardBody>
                  <div className="text-center">
                    <MDBCardTitle>{title}</MDBCardTitle>
                    <p className="text-muted mb-4">Apple pro display XDR</p>
                  </div>
                  <div>
                    <div className="d-flex justify-content-between">
                      <span>Pro Display XDR</span>
                      <span>$5,999</span>
                    </div>
                    <div className="d-flex justify-content-between">
                      <span>Pro stand</span>
                      <span>$999</span>
                    </div>
                    <div className="d-flex justify-content-between">
                      <span>Vesa Mount Adapter</span>
                      <span>$199</span>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between total font-weight-bold mt-4">
                    <span>Total</span>
                    <span>$7,197.00</span>
                  </div>
                  <div className="cardbtn">
                    <button className="btn btn-dark py-4">{button}</button>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </>
  );
}

export default CardsSec;
