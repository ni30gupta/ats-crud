import React from "react";
import { withRouter, useHistory } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import axios from "axios";
import { useCookies } from "react-cookie";

function Login() {
  let history = useHistory();
  const [cookies, setCookies, removeCookie] = useCookies(["user"]);
  const [user, setUser] = React.useState({ email: "", password: "" });

  React.useEffect(() => {
    if (cookies.company != undefined) {
      history.push("/");
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8080/api/login", {
        email: user.email,
        password: user.password,
      })
      .then((resp) => {
        console.log(resp);

        if (resp.data.id) {
          setCookies("company", resp.data.company, {
            // path: "/",
            // expires: new Date("2021-12-21"),
          });
          setCookies("id", resp.data.id);
          console.log(resp.data);
          history.push("/");
        } else {
          console.log("error");
        }
      });
  };
  return (
    <>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Email </Form.Label>
          <Form.Control
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        {/* <Form.Group className="mb-3">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}
        <Button onClick={handleSubmit} variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}

export default withRouter(Login);
