import React from 'react';
import styled from 'styled-components';
const Container = styled.section`
    border: solid 4px black;
    background-color: white;
    margin: 5px;
    color: black;
    width: 100%;
    font-size: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const TicketContainer = (props) => {
    const {titulo, children} = props;
    return (
        <Container>
            <p>{titulo}</p>
            {children}
        </Container>
    )
};
export default TicketContainer;