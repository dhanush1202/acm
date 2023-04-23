import React from "react";
import "../styles/intropage.css";
import acmimg from "../images/ACMimg.png";
import NavBar from "./NavBar";
import Typewriter from "typewriter-effect";

export default function Intropage() {
  return (
    <div className="intro text-light">
      <NavBar />
      <div className="parent">
        <div className="child1">
            <img src={acmimg} alt="" />
            </div>
        <div className="child2">
            <h2 className="type align-items-center">

        <Typewriter
                onInit={(typewriter) => {
                    typewriter
                    
                    .typeString(
                        "ASSOCIATION FOR COMPUTING MACHINERY STUDENT CHAPTER OF VNRVJIET"
                        )
                        
                        .start();
                    }}
                    />
                    </h2>
              <div className="buttons my-5">
              {/* buttons done */}
                <div className="about">

              <a href="#" className="cta mx-4 my-3">
                <span className="textbut">About Us</span>
                <svg
                  className="svg"
                  width="13px"
                  height="10px"
                  viewBox="0 0 13 10"
                  >
                  <path d="M1,5 L11,5"></path>
                  <polyline points="8 1 12 5 8 9"></polyline>
                </svg>
              </a>
                    </div>
                    <div className="contact">

              <a href="#" className="cta mx-4 my-3">
                <span>Contact us</span>
                <svg width="13px" height="10px" viewBox="0 0 13 10">
                  <path d="M1,5 L11,5"></path>
                  <polyline points="8 1 12 5 8 9"></polyline>
                </svg>
              </a>
                    </div>
            </div>
            <h3 style={{textAlign:"center", marginTop:"2rem"}}>WE RISE BY LIFTING OTHERS</h3>
          
        </div>
      </div>
    </div>
  );
}
