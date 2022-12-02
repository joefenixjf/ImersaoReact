import { createClient } from "@supabase/supabase-js";

const PROJECT_URL = "https://pjezbcwjdfzwpvejicfu.supabase.co";
const PUBLIC_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBqZXpiY3dqZGZ6d3B2ZWppY2Z1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgzOTg0MzEsImV4cCI6MTk4Mzk3NDQzMX0.7ejCFpdEa8Ck_FUNvVAz2H5VuNDhQfJMUCt_XdndVQE";
const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

// Função usada para subir os dados do config.json para o banco de dados
function configToDatabase() {
  const nomePlaylist = Object.keys(config.playlists);
  const novoConfig = nomePlaylist.map((playlist, ind) =>
    config.playlists[playlist].map((i) => {
      return {
        title: i.title,
        url: i.url,
        thumb: i.thumb,
        playlist: Object.keys(config.playlists)[ind],
      };
    })
  );

  const sobeVideo = (objetoVideo) => {
    supabase
      .from("video")
      .insert(objetoVideo)
      .then((oqueveio) => {
        console.log(oqueveio);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  novoConfig.map((arr) => arr.map((i) => sobeVideo(i)));
}

export default configToDatabase();
