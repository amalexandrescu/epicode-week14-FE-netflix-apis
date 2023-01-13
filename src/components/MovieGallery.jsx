import { Component } from "react";
import CarouselManager from "./CarouselManager";

class MovieGallery extends Component {
  render() {
    return (
      <div className="m-2">
        <h5 className="text-light my-2">{this.props.title}</h5>
        <CarouselManager searchQuery={this.props.searchQuery} />
      </div>
    );
  }
}

export default MovieGallery;
