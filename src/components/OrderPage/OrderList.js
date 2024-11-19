import React, { useState } from "react";
import {
  Container,
  Header,
  Filters,
  TableContainer,
  Table,
  TableHeader,
  TableBody,
  FilterButton,
} from "./OrderList.styles";
import StatusBadge from "./StatusBadge";
import Pagination from "./Pagination";
import FilterRow from "./FilterRow";

const mockData =  [
    { id: "00001", name: "Christine Brooks", address: "089 Kutch Green Apt. 448", date: "14 Feb 2019", type: "Electric", status: "Completed" },
    { id: "00002", name: "Rosie Pearson", address: "979 Immanuel Ferry Suite 526", date: "14 Feb 2019", type: "Book", status: "Processing" },
    { id: "00003", name: "Darrell Caldwell", address: "8587 Frida Ports", date: "14 Feb 2019", type: "Medicine", status: "Rejected" },
    { id: "00004", name: "Gilbert Johnston", address: "768 Destiny Lake Suite 600", date: "14 Feb 2019", type: "Mobile", status: "Completed" },
    { id: "00005", name: "Alan Cain", address: "042 Mylene Throughway", date: "14 Feb 2019", type: "Watch", status: "Processing" },
    { id: "00006", name: "Alfred Murray", address: "543 Weimann Mountain", date: "14 Feb 2019", type: "Medicine", status: "Completed" },
    { id: "00007", name: "Maggie Sullivan", address: "New Scottieberg", date: "14 Feb 2019", type: "Watch", status: "Processing" },
    { id: "00008", name: "Rosie Todd", address: "New Jon", date: "14 Feb 2019", type: "Medicine", status: "On Hold" },
    { id: "00009", name: "Dollie Hines", address: "124 Lyla Forge Suite 975", date: "14 Feb 2019", type: "Book", status: "In Transit" },
    { id: "000010", name: "Christine Brooks", address: "089 Kutch Green Apt. 448", date: "14 Feb 2019", type: "Electric", status: "Completed" },
    { id: "000011", name: "Rosie Pearson", address: "979 Immanuel Ferry Suite 526", date: "14 Feb 2019", type: "Book", status: "Processing" },
    { id: "000012", name: "Darrell Caldwell", address: "8587 Frida Ports", date: "14 Feb 2019", type: "Medicine", status: "Rejected" },
    { id: "000013", name: "Gilbert Johnston", address: "768 Destiny Lake Suite 600", date: "14 Feb 2019", type: "Mobile", status: "Completed" },
    { id: "000014", name: "Alan Cain", address: "042 Mylene Throughway", date: "14 Feb 2019", type: "Watch", status: "Processing" },
    { id: "000015", name: "Alfred Murray", address: "543 Weimann Mountain", date: "14 Feb 2019", type: "Medicine", status: "Completed" },
    { id: "000016", name: "Maggie Sullivan", address: "New Scottieberg", date: "14 Feb 2019", type: "Watch", status: "Processing" },
    { id: "000017", name: "Rosie Todd", address: "New Jon", date: "14 Feb 2019", type: "Medicine", status: "On Hold" },
    { id: "000018", name: "Dollie Hines", address: "124 Lyla Forge Suite 975", date: "14 Feb 2019", type: "Book", status: "In Transit" },
  ];

  const OrderList = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 11; // Show 11 rows
  
    // Pagination logic
    const totalItems = mockData.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = mockData.slice(startIndex, endIndex);
  
    return (
      <Container>
        <Header>Order Lists</Header>
        <FilterRow />
        <TableContainer>
          <Table>
            <TableHeader>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Address</th>
                <th>Date</th>
                <th>Type</th>
                <th>Status</th>
              </tr>
            </TableHeader>
            <TableBody>
              {currentItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.address}</td>
                  <td>{item.date}</td>
                  <td>{item.type}</td>
                  <td>
                    <StatusBadge status={item.status}>{item.status}</StatusBadge>
                  </td>
                </tr>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          totalItems={totalItems}
          startIndex={startIndex + 1}
          endIndex={Math.min(endIndex, totalItems)}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </Container>
    );
  };
  
  export default OrderList;
  