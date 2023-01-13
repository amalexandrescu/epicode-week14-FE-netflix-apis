import { Button } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";

const ContentPresentation = () => {
  return (
    <div className="genre-details">
      <div className="d-flex">
        <h3 className="text-light mr-5">TV Shows</h3>
        <Button
          variant="outline-light"
          className="buttons-from-presentation-content"
        >
          Genres
          <Icon.CaretDownFill />
        </Button>
      </div>
      <div className="btn-group me-2">
        <Button
          variant="outline-secondary"
          className="buttons-from-presentation-content"
        >
          <Icon.TextLeft />
        </Button>
        <Button
          variant="outline-secondary"
          className="buttons-from-presentation-content"
        >
          <Icon.Command />
        </Button>
      </div>
    </div>
  );
};

export default ContentPresentation;
