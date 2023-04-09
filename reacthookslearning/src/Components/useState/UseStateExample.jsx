import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../useState/style2.css'
function UseStateExample() {
    const [formdata, setformdata] = useState({
        email: "",
        password: ""
    })
    const handlechange = (event)=>{
        const name = event.target.name;
        const value = event.target.value;
        setformdata((prev)=>{
            return {...prev,[name]:value} 
        })
    }
    return (
        <div className='Dividerform'>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name='email' value={formdata.email} onChange={handlechange} />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name='password' value={formdata.password} onChange={handlechange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <p>
                my email is {formdata.email} and my password is {formdata.password}
            </p>
        </div>
    )
}

export default UseStateExample