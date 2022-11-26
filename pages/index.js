import React from "react";
import config from "../config.json";
import Menu from "../src/components/Menu";
import Timeline from "../src/components/Timeline";
import Header from "../src/components/Header";
import { videoService } from "../src/services/videoService";
// import { createClient } from "@supabase/supabase-js";

const PROJECT_URL = "https://pjezbcwjdfzwpvejicfu.supabase.co";
const PUBLIC_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBqZXpiY3dqZGZ6d3B2ZWppY2Z1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgzOTg0MzEsImV4cCI6MTk4Mzk3NDQzMX0.7ejCFpdEa8Ck_FUNvVAz2H5VuNDhQfJMUCt_XdndVQE";
// const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

function HomePage() {
  const service = videoService();
  const [valorDoFiltro, setValorDoFiltro] = React.useState("");
  const [playlist, setPlaylist] = React.useState({ jogos: [] });

  // React.useEffect(() => {
  //   service.getAllVideos().then((dados) => {
  //     let novasPlaylists = { ...playlist };
  //     dados.data.forEach((video) => {
  //       if (!novasPlaylists[video.playlist]) {
  //         novasPlaylists[video.playlist] = [];
  //       }
  //       novasPlaylists[video.playlist].push(video);
  //     });
  //     setPlaylist(novasPlaylists);
  //   });
  // }, []);

  // console.log(config.playlists);
  // console.log(playlist);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
        <Menu
          valorDoFiltro={valorDoFiltro}
          setValorDoFiltro={setValorDoFiltro}
        />
        <Header />
        <Timeline searchValue={valorDoFiltro} playlists={config.playlists} />
      </div>
    </>
  );
}

export default HomePage;
