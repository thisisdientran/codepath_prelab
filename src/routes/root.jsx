import { Link, useRoutes } from "react-router-dom"
import ViewCreator from '../pages/ViewCreator/ViewCreator.jsx'
import ShowCreators from '../pages/ShowCreators/ShowCreators.jsx'
import EditCreator from '../pages/EditCreator/EditCreator.jsx'
import AddCreator from "../pages/AddCreator/AddCreator.jsx"

export default function Root() {
    const routes = useRoutes([
      { path: "/", element: <ShowCreators/> },
      // { path: "/", element: <Root/> },
      { path: "/creator/:id", element: <ViewCreator /> },
      { path: "/creator/:id/edit", element: <EditCreator /> },
      { path: "/new", element: <AddCreator /> },
    ]);
    
  return (
    <>
      <div className="banner">
        <h1 className="title">CREATORVERSE</h1>
        <div className="nav-home">
            <button className="primary"><Link className="link-button" to="/">VIEW ALL CREATORS</Link></button>
            <button className="primary"><Link className="link-button" to="/new">ADD A CREATOR</Link></button>
        </div>
      </div>
      {routes}
    </>
  );
}
