import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {userSelect} from "../state/Slice";
import AboutComp from "../components/home/About";
import CustomersComp from "../components/home/Customers";
import EnterpriseComp from "../components/home/Enterprise";
import HomeHeroComp from "../components/home/Hero";
import HomeHeroLoggedComp from "../components/home/HeroLogged";
import KeepLearningComp from "../components/home/KeepLearning";
import MostViewedComp from "../components/home/MostViewed";
import MyPopularLessonsComp from "../components/home/MyPopularLessons";
import PopularCoursesComp from "../components/home/PopularCourses";
import PopularLessonsComp from "../components/home/PopularLessons";

const HomePage = () => {
  const currentUser = useSelector(userSelect);
  const dispatch = useDispatch();

  return currentUser !== null ? (
    <>
      <HomeHeroLoggedComp />
      <PopularCoursesComp />
      <AboutComp />
      <MostViewedComp />
      <CustomersComp />
      <EnterpriseComp />
    </>
  ) : (
    <>
      <HomeHeroComp />
      <KeepLearningComp />
      <MostViewedComp />
      <PopularLessonsComp />
      <MyPopularLessonsComp />
    </>
  );
};

export default HomePage;
