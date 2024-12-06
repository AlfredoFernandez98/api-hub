import Container from '../components/Container';
import styled from 'styled-components';

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
