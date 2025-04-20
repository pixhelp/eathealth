import Contact from "../pages/Contact/Contact";
import About from "../pages/About/About";
import Blog from "../pages/Blog/Blog"
import PostDetail from "../pages/PostDetails/PostDetails";
import Home from "../pages/Home/Home";

const routes = [
    {path: "/", element: <Home/>},
    {path: "/contact", element: <Contact/>},
    {path: "/about", element: <About/>},
    {path: "/Blog", element: <Blog/>},
    {path: "/post/:slug", element: <PostDetail/>}
]

export default routes;