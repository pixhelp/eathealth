import Contact from "../pages/Contact/Contact";
import About from "../pages/About/About";
import Blog from "../pages/Blog/Blog"
import PostDetail from "../pages/PostDetails/PostDetails";
import Home from "../pages/Home/Home";
import Error404 from "../pages/Error404";

const routes = [
    {path: "*", element: <Error404/>},
    {path: "/", element: <Home/>},
    {path: "/contact", element: <Contact/>},
    {path: "/about", element: <About/>},
    {path: "/Blog", element: <Blog/>},
    {path: "/post/:slug", element: <PostDetail/>}
]

export default routes;