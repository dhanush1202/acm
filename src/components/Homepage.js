import React from "react";
import "../styles/Homepage.css"
import Intropage from "./Intropage";
import Vision from "./Vision";
import Testimonial from './Testimonial';
import MembershipInfo from './MembershipInfo';
import Footer from './Footer';
import Counter from './Counter';



export default function Homepage() {
  return (
    <div className="all-comp">
    <Intropage/>
    <div id="visioncomp">
    <Vision />
    </div>
    <Counter/>
    <MembershipInfo />
    <Testimonial />
    <Footer />

    
    
    </div>
  );
}
