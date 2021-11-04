import React from "react"
import {Form, Container, Button} from 'react-bootstrap'
import {useState} from 'react'


const Registration = ({history}) =>{
    const [first_name, setFirst] = useState('')
    const [last_name, setLast] = useState('')
     const [email, setEmail] = useState('')
     const [password, setPassword] = useState('')
    //  Axios.defaults.withCredentials = true;

     const handleSubmit = async(e) =>{
          e.preventDefault()

        //   Axios.post("http://localhost:3001/users/register",{
        //       first_name: first,
        //       last_name: last,
        //       email:email,
        //       password:password
        //     }).then((response)=>{
        //         console.log(response)
        //     })
          try {
            let response = await fetch('http://localhost:3001/users/register', {
                method: 'POST',
                body: JSON.stringify({first_name, last_name, email, password}),
                headers: {
                    'Content-type': 'application/json',
                //     Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgyY2YxMTQ1N2I2NTdlMzAzZTIxMTEiLCJpYXQiOjE2MzU5NjI3MzQsImV4cCI6MTYzNjU2NzUzNH0.ID-LPRECy1kUb-FbnL19zJNKmjM7PKZ9vKgfEESSJGM"
                }
            })
            if (response.ok) {
               
                alert('registration was successful!')
                history.goBack("/")
                
            } else {
                console.log('error')
                alert('something went wrong')
            }
        } catch (error) {
            console.log('error')
        }
    }
     
     
    return(
        <Container className="new-blog-container">
        <Form className="mt-5">
        <Form.Label>first_name</Form.Label>
            <Form.Control type="text" size="lg" placeholder="First_name" value={first_name} onChange={(e)=>{setFirst(e.target.value)}}/>
            <Form.Label>last_name</Form.Label>
            <Form.Control type="text" size="lg" placeholder="Last_name" value={last_name} onChange={(e) => {setLast(e.target.value)}} />
         
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" size="lg" placeholder="Email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" size="lg" placeholder="password" value={password} onChange={(e) => {setPassword(e.target.value)}} />
         
          
         
          <Form.Group className="d-flex mt-3 justify-content-end">
            <Button type="reset" size="lg" variant="outline-dark">
              Reset
            </Button>
            <Button
              type="submit"
              size="lg"
              variant="dark"
              onClick={handleSubmit}
              style={{ marginLeft: "1em" }}
            >
              Submit
            </Button>
          </Form.Group>
        </Form>
      </Container>
    )
}

export default Registration