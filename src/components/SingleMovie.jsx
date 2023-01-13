import { Component } from "react";
import { Button } from "react-bootstrap";

class SingleMovie extends Component {
  // let apiUrl = process.env.REACT_APP_BE_URL;

  render() {
    return (
      <div className="col-md-2">
        <img
          className="movie-cover"
          src={this.props.currentMovieObj.poster}
          alt={this.props.currentMovieObj.title}
        />
        <a
          download
          href={`${process.env.REACT_APP_BE_URL}/medias/${this.props.currentMovieObj.imdbID}/pdf`}
        >
          <Button>pdf</Button>
        </a>
      </div>
    );
  }
}

export default SingleMovie;
