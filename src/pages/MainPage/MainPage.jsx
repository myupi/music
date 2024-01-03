import tracksList from "../../assets/tracksList";
import style from "./mainPage.module.scss";
import Track from "../../components/Track/Track";
import { Input } from "@mui/material";
import { useState } from "react";

const search = (query) => {
  if (!query) return tracksList;
  const toLowerCaseQuery = query.toLowerCase();
  return tracksList.filter(
    (track) =>
      track.title.toLowerCase().includes(toLowerCaseQuery) ||
      track.artists.toLowerCase().includes(toLowerCaseQuery)
  );
};

const MainPage = () => {
  const [tracks, setTracks] = useState(tracksList);

  const Change = (e) => {
    const value = e.target.value

    setTracks(search(value));
  };

  return (
    <div className={style.search}>
      <Input
        className={style.input}
        placeholder="Поиск треков"
        onChange={Change}
      />
      <div className={style.list}>
        {tracks.map((track) => (
          <Track key={track.id} {...track} />
        ))}
      </div>
    </div>
  );
};

export default MainPage;
