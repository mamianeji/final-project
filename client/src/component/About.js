import React from "react";
import "./style/about.css";

function About() {
  return (
    <div>
      <section
        id="about-1"
        className="bg-color-01 wide-60 about-section division"
      >
        <div
          className="container"
          style={{ marginTop: "80px", marginBottom: "20px" }}
        >
          <div className="row d-flex align-items-center">
            <div className="col-md-5 col-lg-6">
              <div className="img-block left-column pc-10 mb-40">
                <img
                  className="img-fluid"
                  src="https://jthemes.net/themes/html/spamagic/files/images/image-01.png"
                  alt="about-image"
                />
              </div>
            </div>

            <div className="col-md-7 col-lg-6">
              <div className="txt-block right-column pc-15 mb-40">
                <h3
                  className="h3-md txt-color-01"
                  style={{
                    color: "#727475",
                    fontSize: "2.1rem",
                    marginBottom: "25px",
                  }}
                >
                  Your Beauty and Success Starts Here
                </h3>

                <p className="txt-color-05" style={{ color: "#808080" }}>
                  Taking care of your body, face, hands, feet, ... It's no
                  longer a luxury! Be yourself and reflect your inner beauty
                  outward; Thanks to our beauty specialists, you will be well in
                  your body. We reserve several areas dedicated to well-being:
                  massage room, manicure area, Spa room, etc.{" "}
                </p>
                <p style={{ color: "#808080" }}>
                  We use the best techniques and the best products so that you
                  have the best care. Always on the lookout for new products,
                  Beauty Center follows the trend of different brands and trains
                  in the latest techniques.
                </p>
              </div>{" "}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
