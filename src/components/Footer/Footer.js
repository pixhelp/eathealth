import { FooterContainer } from "./Footer.styles";

const Footer = () => {
    return (
        <FooterContainer>
            <div className="flex flex-row items-center justify-center gap-20 w-full px-5">
                <ul className="p-2">
                    <li>
                        <a href="/about">À propos</a>
                    </li>
                    <li>
                        <a href="/contact">Contact</a>
                    </li>
                    <li>
                        <a href="/blog">Blog</a>
                    </li>
                    <li>
                        <a href="/privacy">Politique de confidentialité</a>
                    </li>
                    <li>
                        <a href="/terms">Conditions d'utilisation</a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href="/facebook">Facebook</a>
                    </li>
                    <li>
                        <a href="/twitter">Twitter</a>
                    </li>
                    <li>
                        <a href="/instagram">Instagram</a>
                    </li>
                    <li>
                        <a href="/linkedin">LinkedIn</a>
                    </li>
                    <li>
                        <a href="/youtube">YouTube</a>
                    </li>
                </ul>
            </div>
            <div className="text-center w-full bg-gray-600 p-2">
                <p>Développé par Ibert françois</p>
            </div>
        </FooterContainer>
    )
}

export default Footer;
