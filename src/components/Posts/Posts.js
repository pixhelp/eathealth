import { Link } from "react-router-dom";
import {PostContainer} from "./Post.styles";

const Post = ({title, desc, img, altTitle, bgcolorpost, id, slug}) => {
    return (
        <div className="p-0 sm:p-2 h-[500px] flex flex-col sm:mb-5 w-full sm:w-1/2 md:w-1/3">
            <Link className="relative h-full flex flex-col" to={`/post/${slug}`}>
                <PostContainer className="h-full flex flex-col" bgcolorpost={bgcolorpost}>
                    <h2 className ="text-xl text-green text-lg mb-2">{title}</h2>
                    <div className="h-20 w-20 object-cover">
                        <img className="w-full h-full object-cover" src={img} alt={altTitle} />
                    </div>
                    
                    <p className="text-justify mt-2">{desc}</p>
                    <strong class="absolute bottom-6 left-0 right-0">
                        Lire la suite
                    </strong>
                </PostContainer>
            </Link>
        </div>
    );
}

export default Post;