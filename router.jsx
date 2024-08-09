import { createBrowserRouter } from "react-router-dom";
import Home from "./src/pages/home/Home";
import Login from "./src/pages/login/Login";
import Player from "./src/pages/player/Player";

export const router = createBrowserRouter([
    {path:'/', element:<Home />},
    {path:'/login', element:<Login />},
    {path:'/player/:id', element:<Player />}
])