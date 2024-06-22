import React from "react";
import ButtonContainer from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className="grid-flow-col ">
      <ButtonContainer />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
