import React from "react";
import '../styles/footer.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import {
  faFacebook,
  faInstagram,
  faGithub,
  faLinkedin,
  faEvernote
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <>
      <div className="foot">
        <footer className="text-center text-lg-start bg-white text-muted">
          <div style={{ background: "rgba(162, 162, 162, 0.8)" }}>
            <section className=" justify-content-bottom p-4 border-bottom border-top">
             <div className="footicons">

              <div className="leftNote">
                Get connected with us on social networks:
              </div>

              <div className="icons">
                <a href="" className="me-4 link-secondary">
                  <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
                <a href="" className="me-4 link-secondary">
                  <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
                <a href="" className="me-4 link-secondary">
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
                <a href="" className="me-4 link-secondary">
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
              </div>
             </div>
            </section>
            <section className="">
              <div className="container text-center text-md-start mt-5">
                <div className="row mt-3">
                  <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                    <h6 className="text-uppercase fw-bold mb-4">
                      <i className="fas fa-gem me-3 text-secondary"></i>Company
                      name
                    </h6>
                    <p>
                      Here you can use rows and columns to organize your footer
                      content. Lorem ipsum dolor sit amet, consectetur
                      adipisicing elit.
                    </p>
                  </div>

                  
                  <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                    <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                    
                    <p>
                    <FontAwesomeIcon icon={faEnvelope} />
                    &nbsp;&nbsp;info@example.com
                    </p>
                    <p>
                      <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon> + 01
                      &nbsp;234 567 88 <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;Murali Mohan,<br/>&nbsp;&nbsp;&nbsp; Faculty co-ordinator,<br/>&nbsp;&nbsp;&nbsp; ACM Student Chapter.
                    </p>

                  </div>
                </div>
              </div>
            </section>

            <div className="text-center p-4">
              Copyright © 2023 by ACM_VNRVJIET. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
