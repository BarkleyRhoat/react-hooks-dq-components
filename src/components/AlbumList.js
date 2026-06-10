import React from "react";
import AlbumCard from "./AlbumCard";
import { albums } from "../data/albums";

function AlbumList() {
  const cardList = albums.map(album => (
    <AlbumCard
      name={album.name}
      image={album.image}
      genre={album.genre}
      key={album.id}
    />
  )
  )
  return (
    <section className="albums">
      {cardList}
    </section>
  );
}

export default AlbumList;
