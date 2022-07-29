import React from "react";
import AboutHeroCompo from "../components/about/Hero";
import VisionComp from "../components/about/Vision";
import IdentityComp from "../components/about/Identity";
import MissionComp from "../components/about/Mission";
import ContactInfoComp from "../components/about/ContactInfo";
import CallSupportComp from "../components/about/CallSupport";

const AboutPage = () => {
  return (
    <>
      <AboutHeroCompo />
      <VisionComp />
      <IdentityComp />
      <MissionComp />
      <ContactInfoComp />
      <CallSupportComp />
    </>
  );
};

export default AboutPage;
