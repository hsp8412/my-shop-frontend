import React from "react";
import _ from "lodash";
import { Pagination } from "react-bootstrap";

const ProductPagination = ({ numOfPages, active, setActive }) => {
  const pages = _.range(1, numOfPages + 1);
  return pages.length > 1 ? (
    <Pagination className="mt-3 mt-md-0">
      {pages.map((page) => (
        <Pagination.Item
          key={page}
          active={page === active}
          onClick={() => {
            setActive(page);
          }}
        >
          {page}
        </Pagination.Item>
      ))}
    </Pagination>
  ) : null;
};

export default ProductPagination;
