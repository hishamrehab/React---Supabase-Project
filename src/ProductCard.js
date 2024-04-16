import React from "react";
import { Card, Button, Form } from "react-bootstrap";
import { useState } from "react";
const ProductCard = () => {
  const [editing, setEditing] = useState(false);
  return (
    <Card
      style={{
        width: "20rem",
      }}
    >
      <Card.Body>
        {editing == false ? (
          <>
            <Card.Title>Product Name</Card.Title>
            <Card.Text>Product Description</Card.Text>
            <Button variant="danger">Delete Product </Button>
            <Button variant="secondary" onClick={() => setEditing(true)}>
              Edit Product
            </Button>
          </>
        ) : (
          <>
            <h4>Editing Product</h4>
            <Button size="sm" onClick={() => setEditing(false)}>
              Go Back
            </Button>
            <br></br>
          </>
        )}
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
