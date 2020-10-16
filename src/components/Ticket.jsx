import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
const StyledTicket = styled.div`
    background-color: #89D1FE;
    border: 3px dotted black;
    border-radius: 8%;
    color: black;
    margin: 3px 0px;
    font-size: 16px;
    width: 90%;
    min-height: 10vh;
`;
const Ticket = (props) => {
    const {title,sDate,inCharge} = props;
    return(
        <StyledTicket>
                <p>{title}</p>
                <p>Fecha: {sDate}</p>
                <p>Encargado: {inCharge}</p>
                <Link to="details">Detalles</Link>
        </StyledTicket>
    );
}
export default Ticket;