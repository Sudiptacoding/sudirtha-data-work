import AnimatedSection from "@/components/AnimatedSection/AnimatedSection";
import HeroSection from "@/components/HeroSection/HeroSection";
import Navbar from "@/components/Navbar/Navbar";

import React from "react";

function page() {
  return (
    <div>
      <Navbar />
      <HeroSection></HeroSection>
      <AnimatedSection id="testimonial">Section 1: Testimonial</AnimatedSection>
      <AnimatedSection id="work">Section 2: Work</AnimatedSection>
      <AnimatedSection id="case-study">Section 3: Case Study</AnimatedSection>
      <AnimatedSection id="Process">Section 4: Process</AnimatedSection>
      <AnimatedSection id="book-a-call">Section 5: Book a Call</AnimatedSection>
    </div>
  );
}

export default page;
