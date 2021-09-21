import React, { Component } from "react";
import { Card } from "react-bootstrap";
import BlogAuthor from "../blog-author";
import { Link } from "react-router-dom";
import "./styles.css";
export default class BlogItem extends Component {


  state = {
    authors: []
  }

  async componentDidMount() {
    try {
      const apiUrl = process.env.REACT_APP_BE_URL
      const response = await fetch(`${apiUrl}/authors`);
      const authors = await response.json()
      this.setState({ authors })
      console.log(authors)
    } catch(e) {
      console.log(e);
    }
  }
  render() {
    const { title, cover, author, _id } = this.props;
    return (
      <Link to={`/blogPost/${_id}`} className="blog-link">
        <Card className="blog-card">
          <Card.Img variant="top" src={cover} className="blog-cover" />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
          </Card.Body>
          <Card.Footer>
            <BlogAuthor {...author} />
          </Card.Footer>
        </Card>
      </Link>
    );
  }
}
