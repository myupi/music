import { IconButton } from "@mui/material";
import style from "./track.module.scss";
import { PlayArrow, Pause } from "@mui/icons-material";
import secondsToMMSS from "../../utils/secondsToMMSS";
import { AudioContext } from "../../context/AudioContext";
import { useContext } from "react";
import cn from "classnames"

const Track = (track) => {
  const { id, src, preview, title, artists, duration } = track;

  const { handleToggleAudio, currentTrack, isPlaying } = useContext(AudioContext);

  const isCurrentTrack = currentTrack.id === track.id;

  const time = secondsToMMSS(duration);

  return (
    <div className={cn(style.track, isCurrentTrack && style.playing)}>
      <IconButton
        onClick={() => {
          handleToggleAudio(track);
        }}
      >
        {!isCurrentTrack ? <PlayArrow /> : <Pause />}
      </IconButton>
      <img src={preview} className={style.preview} alt="" />
      <div className={style.credits}>
        <b>{title}</b>
        <p>{artists}</p>
      </div>
      <p>{time}</p>
    </div>
  );
};

export default Track;
