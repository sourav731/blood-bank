import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { SocialMediaIconsReact } from "social-media-icons-react";

const FooterPage = () => {
  return (
    <footer
      className="page-footer font-small pt-2"
      style={{ backgroundColor: "#660000" }}
    >
      <div className="container-fluid text-center text-md-left">
        <div className="row">
          <div className="col-md-6 mt-md-0 mt-3">
            <h5
              className="text-uppercase"
              style={{ color: "#bfbfbf", marginTop: "60px" }}
            >
              College- Jadavpur University
            </h5>
            <h6 className="text-uppercase" style={{ color: "#bfbfbf" }}>
              Hack-n-pitch
            </h6>
            <h6 className="text-uppercase" style={{ color: "#bfbfbf" }}>
              ESummit-2020
            </h6>
          </div>

          <hr className="clearfix w-100 d-md-none pb-3" />

          <div className="col-md-3 mb-md-0 mb-3">
            <h5
              className="text-uppercase"
              style={{ color: "#bfbfbf", marginTop: "60px" }}
            >
              Contact
            </h5>

            <ul className="list-unstyled">
              <li>
                <a href="#!">Our Team</a>
              </li>
              <li>
                <a href="#!">How to use</a>
              </li>
            </ul>
          </div>

          <div className="col-md-3 mb-md-0 mb-3">
            <h5
              className="text-uppercase"
              style={{ color: "#bfbfbf", marginTop: "60px" }}
            >
              Connect
            </h5>
            <div style={{ marginTop: "20px" }}>
              <SocialMediaIconsReact
                icon="facebook"
                url="https://facebook.com/your-facebook-handle"
              />
              &nbsp; &nbsp;
              <SocialMediaIconsReact
                icon="twitter"
                url="https://twitter.com/your-twitter-handle"
              />
              &nbsp; &nbsp;
              <SocialMediaIconsReact
                icon="linkedin"
                url="https://linkedin.com/your-linkedin-handle"
              />
            </div>
          </div>
        </div>
      </div>

      <div
        className="footer-copyright text-center py-3"
        style={{ color: "white" }}
      >
        © 2020 Copyright:
        <a href="https://localhost:3000/home"> example.org</a>
      </div>
    </footer>
  );
};

export default FooterPage;
