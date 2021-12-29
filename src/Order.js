import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { useHistory } from "react-router-dom";

function Order() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/orders").then((resp) => {
      console.log(resp.data);
      setOrders(resp.data);
    });
  }, []);

  let history = useHistory();

  const handleClick = (id) => {
    history.push("/edit_order/" + id);
  };

  return (
    <div>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Id</th>
            <th>To Company</th>
            <th>Address</th>
            <th>Pin Code</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => {
            return (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.to_company}</td>
                <td>{order.to_address}</td>
                <td>{order.to_pin}</td>
                <td>
                  {" "}
                  <Button onClick={() => handleClick(order.id)}>
                    Edit
                  </Button>{" "}
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default Order;
