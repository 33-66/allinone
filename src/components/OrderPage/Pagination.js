import React from "react";
import styled from "styled-components";

const PaginationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;

const Button = styled.button`
  padding: 0.4rem 0.8rem;
  background-color: #ffffff;
  border: 1px solid #dee2e6;
  border-radius: 0.3rem;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

const Pagination = ({ currentPage, totalPages, startIndex, endIndex, totalItems, onPageChange }) => {
  return (
    <PaginationContainer>
      <span>
        Showing {startIndex}-{endIndex} of {totalItems}
      </span>
      <div>
        <Button disabled={currentPage === 1} onClick={() => onPageChange(currentPage - 1)}>
          {"<"}
        </Button>
        <Button disabled={currentPage === totalPages} onClick={() => onPageChange(currentPage + 1)}>
          {">"}
        </Button>
      </div>
    </PaginationContainer>
  );
};

export default Pagination;
