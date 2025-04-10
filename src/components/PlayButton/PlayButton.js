import "./PlayButton.scss";
import Tooltip from "@mui/material/Tooltip";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import { useState } from "react";

const PlayButton = () => {
  const [playing, setPlaying] = useState(false);

  const [scaled, setScaled] = useState(false);

  const togglePlaying = () => {
    setPlaying(!playing);
  };

  return (
    <div>
      <button
        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
            transition-all duration-300 
                ${playing ? "invisible" : "visible"} ${
          scaled ? "scale-150" : "scale-100"
        }`}
        onClick={() => togglePlaying()}
        onMouseEnter={() => setScaled(true)}
        onMouseLeave={() => setScaled(false)}
      >
        <Tooltip title="Play" placement="top">
          <PlayCircleFilledIcon />
        </Tooltip>
      </button>

      <button
        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                left-0 top-0 transition-all duration-300 
                    ${playing ? "visible" : "invisible"} ${
          scaled ? "scale-150" : "scale-100"
        }`}
        onClick={() => togglePlaying()}
        onMouseEnter={() => setScaled(true)}
        onMouseLeave={() => setScaled(false)}
      >
        <Tooltip title="Pause" placement="top">
          <PauseCircleIcon className="" />
        </Tooltip>
      </button>
    </div>
  );
};

export default PlayButton;
