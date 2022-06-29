import Home from "../pages/Home/Home";
import Destination from "../pages/Destination/Destination";
import Crew from "../pages/Crew/Crew";
import Technology from "../pages/Technology/Technology";

export const routes = [
    {path: '/home', component: <Home/>, exact: true},
    {path: '/destination', component: <Destination/>, exact: true},
    {path: '/crew', component: <Crew/>, exact: true},
    {path: '/technology', component: <Technology/>, exact: true},
]
