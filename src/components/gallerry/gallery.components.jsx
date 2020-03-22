import React from "react";
import ImageGallery from "react-image-gallery";

import "./gallery.stylles.scss";

const images = [
  {
    original: "/img/slider_single_tour/1_medium.jpg",
    thumbnail: "/img/slider_single_tour/1_medium.jpg"
  },
  {
    original: "/img/slider_single_tour/2_medium.jpg",
    thumbnail: "/img/slider_single_tour/2_medium.jpg"
  },
  {
    original: "/img/slider_single_tour/3_medium.jpg",
    thumbnail: "/img/slider_single_tour/3_medium.jpg"
  },
  {
    original: "/img/slider_single_tour/4_medium.jpg",
    thumbnail: "/img/slider_single_tour/4_medium.jpg"
  },
  {
    original: "/img/slider_single_tour/5_medium.jpg",
    thumbnail: "/img/slider_single_tour/5_medium.jpg"
  },
  {
    original: "/img/slider_single_tour/6_medium.jpg",
    thumbnail: "/img/slider_single_tour/6_medium.jpg"
  },
  {
    original: "/img/slider_single_tour/7_medium.jpg",
    thumbnail: "/img/slider_single_tour/7_medium.jpg"
  },
  {
    original: "/img/slider_single_tour/8_medium.jpg",
    thumbnail: "/img/slider_single_tour/8_medium.jpg"
  },
  {
    original: "/img/slider_single_tour/9_medium.jpg",
    thumbnail: "/img/slider_single_tour/9_medium.jpg"
  }
];

class Gallery extends React.Component {
  constructor() {
    super();
    this.state = {
      showIndex: false,
      showBullets: true,
      infinite: true,
      showThumbnails: true,
      showFullscreenButton: true,
      showGalleryFullscreenButton: true,
      showPlayButton: true,
      showGalleryPlayButton: true,
      showNav: false,
      isRTL: false,
      slideDuration: 450,
      slideInterval: 2000,
      slideOnThumbnailOver: false,
      thumbnailPosition: "bottom",
      showVideo: {}
    };
  }
  render() {
    return (
      <div id="Img_carousel">
        <ImageGallery {...this.state} items={images} />
      </div>
    );
  }
}

export default Gallery;
