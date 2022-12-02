export const removeFavoritos = (dados) => {
  // novo objeto para separar as playlists dos favoritos
  let novosDados = {};
  // variavel com as chaves das playlists
  let playlistsKey = Object.keys(dados);
  // remove o Ultimo elemento favoritos da playlistsKey
  playlistsKey = playlistsKey.filter((key) => {
    return "favoritos" !== key;
  });
  // configura objeto (novosDados) sem os favoritos
  playlistsKey.forEach((key) => (novosDados[key] = dados[key]));
  return novosDados;
};
