import Posts from "../../components/Posts/Posts";
import { postData } from "../../data/postData";
import { ContentPosts } from "../../components/Posts/Post.styles";

const Blog = () => {
    return (
        <div className="pt-5">
            <h1 className="text-xl text-green-400 text-bold font-semibold">TOUT SAVOIR SUR LA NUTRITION</h1>

            <ContentPosts>
                {postData.map((post,index) => (
                    <Posts
                    id={post.id}
                    slug={post.slug}
                    key= {index}
                    title={post.title}
                    desc={post.desc}
                    img={post.img}
                    altTitle={post.altTitle}
                    link={post.link}
                    bgcolorpost={post.bgcolorpost}
                    />
                ))}
            </ContentPosts>
        </div>
    )
}

export default Blog;
