import React from "react";
import { Pagination } from "react-bootstrap";
import { Link } from "react-router-dom";

const paginate = ({ pages, page, isAdmin = false, keyword = "" }) => {
  return (
    pages > 1 && (
      <Pagination>
        {[...Array(pages).keys()].map((x) => (
          <Link
            to={keyword ? `/search/${keyword}/page/${x + 1}` : `/page/${x + 1}`}
            key={x + 1}
          >
            <Pagination.Item active={x + 1 === page}>{x + 1}</Pagination.Item>
          </Link>
        ))}
      </Pagination>
    )
  );
};

export default paginate;
