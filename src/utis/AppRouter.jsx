import {createBrowserRouter  } from "react-router-dom";
import App from "../App";
import{About} from "../pages/About/About"
import { Contact } from "../pages/Contact/Contact";
import { Home } from "../pages/Home/Home";
import { Projects } from "../pages/Projects/Projects";
import { Skills } from "../pages/Skills/Skills";
export const AppRouter=createBrowserRouter([{
    element:<App/>,
    path:'',
    children:[
        {
            element:<About/>,
            path:"about",

        },
        {
            element:<Contact/>,
            path:"contact",

        },{
            element:<Home/>,
            path:"",

        },
        {
            element:<Projects/>,
            path:"projects",

        },
        {
            element:<Skills/>,
            path:"skills"

        }
    ]
}])