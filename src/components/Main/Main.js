import {Routes, Route} from "react-router-dom";
import {MainContainer} from "./Main.styled"
import Home from "../../pages/Home/Home";
import Contact from "../../pages/Contact/Contact";
import About from "../../pages/About/About";
import Blog from "../../pages/Blog/Blog"
import routes from "../../routes/Routes"
import PostDetails from "../../pages/PostDetails/PostDetails"

const Main = () => {
    return (
        <MainContainer>
            <Routes>
                {routes.map(({path, element} , index) => 
                    <Route key={index} path={path} element={element} />
                )};
            </Routes>
        </MainContainer>    
    )
}

export default Main;