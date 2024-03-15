import Dropdown from "react-bootstrap/Dropdown";
import { BsGrid, BsGrid3X3 } from "react-icons/bs";

const HeaderTvShow = function () {
  return (
    <div className="d-flex justify-content-between">
      <div className="d-flex">
        <h2 className="mb-4">TV Shows</h2>
        <div className="btn-group" role="group">
          <Dropdown className="ms-4 mt-1">
            <Dropdown.Toggle
              variant="secondary"
              size="sm"
              className="rounded-0"
              style={{ backgroundColor: "#221f1f" }}
            >
              Genres
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#">Comedy</Dropdown.Item>
              <Dropdown.Item href="#">Drama</Dropdown.Item>
              <Dropdown.Item href="#">Thriller</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
      <div className=" d-flex">
        <div>
          <BsGrid className="icons" />
        </div>
        <div>
          <BsGrid3X3 className="icons" />
        </div>
      </div>
    </div>
  );
};

export default HeaderTvShow;
