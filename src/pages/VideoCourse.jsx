import React from "react";
import PlaylistComp from "../components/videocourse/Playlist";
import RelatedCoursesComp from "../components/videocourse/RelatedCourses";
import PlayerComp from "../components/_generalvideo/Player";
import TagsComp from "../components/_generalvideo/Tags";
import TeacherBoxComp from "../components/_generalvideo/TeacherBox";
import TeacherInfoComp from "../components/_generalvideo/TeacherInfo";
import VideoButtonsComp from "../components/_generalvideo/VideoButtons";

const VideoCoursePage = () => {
  return (
    <>
      <TeacherBoxComp />
      <PlaylistComp />
      <PlayerComp />
      <TagsComp />
      <TeacherInfoComp />
      <VideoButtonsComp />
      <RelatedCoursesComp />
    </>
  );
};

export default VideoCoursePage;
