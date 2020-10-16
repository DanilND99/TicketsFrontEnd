import React from 'react';
import styled from 'styled-components';
import TicketContainer from './TicketContainer';
import Ticket from './Ticket';
const StyledSection = styled.section`
    background-color: gray;
    border: solid 5px white;
    min-height: 100vh;
`;
const Container = styled.section`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    
`;
const TitleP = styled.div`
    color: white;
    font-size: 60px;
    text-align: center;
`;
const Board = () => {
    return (
        <StyledSection>
            <TitleP>Ticket Board</TitleP>
            <Container>
                <TicketContainer titulo="To Do">
                    <Ticket title="Constancia" sDate="15/10/2020" inCharge="None"/>
                    <Ticket title="Baja de materia" sDate="15/10/2020" inCharge="None"/>
                </TicketContainer>
                <TicketContainer titulo="In Progress">
                    <Ticket title="Constancia" sDate="15/10/2020" inCharge="Yessica"/>
                </TicketContainer>
                <TicketContainer titulo="Done">
                    <Ticket title="Constancia" sDate="15/10/2020" inCharge="Alex"/>
                </TicketContainer>
            </Container> 
        </StyledSection>
    )
};
export default Board;