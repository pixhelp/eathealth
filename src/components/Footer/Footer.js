import styled from "styled-components";

const FooterContainer = styled.footer`
    background-color: #1e293b;
    padding: 1rem 2rem;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Footer = () => {
    return (
        <FooterContainer>
            <p>© 2019 Bootstrapious All rights reserved.</p>
        </FooterContainer>
    )
}

export default Footer;
