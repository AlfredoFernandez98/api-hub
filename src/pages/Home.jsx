import Container from '../components/Container';
import styled from 'styled-components';
import apiLogo from '../assets/bank-logo.png';

const Image = styled.img`
    witdh: 100%;
    max-width: 300px;
    margin: 1rem 0;
`;

function Home() {
  return (
    <Container>
      <h1>Velkommen til API Hub</h1>
      <p>Dette er startsiden for vores API-dokumentation.</p>
      <Image src={apiLogo} alt="API Logo" />
    </Container>
  );
}

export default Home;
