import React from "react";
import config from "../config.json";
import Menu from "../src/components/Menu";
import Timeline from "../src/components/Timeline";
import Header from "../src/components/Header";
import { videoService } from "../src/services/videoService";
import { createClient } from "@supabase/supabase-js";
import { removeFavoritos } from "../src/services/removeFavoritos";
import Favoritos from "../src/components/Favoritos";

const PROJECT_URL = "https://pjezbcwjdfzwpvejicfu.supabase.co";
const PUBLIC_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBqZXpiY3dqZGZ6d3B2ZWppY2Z1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgzOTg0MzEsImV4cCI6MTk4Mzk3NDQzMX0.7ejCFpdEa8Ck_FUNvVAz2H5VuNDhQfJMUCt_XdndVQE";
const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

function HomePage() {
  const service = videoService();
  const [valorDoFiltro, setValorDoFiltro] = React.useState("");
  const [playlist, setPlaylist] = React.useState({});

  // React.useEffect(() => {
  //   // função	que busca os dados da supabase e cria as playlists
  //   service.getAllVideos().then((dados) => {
  //     let novasPlaylists = { ...playlist };
  //     dados.data.forEach((video) => {
  //       if (!novasPlaylists[video.playlist]) {
  //         novasPlaylists[video.playlist] = [];
  //       }
  //       novasPlaylists[video.playlist].push(video);
  //     });
  //     setPlaylist(removeFavoritos());
  //   });
  // }, []);

  React.useEffect(() => {
    setPlaylist(removeFavoritos(config.playlists));
  }, []);

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
        <Timeline searchValue={valorDoFiltro} playlists={playlist} />
        <Favoritos canais={config.playlists.favoritos} />
      </div>
    </>
  );
}

export default HomePage;
