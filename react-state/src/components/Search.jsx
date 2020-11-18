import React from "react";
import { InputGroup, FormControl, Row } from "react-bootstrap";
import BooksList from "./Books";
import SingleBook from "./SingleBook";

class BookSearch extends React.Component {
  state = {
    book: this.props.horrorbook,
  };

  filterbook = (input) => {
    this.setState({
      book: this.props.horrorbook.filter((book) =>
        book.title.toLowerCase().includes(input.toLowerCase())
      ),
    });
  };
  render() {
    return (
      <div>
        <InputGroup size="sm" className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-sm">Small</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
            onChange={(event) => this.filterbook(event.target.value)}
          />
        </InputGroup>
        <Row>
          {this.state.book.map((item) => (
            <SingleBook booklist={item} key={item.asin} />
          ))}
        </Row>
      </div>
    );
  }
}

export default BookSearch;
