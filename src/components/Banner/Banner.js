import bannerImg from "../../assets/banner-img.jpeg";
import {BannerContainer} from "../Banner/Banner.styles";

const Banner = () => {
    return (
        <BannerContainer className="h-80 overflow-hidden flex flex-col justify-center">
            <img className="w-full" src={bannerImg} alt="image bannière"/>
        </BannerContainer>
    )
}

export default Banner;