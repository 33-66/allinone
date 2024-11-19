/* OrderList.styles.js */
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background: #f9f9f9;
  min-height: 100vh;
`;

export const Header = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const TableContainer = styled.div`
  overflow-x: auto;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-height: calc(100vh - 250px); /* Adjust for header and pagination */
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHeader = styled.thead`
  background-color: #f3f4f6;
  text-align: left;
  th {
    padding: 12px;
    font-size: 14px;
    font-weight: 600;
    color: #374151;
    border-bottom: 1px solid #e5e7eb;
  }
`;

export const TableBody = styled.tbody`
  tr {
    height: 60px; /* Ensures rows are evenly spaced */
    border-bottom: 1px solid #e5e7eb;
    &:last-child {
      border-bottom: none;
    }
  }
  td {
    padding: 12px;
    font-size: 14px;
    color: #4b5563;
  }
`;

export const FilterButton = styled.button`
  background: #e5e7eb;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  margin-right: 8px;
  cursor: pointer;
  font-size: 14px;
  &:hover {
    background: #d1d5db;
  }
`;
