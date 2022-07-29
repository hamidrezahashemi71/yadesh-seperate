import React from "react";
import AdvantagesComp from "../components/forbusiness/Advantages";
import BannerComp from "../components/forbusiness/Banner";
import FaqComp from "../components/forbusiness/Faq";
import ForBusinessHeroComp from "../components/forbusiness/Hero";
import TeachersComp from "../components/forbusiness/Teachers";
import TestimonialsComp from "../components/forbusiness/Testimonials";

const ForBusinessPage = () => {
  return (
    <>
      <ForBusinessHeroComp />
      <TeachersComp />
      <TestimonialsComp />
      <AdvantagesComp />
      <FaqComp />
      <BannerComp />
    </>
  );
};

export default ForBusinessPage;
