import { createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Layout/Home/Home";
import ViewRecipes from "../pages/ViewRecipes/ViewRecipes";
import Blog from "../pages/Blog/Blog";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/chef/:id",
        element: <ViewRecipes></ViewRecipes>,
        loader: ({ params }) =>
          fetch(
            `https://chef-recipe-hunter-server-side-redowansajeeb.vercel.app/chef/${params.id}`
          ),
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element:<Registration></Registration>
      },
    ],
  },
]);
export default router