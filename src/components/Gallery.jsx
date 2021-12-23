import React from "react";
import "./Gallery.scss";
import { gallery } from "../mock-meals";

const Gallery = () => {
  console.log(gallery);
  return (
    <div className="gallery-container">
      <div className="gallery">
        {gallery.map((img) => (
          <div className="gallery-item" key={img.id}>
            <img src={img.url} className="gallery-image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
