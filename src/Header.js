import React from "react";
import { Nav } from "react-bootstrap";
import { useCookies } from "react-cookie";
import { Link, withRouter } from "react-router-dom";

function Header() {
  const [cookie, setCookie, removeCookie] = useCookies();
  const removeC = () => {
    removeCookie("user");
  };

  return (
    <div className="d-flex justify-content-center">
      <Nav
        fill
        className="bg-light w-50"
        variant="tabs"
        defaultActiveKey="/home"
        as="ul"
      >
        {/* <Nav.Item as="li">
          <Nav.Link>
            <Link to="/home">Home</Link>
          </Nav.Link>
        </Nav.Item> */}
        <Nav.Item as="li">
          <Nav.Link href="/">
            <Link to="/">Home</Link>
          </Nav.Link>
        </Nav.Item>
        {cookie.company == undefined ? (
          <>
            <Nav.Item as="li">
              <Nav.Link eventKey="link-2">
                <Link to="/login">Log In</Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link eventKey="link-3">
                <Link to="/register">Register</Link>
              </Nav.Link>
            </Nav.Item>
          </>
        ) : null}
        <Nav.Item as="li">
          <Nav.Link eventKey="link-4">
            <Link to="/logout">Log Out</Link>
            {/* <button onClick={removeC}>logout</button> */}
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default withRouter(Header);
