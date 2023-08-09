import React from "react";

function InfoSection() {
  return (
    <div className="info-section pt-120 pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7 col-md-10 col-sm-12">
            <div className="info-title-area">
              <h3>Astrip Travel Agency Inc.</h3>
              <p>
                But I must explain to you how all this mistaken idea of
                denouncing pleasure and praising pain was born and I will give
                you a complete account of the system, and expound the actual
                teachings of the great explorer of the truth, the master-builder
                of human happiness.
              </p>
            </div>
          </div>
        </div>
        <div className="row g-4 justify-content-center">
          <div className="col-lg-4 col-md-6 col-sm-10">
            <div className="info-single">
              <div className="info-icon">
                <i className="bi bi-geo-alt" />
              </div>
              <div className="info-text">
                <h3>Address</h3>
                <p>168/170, Ave 01,Old York Drive Rich Dhaka, Bangladesh</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-10">
            <div className="info-single">
              <div className="info-icon">
                <i className="bx bx-phone-call" />
              </div>
              <div className="info-text">
                <h3>Call Us!</h3>
                <a href="tel:+8801569862560">+88 0156 986 2560</a>
                <a href="tel:+8801761111456">+880176 1111 456</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-10">
            <div className="info-single">
              <div className="info-icon">
                <i className="bx bx-envelope" />
              </div>
              <div className="info-text">
                <h3>Email Info</h3>
                <a href="mailto:info@companyname123.com">
                  info@companyname123.com
                </a>
                <a href="mailto:info@example.com">info@example.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoSection;
