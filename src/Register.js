import React from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

function Register() {
  const [userDetails, setUserDetails] = React.useState({
    company: "",
    address: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userDetails);
    axios
      .post("http://localhost:8080/api/register", {
        userDetails,
      })
      .then((resp) => {
        if (resp.data.status === "OK") {
          alert("Registered Succesfully");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Company</Form.Label>
          <Form.Control
            onChange={(e) =>
              setUserDetails({ ...userDetails, company: e.target.value })
            }
            type="text"
            placeholder="Enter email"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Address</Form.Label>
          <Form.Control
            onChange={(e) =>
              setUserDetails({ ...userDetails, address: e.target.value })
            }
            type="textArea"
            placeholder="Enter Address"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email </Form.Label>
          <Form.Control
            onChange={(e) =>
              setUserDetails({ ...userDetails, email: e.target.value })
            }
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={(e) =>
              setUserDetails({ ...userDetails, password: e.target.value })
            }
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

export default Register;
