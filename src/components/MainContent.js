import React from "react";
import AlbumCard from "./AlbumCard";
import AlbumList from "./AlbumList";
import GenrePicker from "./GenrePicker"

function MainContent() {
  return <main>
    <GenrePicker />
    <AlbumList />
  </main>;
}

export default MainContent;
