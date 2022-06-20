import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ProductCard from "./productCard";

const ProductList = ({ display }) => {
  return (
    <Container className="mt-sm-3">
      {display.map((row, index) => (
        <Row key={index} className="mt-md-4 mb-md-4">
          {row.map((product) => (
            <Col
              key={product.uuid}
              className="d-flex justify-content-center mt-4"
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
