import React from "react";
import "../styles/Homepage.css"
import Intropage from "./Intropage";
import Vision from "./Vision";
import Testimonial from './Testimonial';
import MembershipInfo from './MembershipInfo';
import Footer from './Footer';



export default function Homepage() {
  return (
    <div className="all-comp">
    <Intropage/>
    <Vision />
    <MembershipInfo />
    <Testimonial />
    <Footer />

    
    
    </div>
  );
}
