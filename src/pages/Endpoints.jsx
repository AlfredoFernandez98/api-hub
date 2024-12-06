import Container from "../components/Container";
import styled from "styled-components";

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
`;

const TableHeader = styled.th`
  background-color: #007acc;
  color: white;
  padding: 0.5rem;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f4f4f9;
  }
`;

const TableCell = styled.td`
  padding: 0.5rem;
  text-align: left;
  border: 1px solid #ddd;
`;

export default function Endpoints() {
  return (
    <Container>
      <h1>API Endpoints</h1>
      <p>
        The primary objective of this project is to design and develop an
        efficient online API that will enable users to seamlessly retrieve and
        compare loan offerings from a wide array of banks. This API will
        function as a comprehensive aggregator, integrating data from numerous
        banks, providing users with detailed and up-to-date information on
        available loans. By connecting to multiple banks' systems, the API will
        offer a centralized platform where users can access critical loan
        details such as interest rates, loan amounts, repayment terms, and
        processing fees, all in real time. The API will be designed to cater to
        users looking for personal loans. It will simplify the process of
        finding the most suitable financial products by allowing users to filter
        and search based on specific criteria, such as loan type (personal,
        home, auto, business), loan tenure, interest rates (fixed or variable),
        and eligibility requirements. Users will also be able to view detailed
        terms and conditions for each loan, including any special promotions or
        flexible repayment plans that may be available.
      </p>
      <Table>
        <thead>
          <TableRow>
            <TableHeader>Metode</TableHeader>
            <TableHeader>URL</TableHeader>
            <TableHeader>Request Body</TableHeader>
            <TableHeader>Response</TableHeader>
            <TableHeader>Fejl</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          <TableRow>
            <TableCell>GET</TableCell>
            <TableCell>/api/loans</TableCell>
            <TableCell>Ingen</TableCell>
            <TableCell>[loan, loan, ...]</TableCell>
            <TableCell>{`{ "status": 404, "msg": "Ingen indhold fundet" }`}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>POST</TableCell>
            <TableCell>/api/loans</TableCell>
            <TableCell>{`{ "amount": 10000, "type": "car" }`}</TableCell>
            <TableCell>{`{ "loanId": 1, "status": "approved" }`}</TableCell>
            <TableCell>{`{ "status": 400, "msg": "Invalid data" }`}</TableCell>
          </TableRow>
        </tbody>
      </Table>
    </Container>
  );
}
