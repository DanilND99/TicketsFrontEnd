import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
const StyledDetails = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #89D1FE;
    color: black;
    font-size 20px;
`;
const TicketDetails = (props) => {
    const {title,desc,sDate,fDate,up,inCharge} = props;

    return(
        <StyledDetails>
            <p>Titulo: {title}</p>
            <p>Descripcion:<br/> {desc}</p>
            <p>Fecha de inicio: {sDate}</p>
            <p>Fecha de fin: {fDate}</p>
            <p>Levanto el ticket: {up}</p>
            <p>A cargo del ticket: {inCharge}</p>
            <Link to="/">Regresar</Link>
        </StyledDetails>
    )
};
export default TicketDetails;