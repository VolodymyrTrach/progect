import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card } from 'react-bootstrap';

function ProductItem({ keyID, post }) {
    return (
        <Card style={{ width: '18rem' }} key={keyID} className="productCart">
            <Card.Img variant="top" src="../../public/logo512.png" />
            <Card.Body>
                <Card.Title>NAME{keyID}</Card.Title>
                <Card.Text>
                    {post}
                </Card.Text>
                <>
                    <Button variant="outline-primary">Buy</Button>{' '}
                    <Button variant="outline-secondary">Add to card</Button>{' '}
                </>
            </Card.Body>
            <Card.Body className="cardPrice">
                <Card.Text >100</Card.Text>
            </Card.Body>

        </Card>
    );
}
export default ProductItem