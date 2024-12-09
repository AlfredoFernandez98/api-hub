import Container from "../components/Container";
import styled from "styled-components";

// Styled-components for table design
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
        This React application documents an API designed for users to retrieve and compare loan offers across various banks. The API integrates multiple banks to provide real-time data on loans, catering specifically to personal loans and other financial products. Users can filter loans by criteria such as type, interest rates, and eligibility requirements.
      </p>

      {/* API Endpoints Table */}
      <Table>
        <thead>
          <TableRow>
            <TableHeader>Method</TableHeader>
            <TableHeader>URL</TableHeader>
            <TableHeader>Request Body</TableHeader>
            <TableHeader>Response</TableHeader>
            <TableHeader>Error Example</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {/* Documented endpoint examples */}
          <TableRow>
            <TableCell>GET</TableCell>
            <TableCell>/api/loan/offers/{'{requestid}'}</TableCell>
            <TableCell>None</TableCell>
            <TableCell>
              {`{
  "loanOffers": [
    {
      "bankName": "Fake Bank",
      "interestRate": 3.5,
      "loanType": "HOUSING_LOAN",
      "loanAmount": 200000,
      "duration": 120
    }
  ]
}`}
            </TableCell>
            <TableCell>{`{ "status": 404, "msg": "No loan offers found for this request" }`}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>POST</TableCell>
            <TableCell>/api/loan/request</TableCell>
            <TableCell>{`{
  "amount": 200000,
  "duration": 120,
  "loanType": "HOUSING_LOAN"
}`}</TableCell>
            <TableCell>{`{
  "loanOffers": [
    {
      "bankName": "Fake Bank",
      "interestRate": 3.5,
      "loanAmount": 200000,
      "duration": 120
    }
  ]
}`}</TableCell>
            <TableCell>{`{ "status": 400, "msg": "Invalid data" }`}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>POST</TableCell>
            <TableCell>/api/bank</TableCell>
            <TableCell>{`{
  "name": "New Bank",
  "interestRate": 4.0,
  "minLoanAmount": 50000,
  "maxLoanAmount": 300000,
  "loanDuration": 180,
  "loanType": "CAR_LOAN"
}`}</TableCell>
            <TableCell>{`{ "status": 201, "msg": "Bank added successfully" }`}</TableCell>
            <TableCell>{`{ "status": 404, "msg": "Field ‘xxx’ is required" }`}</TableCell>
          </TableRow>
        </tbody>
      </Table>
    </Container>
  );
}
