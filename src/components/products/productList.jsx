import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ProductCard from "./productCard";

const ProductList = ({ display }) => {
  return (
    <Container>
      {display.map((row, index) => (
        <Row key={index}>
          {row.map((product) => (
            <Col className="" md="4">
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
      ))}
    </Container>
  );
};

export default ProductList;
