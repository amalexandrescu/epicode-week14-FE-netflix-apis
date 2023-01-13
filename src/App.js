import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Component } from "react";
import CustomNavbar from "./components/CustomNavbar";
import { Container } from "react-bootstrap";
import ContentPresentation from "./components/ContentPresentation";
import MovieGallery from "./components/MovieGallery";
import MyFooter from "./components/MyFooter";

class App extends Component {
  state = {
    movieTitiles: [
      "harry+potter",
      "pirates+of+the+caribbean",
      "lord+of+the+rings",
    ],
  };

  render() {
    return (
      <div>
        <CustomNavbar />
        <Container fluid>
          <ContentPresentation />
          <MovieGallery title="Trending Now" searchQuery="harry+potter" />
          <MovieGallery
            title="Watch It Again"
            searchQuery="pirates+of+the+caribbean"
          />
          <MovieGallery title="New Releases" searchQuery="lord+of+the+rings" />
        </Container>
        <MyFooter />
      </div>
    );
  }
}

export default App;
