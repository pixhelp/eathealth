import { useParams } from "react-router-dom";
import { postData } from "../../data/postData";

const PostDetail = () => {
    const { slug } = useParams();
    const post = postData.find((item) => item.slug === slug);

    if (!post)return <p>rien ici</p>
    return(
        <div>
            <h2>{post.title}</h2>
            <img src={post.img} alt={post.altTitle}/>
            <p>{post.desc}</p>
        </div>
    );
}

export default PostDetail;