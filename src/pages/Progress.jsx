import React from "react";
import CompletedComp from "../components/progress/Completed";
import ProgressCoursesComp from "../components/progress/Courses";
import NotesComp from "../components/progress/Notes";
import ProgressListComp from "../components/progress/ProgressList";
import UserProgressComp from "../components/progress/UserProgress";
import WatchedComp from "../components/progress/Watched";

const ProgressPage = () => {
  return (
    <>
      <UserProgressComp />
      <ProgressCoursesComp />
      <NotesComp />
      <ProgressListComp />
      <WatchedComp />
      <CompletedComp />
    </>
  );
};

export default ProgressPage;
