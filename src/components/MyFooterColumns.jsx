import { Col, Button } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import MyFooterList from "./MyFooterList";
const MyFooterColumn = () => {
  return (
    <div className="d-flex w-100">
      <Col md={3}>
        <ul className="navbar-nav">
          <MyFooterList
            content={
              <div>
                <Icon.Facebook className="mr-2" />
                <Icon.Instagram className="mr-2" />
                <Icon.Twitter className="mr-2" />
                <Icon.Youtube className="mr-2" />
              </div>
            }
          />
          <MyFooterList content="Audio and Subtitles" />
          <MyFooterList content="Media Center" />
          <MyFooterList content="Privacy" />
          <MyFooterList content="Contact Us" />
          <MyFooterList
            content={
              <Button
                variant="outline-secondary"
                className="buttons-from-presentation-content"
              >
                {" "}
                Service Code
              </Button>
            }
          />
          <MyFooterList
            content={
              <div>
                <Icon.CCircle className="mr-1" />
                1997-2021 Netflix Inc
              </div>
            }
          />
        </ul>
      </Col>
      <Col md={3}>
        <ul className="navbar-nav">
          <MyFooterList content="Audio Description" />
          <MyFooterList content="Investor Relations" />
          <MyFooterList content="Legal Notices" />
        </ul>
      </Col>
      <Col md={3}>
        <ul className="navbar-nav">
          <MyFooterList content="Help Center" />
          <MyFooterList content="Jobs" />
          <MyFooterList content="Cookie Preferences" />
        </ul>
      </Col>
      <Col md={3}>
        <ul className="navbar-nav">
          <MyFooterList content="Gift Cards" />
          <MyFooterList content="Terms Of Use" />
          <MyFooterList content="Corporate Information" />
        </ul>
      </Col>
    </div>
  );
};

export default MyFooterColumn;
