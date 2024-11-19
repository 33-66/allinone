import React from "react";
import styled from "styled-components";

const Badge = styled.span`
  padding: 0.3rem 0.8rem;
  border-radius: 0.3rem;
  font-size: 0.8rem;
  font-weight: 500;
  color: #ffffff;
  background-color: ${({ status }) => {
    switch (status) {
      case "Completed":
        return "#51cf66";
      case "Processing":
        return "#845ef7";
      case "Rejected":
        return "#ff6b6b";
      default:
        return "#adb5bd";
    }
  }};
`;

const StatusBadge = ({ children, status }) => {
  return <Badge status={status}>{children}</Badge>;
};

export default StatusBadge;
