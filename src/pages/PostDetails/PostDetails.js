import { useParams } from "react-router-dom";
import { postData } from "../../data/postData";

const PostDetail = () => {
    const { slug } = useParams();
    const post = postData.find((item) => item.slug === slug);

    if (!post)return <p>rien ici</p>
    return(
        <div className="p-5 flex flex-col items-center">
            <h2 className="text-xl text-green-400 text-bold font-semibold">{post.title}</h2>
            <div className="flex flex-col sm:flex-row mt-1 items-center">
                <img className="w-40 sm:w-full mr-5" src={post.img} alt={post.altTitle}/>
                <p className="text-left">{post.desc}</p>
            </div>
        </div>
    );
}

export default PostDetail;