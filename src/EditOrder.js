import axios from "axios";
import React from "react";
import { Button, Form } from "react-bootstrap";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

function EditOrder() {
  const { id } = useParams();
  const [orderDetails, setOrderDetails] = React.useState({});
  //   console.log(id);

  React.useEffect(() => {
    axios
      .get("http://localhost:8080/api/edit_order", {
        params: {
          id: id,
        },
      })
      .then((resp) => {
        setOrderDetails(resp.data);
      });
  }, []);

  const updateOrder = () => {
    console.log("object");
  };

  const { to_company, to_address, to_pin } = orderDetails;

  return (
    <div>
      <h1>Edit the Order</h1>
      <hr />
      <Form>
        <Form.Group className="mb-3" controlId="formBasictext">
          <Form.Label>To Company</Form.Label>
          <Form.Control
            value={to_company}
            type="text"
            placeholder="Enter New Company"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasictext">
          <Form.Label>To Address</Form.Label>
          <Form.Control
            value={to_address}
            type="text"
            placeholder="Enter Address"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasictext">
          <Form.Label>To Pin</Form.Label>
          <Form.Control
            value={to_pin}
            type="text"
            placeholder="Enter Pin code"
          />
        </Form.Group>

        <Button onClick={updateOrder} variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default EditOrder;
