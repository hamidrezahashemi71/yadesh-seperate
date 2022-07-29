import React from "react";
import ProfileCoursesComp from "../components/profile/Courses";
import FavoritesComp from "../components/profile/Favorites";
import ProfileHeroComp from "../components/profile/Hero";

const ProfilePage = () => {
  return (
    <>
      <ProfileHeroComp />
      <FavoritesComp />
      <ProfileCoursesComp />
    </>
  );
};

export default ProfilePage;
