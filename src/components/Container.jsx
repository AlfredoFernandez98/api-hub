import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    max-width: 1200px;
    margin: 0 auto;
    @media (max-width: 768px) {
        padding: 1rem;
    }
`;

export default Container;
