import React from "react";
import { withRouter, useHistory } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { Form, Button } from "react-bootstrap";

function Home() {
  React.useEffect(() => {
    if (cookies.company == undefined) {
      history.push("/login");
    } else {
      callForData();
    }
  }, []);

  let initialVal;
  const callForData = () => {
    const config = {
      method: "post",
      url: "http://localhost:8012/api/getOrder.php",
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      data: {
        id: cookies.id,
      },
    };
    axios.request(config).then((resp) => {
      // console.log(resp.data);
      initialVal = resp.data;
      setUserDetails(initialVal);
    });
  };

  const handleSubmit = () => {
    alert(JSON.stringify(userDetails));
    axios
      .post("http://localhost:8012/api/updateOrder.php", {
        userDetails: userDetails,
        id: cookies.id,
      })
      .then((resp) => {
        if (resp.data.status === "OK") {
          alert(resp.data.userId);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  let history = useHistory();

  const [cookies] = useCookies();

  const [userDetails, setUserDetails] = React.useState({});
  console.log(cookies.id);
  return (
    <div>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Company</Form.Label>
          <Form.Control
            value={userDetails.company}
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
            value={userDetails.address}
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
            value={userDetails.email}
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
            value={userDetails.password}
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
    </div>
  );
}

export default withRouter(Home);
