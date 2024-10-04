import { createBrowserRouter } from "react-router-dom";
import Home from "./src/pages/home/Home";
import Login from "./src/pages/login/Login";
import Player from "./src/pages/player/Player";
import App from "./src/App";

export const router = createBrowserRouter([
    {path:'/', element:<App />},
    {path:'/home', element:<Home />},
    {path:'/player/:id', element:<Player />}
])