import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const Inventory = () => {

    const handleAddProduct = () => {
        const product = {};
        fetch('http://localhost:5000/addProduct', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(product)
        })
    }

    return (
        <div style={{ marginLeft: '40%' }}>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control style={{ width: '300px' }} type="text" placeholder="Name" />
                </Form.Group>

                <Form.Group>
                    <Form.Label type="text" placeholder="Price">price</Form.Label>
                    <Form.Control style={{ width: '300px' }} type="text" placeholder="Price" />
                </Form.Group>

                <Form.Group type="text">
                    <Form.Label>Quantity</Form.Label>
                    <Form.Control style={{ width: '300px' }} type="text" placeholder="Quantity" />
                </Form.Group>

                <Form.Group>
                    <Form.File id="exampleFormControlFile1" label="add image file(JPG, PNG)" />
                </Form.Group>

                <Button style={{ marginLeft: '100px', marginBottom: '10px' }} variant="primary" type="submit">
                    Submit
  </Button>
            </Form>


            <Button style={{ marginLeft: '100px' }} variant="warning" onClick={handleAddProduct}>ADD PRODUCT</Button>
        </div>
    );
};

export default Inventory;