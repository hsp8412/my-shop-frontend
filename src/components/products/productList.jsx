import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ProductCard from "./productCard";

const ProductList = ({ display }) => {
  return (
    <Container>
      {display.map((row, index) => (
        <Row key={index} className="mt-4 mb-4">
          {row.map((product) => (
            <Col
              key={product.id}
              className="d-flex justify-content-center"
              md="4"
              xs="12"
            >
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
      ))}
    </Container>
  );
};

export default ProductList;
