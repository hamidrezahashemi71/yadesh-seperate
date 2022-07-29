import React from "react";
import SimilarEpisodesComp from "../components/videoepisode/SimilarEpisodes";
import PlayerComp from "../components/_generalvideo/Player";
import TagsComp from "../components/_generalvideo/Tags";
import TeacherBoxComp from "../components/_generalvideo/TeacherBox";
import TeacherInfoComp from "../components/_generalvideo/TeacherInfo";
import VideoButtonsComp from "../components/_generalvideo/VideoButtons";

const VideoEpisodePage = () => {
  return (
    <>
      <TeacherBoxComp />
      <SimilarEpisodesComp />
      <PlayerComp />
      <TagsComp />
      <TeacherInfoComp />
      <VideoButtonsComp />
    </>
  );
};

export default VideoEpisodePage;
