import React, { Component } from "react";
import { Container } from "react-bootstrap";

export default class Footer extends Component {

  async componentDidMount(){
    try {
      
      const apiUrl = "http://localhost:3001/users"
      const response = await fetch(apiUrl,{
        method: 'GET',
        headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgxNDhjNTdhOWQ5ZDFmMDliZmJhODQiLCJpYXQiOjE2MzU5NTAzODIsImV4cCI6MTYzNjU1NTE4Mn0.yePzBfZGc0qqD4FBvmlIfkh8SdXrwVUqjPR8EekYtjQ"        }
      })
      const users = await response.json()
      
      console.log(users)
    } catch(e) {
      console.log(e);
    }
  }
  
  render() {
    return (
      <footer style={{ paddingTop: 50, paddingBottom: 50 }}>
        <Container>{`${new Date().getFullYear()} - © Strive School | Developed for homework projects.`}</Container>
      </footer>
    );
  }
}
