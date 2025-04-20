import styled from "styled-components";

export const HeaderContainer = styled.header`
    background-color: ${props => props.bgColor || '#27ae60'};
    padding: 1.5rem 2rem;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const LogoImage = styled.img`
    height: 40px;
    width: 40px;
    margin-right: 10px;
`;