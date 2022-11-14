import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Principal from "./components/Principal";
import Album from "./components/Album";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";

function App() {
  let albumInicial = JSON.parse(localStorage.getItem("album"));
  if (!albumInicial) {
    albumInicial = [];
  }

  useEffect(() => {
    if (albumInicial) {
      localStorage.setItem("album", JSON.stringify(album));
    } else {
      localStorage.setItem("album", JSON.stringify([]));
    }
  }, [albumInicial]);

  const [url, editar] = useState({
    img: "",
  });

  const consultarApi = async () => {
    try {
      const api = await fetch("https://dog.ceo/api/breeds/image/random");
      const resultado = await api.json();
      editar({
        img: resultado.message,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    consultarApi();
  }, []);

  const [album, setAlbum] = useState(albumInicial);

  const borrarImg = (id) => {
    const nuevoAlbum = album.filter((url) => url.id !== id);
    setAlbum(nuevoAlbum);
  };

  return (
    <>
      <Header></Header>
      <Principal
        url={url}
        consultarApi={consultarApi}
        album={album}
        setAlbum={setAlbum}
      ></Principal>
      <Album album={album} borrarImg={borrarImg}></Album>
      <Footer></Footer>
    </>
  );
}

export default App;
