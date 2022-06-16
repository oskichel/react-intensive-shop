import About from "../About/About";
import BeerCard from "../BeerCard/BeerCard";
import Main from "../Main/Main";
import NoPage from "../NoPage/NoPage";

export const routes = [
    {path: '/', component: Main, exact: true},
    {path: '/about', component: About, exact: true},
    {path: '/:id', component: BeerCard, exact: true},
    {path: '/*', component: NoPage, exact: true},
]