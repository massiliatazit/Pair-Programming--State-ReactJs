import React from "react";
import { Card, Row } from "react-bootstrap";

class SingleBook extends React.Component {
  state = {
    select: false,
  };
  selected = () => {
    if (this.state.select === false) {
      this.setState({ select: true });
    } else {
      this.setState({ selected: false });
    }
  };
  render() {
    return (
      <div>
        <Row className="align-item-center">
          <Card onClick={() => this.selected()} style={{ width: "18rem" }}>
            <Card.Img variant="top" src={this.props.booklist.img} />
            <Card.Body>
              <Card.Title>{this.props.booklist.title}</Card.Title>
            </Card.Body>
          </Card>
        </Row>
      </div>
    );
  }
}

export default SingleBook;
