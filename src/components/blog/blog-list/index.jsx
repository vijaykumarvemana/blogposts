import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import BlogItem from "../blog-item";
import posts from "../../../data/posts.json";
export default class BlogList extends Component {


  state = {
    posts: []
  }

  async componentDidMount() {
    try {
      const apiUrl = process.env.REACT_APP_BE_URL
      const response = await fetch(`${apiUrl}/blogPosts`);
      const posts = await response.json()
      this.setState({ posts })
      console.log(posts)
    } catch(e) {
      console.log(e);
    }
  }

   
  render() {
    return (
      <Row>
        {this.state.posts.map((post) => (
          <Col md={4} style={{ marginBottom: 50 }}>
            <BlogItem key={post.title} {...post} />
          </Col>
        ))}
      </Row>
    );
  }
}
