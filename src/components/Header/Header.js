import styled from "styled-components";
import logo from "../../assets/nutrition-icon.svg"
import { HeaderContainer,LogoImage } from "./Header.styles";
import { Link } from "react-router-dom";

const Header = ({bgColor}) => {
    return (
        <HeaderContainer bgColor={bgColor}>
            <Link className="flex items-center" to="/">
                <LogoImage src={logo} alt="Logo de MonSite" />
                <h1 className="text-xl">Eathealth</h1>
            </Link>
        </HeaderContainer>
    );
};

export default Header;
