import logo from "./logo.svg";
import "./App.css";
import {
  Navbar,
  Container,
  Nav,
  Form,
  Row,
  Col,
  Button,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { supabase } from "./supabaseClient/supabaseClient";
function App() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [products, setProducts] = useState([]);

  console.log(products);

  async function getProducts() {
    try {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .limit(10);
      if (error) throw error;
      if (data != null) {
        setProducts(data); //[product1 , product2 , product3 ]
      }
    } catch (error) {
      alert(error.message);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <Navbar />
      <Container>
        <Navbar.Brand>Store Products</Navbar.Brand>
        <Nav>
          <Nav.Item>Create by Cooper Codes</Nav.Item>
        </Nav>
      </Container>
      <Container>
        <Row>
          <Col xs={12} md={8}>
            <h3>create Product for Supabase Database </h3>
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              type="text"
              id="name"
              onChange={(e) => setName(e.target.value)}
            />
            <Form.Label>Product Description </Form.Label>
            <Form.Control
              type="text"
              id="description"
              onChange={(e) => setDescription(e.target.value)}
            />
            <br></br>

            <Button>Create Product in Supabase DB</Button>
          </Col>
        </Row>
        <hr></hr>
        <h3>Current database items </h3>
        <Row xs={1} lg={3} className="g-4">
          {products.map((product) => (
            <Col>
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default App;
