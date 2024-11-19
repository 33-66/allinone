import React from "react";
import styled from "styled-components";
import { FaFilter, FaRedoAlt } from "react-icons/fa";

const FilterRowContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
`;

const FilterButton = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  background-color: ${(props) => (props.reset ? "#f8d7da" : "#f1f1f1")};
  color: ${(props) => (props.reset ? "#721c24" : "#333")};
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: ${(props) => (props.reset ? "#f5c6cb" : "#e2e2e2")};
  }
`;

const DropdownButton = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 8px 16px;
  background-color: #f1f1f1;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: #e2e2e2;
  }

  svg {
    font-size: 12px;
  }
`;

const FilterRow = () => {
  return (
    <FilterRowContainer>
      <FilterButton>
        <FaFilter /> Filter By
      </FilterButton>
      <DropdownButton>
        Date <span>▼</span>
      </DropdownButton>
      <DropdownButton>
        Order Type <span>▼</span>
      </DropdownButton>
      <DropdownButton>
        Order Status <span>▼</span>
      </DropdownButton>
      <FilterButton reset>
        <FaRedoAlt /> Reset Filter
      </FilterButton>
    </FilterRowContainer>
  );
};

export default FilterRow;
