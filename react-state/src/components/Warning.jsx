import React from "react";
import { Alert } from "react-bootstrap";

const Warning = (props) => {
  return (
    <div>
      <Alert variant="danger" className="mt-5 ">
        {props.message}
      </Alert>
    </div>
  );
};

export default Warning;