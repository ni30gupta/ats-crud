import React from "react";
import { Button } from "react-bootstrap";
import { useCookies } from "react-cookie";

function Logout() {
  const [cookies, setCookies, removeCookie] = useCookies();
  //   let history = React.useHistory();

  React.useEffect(() => {
    removeCookie("company");
    console.log("object");
    //     history.push("/");
  }, []);

  return <div></div>;
}

export default Logout;
